import Link from "next/link";

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
    <nav className="bg-black text-white sticky top-0 flex flex-row justify-between z-10">
      <div className="p-3 ml-4">
        <Link href="/">Sanil Gupta</Link>
      </div>

      <ul className="mr-4">
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.About
              ? "bg-white bg-opacity-20"
              : "hover:opacity-50")
          }
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.Blogs
              ? "bg-white bg-opacity-20"
              : "hover:opacity-50")
          }
        >
          <Link href="/blogs">Blogs</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.Projects
              ? "bg-white bg-opacity-20"
              : "hover:opacity-50")
          }
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.Contact
              ? "bg-white bg-opacity-20"
              : "hover:opacity-50")
          }
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
