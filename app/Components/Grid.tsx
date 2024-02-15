"use client"
import { useAnimate } from "framer-motion";
import Tile from "./GridTile";
import { useState, useEffect } from "react";

interface GridProps {
    callback: () => void
}

export default function Grid({ callback }: GridProps) {
    const [windowDimensions, setWindowDimensions] = useState({ width: 1080, height: 720 });
    const [visible, setVisible] = useState(true);
    const [key, setKey] = useState(0);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const centerTileIndex = key;
        const centerTileX = centerTileIndex % numRows;
        const centerTileY = Math.floor(centerTileIndex / numRows);

        const distance = (x1: number, y1: number, x2: number, y2: number) => {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };


        const tileRefs = document.querySelectorAll(".tile");
        tileRefs.forEach(
            (tileRef, index) => {
                const tileX = index % numRows;
                const tileY = Math.floor(index / numRows);

                const dist = distance(centerTileX, centerTileY, tileX, tileY);
                const delayTime = dist * 0.05;

                animate(
                    tileRef,
                    visible ? { opacity: 1 } : { opacity: 0 },
                    {
                        duration: 250 / 1000,
                        delay: delayTime,
                    }
                );
            }
        );
    }, [visible, windowDimensions]);

    const numRows = Math.floor(windowDimensions.width / 100);
    const numCols = Math.floor(windowDimensions.height / 100);

    const renderTile = (key: number) => {
        return (
            <Tile
                key={key}
                callback={() => {
                    setVisible(!visible);
                    setKey(key);
                    callback();
                }}
            />
        );
    };

    const renderGrid = () => {
        const grid = [];
        for (let index = 0; index <= numRows * numCols; ++index) {
            grid.push(renderTile(index));
        }

        return grid;
    };


    return (
        <div
            style={{ display: 'grid', gridTemplateColumns: `repeat(${numRows}, 1fr)`, position: 'relative', gridTemplateRows: `repeat(${numCols}, 1fr)`, height: `calc(100vh - 1px)`, width: `calc(100vw - 1px)`, zIndex: 2 }}
            ref={scope}
        >
            {renderGrid()}
        </div>
    )
}