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
    <nav className="bg-primary text-zinc-100 sticky top-0 flex flex-row justify-between z-10 border-b border-zinc-800">
      <div className="p-3 ml-4">
        <Link href="/">Sanil Gupta</Link>
      </div>

      <ul className="mr-4">
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.About ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.Blogs ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/blogs">Blogs</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.Projects ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={
            "inline-block p-3 mx-1 " +
            (page === Pages.Contact ? "bg-blue-chill-950" : "hover:opacity-50")
          }
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
