"use client"
import GradientBackground from "./Components/GradientBackground";
import Grid from "./Components/Grid";
import Navigation from "./Components/Navigation";
import { AnimatePresence } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";

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
        <AnimatePresence>
          {enabled ? <Grid callback={tileClickCallback} /> : null}
        </AnimatePresence>

        <h1 className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[5vw] transition-opacity duration-500 z-[3] text-white pointer-events-none " + (enabled ? "" : "opacity-0")}>
          Hi! My name is <br></br>
          <span className={`${dancingScript.className} text-[2em]/[0.9em] text-titleSecondary -translate-x-0`}> Sanil</span>
        </h1>

        <Navigation />
      </GradientBackground>
    </main>
  );
}
