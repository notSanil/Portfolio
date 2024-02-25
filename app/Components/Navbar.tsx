import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

interface NavbarProps {
  page: Pages;
}

export enum Pages {
  About,
  Blogs,
  Projects,
  Contact,
}

export default function Navbar({ page }: NavbarProps) {
  return (
    <nav className="bg-primary text-zinc-100 sticky top-0 flex flex-row justify-between z-10 border-b border-zinc-800">
      <div className="p-3 ml-4">
        <Link href="/" className="">
          <Image src={logo} alt="" className="h-6 inline-block w-min mx-2" />
          <div className="inline-block px-2">Sanil Gupta</div>
        </Link>
      </div>

      <ul className="mr-4">
        <li
          className={
            "inline-block p-3 mx-1 h-full " +
            (page === Pages.About ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 h-full " +
            (page === Pages.Blogs ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/blogs">Blogs</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 h-full " +
            (page === Pages.Projects ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 h-full " +
            (page === Pages.Contact ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
