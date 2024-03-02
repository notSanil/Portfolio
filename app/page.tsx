"use client";
import GradientBackground from "./Components/GradientBackground";
import Grid from "./Components/Grid";
import Navigation from "./Components/Navigation";
import { AnimatePresence } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [enabled, setEnabled] = useState(true);

  const primaryTextColor: string = "#1C6E55";
  const secondaryTextColor: string = "#1c5e6e";

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

        <h1
          className={
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-[5vw] transition-opacity duration-500 z-[3] text-white pointer-events-none " +
            (enabled ? "" : "opacity-0")
          }
        >
          Hi! My name is <br></br>
          <span
            className={`${dancingScript.className} text-8xl md:text-[2em]/[0.9em] text-blue-chill-bright -translate-x-0`}
          >
            {" "}
            Sanil
          </span>
        </h1>

        <Navigation callback={tileClickCallback} enabled={!enabled} />
      </GradientBackground>
    </main>
  );
}
