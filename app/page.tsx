"use client"
import { useState, useEffect } from "react";
import Tile from "./Components/GridTile";
import { Dancing_Script } from "next/font/google";
import GradientBackground from "./Components/GradientBackground";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: '700' });

export default function Home() {
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

  const primaryTextColor: string = '#6200ea';
  const secondaryTextColor: string = '#ec407a'

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

  const renderRow = (rowIndex: number) => {
    const row = [];
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      row.push(renderTile(colIndex));
    }
    return <div key={rowIndex} className="row">{row}</div>;
  };

  const renderGrid = () => {
    const grid = [];
    for (let index = 0; index <= numRows * numCols; ++index) {
      grid.push(renderTile(index));
    }

    return grid;
  };

  return (
    <main>
      <GradientBackground
        colors={[primaryTextColor, secondaryTextColor, primaryTextColor]}
      >
        
        <div
          style={{ display: 'grid', gridTemplateColumns: `repeat(${numRows}, 1fr)`, position: 'relative', gridTemplateRows: `repeat(${numCols}, 1fr)`, height: `calc(100vh - 1px)`, width: `calc(100vw - 1px)`, zIndex: 2}}
        >
          {renderGrid()}
        </div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[6vw] z-[3] text-white pointer-events-none">
          Hi! My name is <br></br>
          <span className={`${dancingScript.className} text-[1.5em]/[0.9em] text-titleSecondary`}> Sanil</span>
        </h1>
      </GradientBackground>
    </main>
  );
}
