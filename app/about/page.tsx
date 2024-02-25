import Image from "next/image";
import profilePic from "@/public/ProfilePic-square.png";
import Link from "next/link";
import Navbar, { Pages } from "../Components/Navbar";

export default function AboutMe() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar page={Pages.About} />
      <div className="bg-primary p-4 text-center flex-1 text-zinc-100">
        <h1 className="text-center w-full text-[3.5vw]">
          A little bit about me
        </h1>
        <Image
          src={profilePic}
          alt="Sanil"
          className="self-center rounded-full left-1/2 relative -translate-x-1/2 w-40 h-40"
        />
        <p className="relative text-center w-1/2 left-1/4 my-4 text-[1.4vw]">
          Hi! My name is Sanil, and I am a software developer with a passion for
          back-end development, & graphics. I am currently a fourth-year student
          at{" "}
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
          When I am not coding, I enjoy video games, petting dogs, and cycling.
        </p>
        <SelfProclamations />
      </div>
    </main>
  );
}

function SelfProclamations() {
  return (
    <div className="text-center bg-blue-chill-950 bg-opacity-20 w-1/2 left-1/4 relative mb-4 rounded-sm text-zinc-100 border-blue-chill-600 border">
      <h1 className="text-[1.875vw]">TL;DR? Self Proclamations</h1>
      <div className="flex flex-row relative justify-between">
        <div className="m-2 grow basis-0 overflow-hidden">
          <div>
            <span className="material-symbols-outlined text-[4.688vw]">
              keyboard
            </span>
          </div>
          Software developer
        </div>
        <div className="m-2">
          <div>
            <span className="material-symbols-outlined text-[4.688vw]">
              stadia_controller
            </span>
          </div>
          Gamer
        </div>
        <div className="m-2 grow basis-0 overflow-hidden">
          <div>
            <span className="material-symbols-outlined text-[4.688vw]">
              directions_bike
            </span>
          </div>
          Cyclist
        </div>
      </div>
    </div>
  );
}
