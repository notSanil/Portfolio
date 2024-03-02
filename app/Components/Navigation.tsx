import NavTile from "./NavTile";
import logo from "@/public/logo.svg";
import Image from "next/image";

interface NavigationProps {
  callback: () => void;
  enabled: boolean;
}

export default function Navigation({ callback, enabled }: NavigationProps) {
  return (
    <ul
      className={
        "absolute -z-[1] h-screen w-screen grid grid-cols-1 md:grid-cols-3 transition-opacity duration-500 grid-rows-4 md:grid-rows-3 overflow-hidden " +
        (enabled ? null : "opacity-0")
      }
    >
      <NavTile
        link="/about"
        className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2"
      >
        About.
      </NavTile>

      <NavTile
        link="/projects"
        className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3"
      >
        Projects.
      </NavTile>

      <NavTile
        link="/blogs"
        className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4"
      >
        Blogs.
      </NavTile>

      <NavTile
        link="/contact"
        className="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4"
      >
        Contact.
      </NavTile>

      <NavTile
        link=""
        className="hidden md:block md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3"
      >
        <Image
          src={logo}
          alt="Sanil"
          className="h-full left-1/2 relative p-4 -translate-x-1/2"
        />
      </NavTile>
    </ul>
  );
}
