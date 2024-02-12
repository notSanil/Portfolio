import { Dancing_Script } from "next/font/google";
import GradientBackground from "./Components/GradientBackground";
import Grid from "./Components/Grid";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: '700' });

export default function Home() {
  const primaryTextColor: string = '#6200ea';
  const secondaryTextColor: string = '#ec407a'

  return (
    <main>
      <GradientBackground
        colors={[primaryTextColor, secondaryTextColor, primaryTextColor]}
      >
        <Grid />

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[6vw] z-[3] text-white pointer-events-none">
          Hi! My name is <br></br>
          <span className={`${dancingScript.className} text-[1.5em]/[0.9em] text-titleSecondary`}> Sanil</span>
        </h1>
      </GradientBackground>
    </main>
  );
}