import Image from "next/image";
import GradientBackground from "../Components/GradientBackground"
import profilePic from "../../public/next.svg"
import Link from "next/link";
import { Glegoo } from "next/font/google";

const glegoo = Glegoo({ subsets: ["latin"], weight: "400" });

export default function AboutMe() {
    const primaryTextColor: string = '#6200ea';
    const secondaryTextColor: string = '#ec407a';

    return (
        <main>
            <GradientBackground
                colors={[primaryTextColor, secondaryTextColor, primaryTextColor]}
                enabled={false}
                className={`flex-col ${glegoo.className}`}
            >
                <h1 className="text-center w-full mt-10 text-[3.5vw] text-white">A little bit about me</h1>
                <Image
                    src={profilePic}
                    alt="Sanil"
                    width={100}
                    height={100}
                    className="self-center rounded-full"
                />
                <p className="relative text-center text-white w-1/2 left-1/4 my-4 text-[1.4vw]">
                    Hi! My name is Sanil, and I am a software developer with a passion for back-end development, & graphics.
                    I am currently a fourth-year student at <Link href="https://pec.ac.in/" target="_blank" className="text-green-300">Punjab Engineering College </Link>
                    pursuing a degree in <Link href="https://pec.ac.in/cse" target="_blank" className="text-green-300">Computer Science.</Link> I aspire towards a career
                    that will allow me to create impact while working on challenging problems.
                    <br></br>
                    <br></br>
                    When I am not coding, I enjoy video games, petting dogs, and cycling.
                </p>
                <div className="text-white text-center bg-slate-200 bg-opacity-20 w-1/2 left-1/4 relative mb-4">
                    <h1 className="text-[1.875vw]">TL;DR? Self Proclamations</h1>
                    <div className="flex flex-row relative justify-between">
                        <div className="m-2 grow basis-0 overflow-hidden">
                            <div>
                                <span className="material-symbols-outlined text-[4.688vw]">keyboard</span>
                            </div>
                            Software developer
                        </div>
                        <div className="m-2">
                            <div>
                                <span className="material-symbols-outlined text-[4.688vw]">stadia_controller</span>
                            </div>
                            Gamer
                        </div>
                        <div className="m-2 grow basis-0 overflow-hidden">
                            <div>
                                <span className="material-symbols-outlined text-[4.688vw]">directions_bike</span>
                            </div>
                            Cyclist
                        </div>
                    </div>
                </div>
            </GradientBackground>
        </main>
    );
}