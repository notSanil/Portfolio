import Link from "next/link";
import GradientBackground from "../Components/GradientBackground";
import Navbar, { Pages } from "../Components/Navbar";

export default function Contact() {
  const primaryTextColor: string = "#6200ea";
  const secondaryTextColor: string = "#ec407a";
  return (
    <main>
      <Navbar page={Pages.Contact} />
      <GradientBackground
        colors={[primaryTextColor, secondaryTextColor, primaryTextColor]}
        enabled={false}
      >
        <div className="h-full w-full flex flex-col text-center text-white">
          <div className="relative mt-12">
            <span className="material-symbols-outlined text-9xl">
              waving_hand
            </span>
          </div>
          <div className="relative w-1/2 left-1/4 text-4xl">GET IN TOUCH!</div>
          <div className="text-lg w-1/3 left-1/3 relative my-5">
            Do you want to discuss a project or just have a chat, feel free to
            drop an email!
          </div>

          <Link
            href="mailto:sanilg566@gmail.com"
            className="relative text-center border-2 text-xl px-4 py-2 border-black w-fit self-center hover:bg-blue-300 hover:text-black hover:border-blue-300 ease-in-out transition-colors duration-500"
          >
            Say Hello
          </Link>
        </div>
      </GradientBackground>
    </main>
  );
}
