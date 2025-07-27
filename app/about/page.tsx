import Image from "next/image";
import profilePic from "@/public/ProfilePic-square.png";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import { Pages } from "@/lib/Pages";

export default function AboutMe() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar page={Pages.About} />
      <div className="bg-primary p-2 text-center flex-1 text-zinc-100">
        <h1 className="m-2 text-center w-full text-2xl md:text-[3.5vw] md:leading-[1em]">
          A little bit about me
        </h1>
        <Image
          src={profilePic}
          alt="Sanil"
          className="rounded-full mx-auto size-32 md:size-40"
        />
        <div className="mx-4 md:w-1/2 md:m-auto md:p-1">
          <p className="relative text-left my-4 text-base md:text-[1.1vw] md:leading-[1em] font-thin">
            Hi! My name is Sanil, and I spend my days talking to computers. Sometimes they listen, other
            times, it takes a few tries, and a lot of coffee.
            <br />
            <br />
            My journey began when I looked at a video on YouTube about making games, and thought to myself,
            &quot;I should trying doing that&quot;. Since then, I have never once completed a game, wrote a somewhat functional
            <Link href={"https://github.com/notSanil/SAGE2D"} className="text-blue-chill-400"> game engine</Link> and,
            got a career writing backend code and posing as a DevOps engineer. I am particularly fascinated by how we can
            make machines that are effectively fancy calculators run the whole world.
            <br />
            <br />
            This corner of the internet is my space to write about some of my thoughts, be it deep dives into code & tech,
            or stories about infuriating bugs and their absurd solutions. When my code is being particularly uncooperative,
            you may find me wandering off into rants about life, or whatever else pops in my head that day.
            <br></br>
            <br></br>
            When I am not coding, I enjoy video games, petting dogs, and
            cycling.
          </p>
          <SelfProclamations />
        </div>
      </div>
    </main>
  );
}

function SelfProclamations() {
  return (
    <div className="text-center bg-blue-chill-950 relative mb-4 rounded-sm text-zinc-100 border-blue-chill-600 border p-2">
      <h1 className="text-base md:text-[1.875vw] md:mt-[0.125em]">TL;DR? Self Proclamations</h1>
      <div className="flex flex-row relative justify-between">
        <div className="m-2 grow basis-0 overflow-hidden text-[10px] md:text-base">
          <div>
            <span className="material-symbols-outlined text-5xl md:text-[4.688vw]">
              keyboard
            </span>
          </div>
          Software developer
        </div>
        <div className="m-2 text-[10px] md:text-base">
          <div>
            <span className="material-symbols-outlined text-5xl md:text-[4.688vw]">
              stadia_controller
            </span>
          </div>
          Gamer
        </div>
        <div className="m-2 grow basis-0 overflow-hidden text-[10px] md:text-base">
          <div>
            <span className="material-symbols-outlined text-5xl md:text-[4.688vw]">
              directions_bike
            </span>
          </div>
          Cyclist
        </div>
      </div>
    </div>
  );
}
