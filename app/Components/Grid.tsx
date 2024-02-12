"use client"
import Tile from "./GridTile";
import { useState, useEffect } from "react";

export default function Grid() {
    const [windowDimensions, setWindowDimensions] = useState({ width: 1080, height: 720 });

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

    const numRows = Math.floor(windowDimensions.width / 100);
    const numCols = Math.floor(windowDimensions.height / 100);

    const tileWidth = windowDimensions.width / numRows;
    const tileHeight = windowDimensions.height / numCols;

    const renderTile = (key: number) => {
        return (
            <Tile
                height={tileHeight}
                width={tileWidth}
                key={key}
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
        >
            {renderGrid()}
        </div>
    )
}