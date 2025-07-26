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
          <p className="relative text-center my-4 text-base md:text-[1.4vw] md:leading-[1em]">
            Hi! My name is Sanil, and I am a software developer with a passion
            for back-end development, & graphics. I am currently a fourth-year
            student at{" "}
            <Link
              href="https://pec.ac.in/"
              target="_blank"
              className="text-blue-chill-400"
            >
              Punjab Engineering College{" "}
            </Link>
            pursuing a degree in{" "}
            <Link
              href="https://pec.ac.in/cse"
              target="_blank"
              className="text-blue-chill-400"
            >
              Computer Science.
            </Link>{" "}
            I aspire towards a career that will allow me to create impact while
            working on challenging problems.
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
      <h1 className="text-base md:text-[1.875vw]">TL;DR? Self Proclamations</h1>
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
