import Link from "next/link";
import Navbar, { Pages } from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar page={Pages.Contact} />
      <div className="relative bg-primary p-4 pb-8 text-zinc-100 min-h-[70vh]">
        <div className="h-full w-full flex flex-col text-center">
          <div className="relative mt-[2vh]">
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
            className="rounded relative text-center border-2 text-xl px-4 py-2 border-blue-chill-300 text-blue-chill-300 w-fit self-center hover:bg-blue-chill-700 ease-in-out transition-colors duration-500"
          >
            Say Hello
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
