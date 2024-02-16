"use client"
import { Dancing_Script } from "next/font/google";
import GradientBackground from "./Components/GradientBackground";
import Grid from "./Components/Grid";
import { useState } from "react";
import NavTile from "./Components/NavTile";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: '700' });

export default function Home() {
  const [enabled, setEnabled] = useState(true);

  const primaryTextColor: string = '#6200ea';
  const secondaryTextColor: string = '#ec407a';

  const tileClickCallback = () => {
    setEnabled(!enabled);
  };

  return (
    <main>
      <GradientBackground
        colors={[primaryTextColor, secondaryTextColor, primaryTextColor]}
        enabled={enabled}
      >
        <Grid callback={tileClickCallback} />

        <h1 className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[5vw] transition-opacity duration-500 z-[3] text-white pointer-events-none " + (enabled ? "" : "opacity-0")}>
          Hi! My name is <br></br>
          <span className={`${dancingScript.className} text-[2em]/[0.9em] text-titleSecondary -translate-x-0`}> Sanil</span>
        </h1>

        <div className="absolute -z-[1] h-screen w-screen grid grid-cols-3 grid-rows-3 overflow-hidden">
          <NavTile
            link="/about"
            colStart="col-start-1"
            colEnd="col-end-3"
            rowStart="row-start-1"
            rowEnd="row-end-2">
            About
          </NavTile>

          <NavTile
            link="/projects"
            colStart="col-start-3"
            colEnd="col-end-4"
            rowStart="row-start-1"
            rowEnd="row-end-3">
            Projects
          </NavTile>

          <NavTile
            link="/blogs"
            colStart="col-start-1"
            colEnd="col-end-2"
            rowStart="row-start-2"
            rowEnd="row-end-4">
            Blogs
          </NavTile>

          <NavTile
            link="/contact"
            colStart="col-start-2"
            colEnd="col-end-4"
            rowStart="row-start-3"
            rowEnd="row-end-4"
          >
            Contact
          </NavTile>
        </div>


      </GradientBackground>
    </main>
  );
}
