import NavTile from "./NavTile";
import logo from "@/public/logo.svg";
import Image from "next/image";

interface NavigationProps {
  callback: () => void;
  enabled: boolean;
}

export default function Navigation({ callback, enabled }: NavigationProps) {
  return (
    <div
      className={
        "absolute -z-[1] h-screen w-screen grid grid-cols-3 transition-opacity duration-500 grid-rows-3 overflow-hidden " +
        (enabled ? null : "opacity-0")
      }
    >
      <NavTile
        link="/about"
        colStart="col-start-1"
        colEnd="col-end-3"
        rowStart="row-start-1"
        rowEnd="row-end-2"
      >
        About.
      </NavTile>

      <NavTile
        link="/projects"
        colStart="col-start-3"
        colEnd="col-end-4"
        rowStart="row-start-1"
        rowEnd="row-end-3"
      >
        Projects.
      </NavTile>

      <NavTile
        link="/blogs"
        colStart="col-start-1"
        colEnd="col-end-2"
        rowStart="row-start-2"
        rowEnd="row-end-4"
      >
        Blogs.
      </NavTile>

      <NavTile
        link="/contact"
        colStart="col-start-2"
        colEnd="col-end-4"
        rowStart="row-start-3"
        rowEnd="row-end-4"
      >
        Contact.
      </NavTile>

      <NavTile
        link=""
        colStart="col-start-2"
        colEnd="col-end-3"
        rowStart="row-start-2"
        rowEnd="row-end-3"
      >
        <Image
          src={logo}
          alt="Sanil"
          className="h-full left-1/2 relative p-4 -translate-x-1/2"
        />
      </NavTile>
    </div>
  );
}
