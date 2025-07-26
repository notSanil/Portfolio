import Image from "next/image";
import { Pages } from "@/lib/Pages";
import Navbar from "./Components/Navbar";
import profilePic from "@/public/ProfilePic-square.png";
import Footer from "./Components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import { JSX } from "react";
import Link from "next/link";

export default function Home() {
  function getLatest4Posts() {
    const allPosts = getSortedPostsData();

    let generatedPosts: JSX.Element[] = []
    allPosts.slice(0, 4).forEach((postData) => {
      generatedPosts.push(
        <PostHeading key={postData.title} heading={postData.title} caption={postData.description} year={postData.date.slice(-4)} id={postData.id} />)
    })
    return generatedPosts
  }
  return (
    <>
      <main className="bg-primary text-zinc-100 flex-grow">
        <Navbar page={Pages.Home}></Navbar>
        <div className="relative flex items-center justify-center mt-7 md:mt-28">
          <div className="relative flex items-end justify-center">
            <span className="absolute right-full -mr-4 text-2xl whitespace-nowrap bottom-0 hidden md:block">Welcome to</span>
            <h1 className="text-6xl px-8 pt-4 logo-glitch text-center">Random Access Rants</h1>
          </div>
        </div>
        <div className="text-center text-base md:text-2xl mt-8">
          Technical insights, Unfiltered thoughts, <br /> and Occassional breakdowns
        </div>
        <div className="mt-7 md:mt-28 flex flex-col md:flex-row w-full p-4 overflow-auto">
          <AboutBox />
          <div className="mx-3 md:w-4/5 flex flex-col space-y-6 md:space-y-12">
            {getLatest4Posts()}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

interface PostHeadingProps {
  heading: string,
  caption: string,
  year: string,
  id: string
}

function PostHeading({ heading, caption, year, id }: PostHeadingProps) {
  return <Link href={`/blogs/${id}`} className="hover:text-blue-chill-200">
    <div className="mt-1.5 md:mt-1.5 md:mx-2 text-lg md:text-4xl flex justify-between items-end">
      {heading}
      <span className="text-xs md:text-base text-left size-fit">
        /{year}
      </span>
    </div>
    <div className="text-xs mt-0.5 md:mx-2 md:text-base flex items-end justify-between">
      {caption}
      <span className="text-left size-fit">&rarr;</span>
    </div>
  </Link>
}

function AboutBox() {
  return <div className="md:w-1/5 mx-3 md:mr-6 mb-6 bg-blue-chill-500 rounded-3xl">
    <div className="mt-5 mx-3">
      <Image
        src={profilePic}
        alt="Profile Picture"
        className="h-40 object-cover rounded-2xl"
      />
      <div className="text-justify mt-8 mb-2">
        I am Sanil Gupta, I write code for a living, and sometimes it even works.
        <br></br><br></br>
        I also rant about things - the tech, the code, and the utterly baffling - and you can find some
        of my thoughts, and learnings here.
      </div>
    </div>
  </div>
}