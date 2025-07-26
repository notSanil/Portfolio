"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useState } from "react";
import { Pages } from "@/lib/Pages";
import menu from "./Icons/hamburger-menu.svg";

interface NavbarProps {
  page: Pages;
}

export default function Navbar({ page }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-zinc-100 sticky top-0 flex flex-wrap flex-row justify-between z-10 border-b border-zinc-800 items-center">
      <div className="p-3 ml-4">
        <Link href="/">
          <div className="logo-glitch px-2">Random Access Rants</div>
        </Link>
      </div>

      <div onClick={() => setOpen(!open)} className="mr-4 p-2 h-fit md:hidden">
        <Image src={menu} alt="Menu" height={24}></Image>
      </div>

      <ul
        className={
          "absolute top-12 md:top-0 bg-inherit overflow-auto md:bg-none md:static md:mr-4 md:flex md:flex-row w-full md:w-fit " +
          (open ? "" : "hidden")
        }
      >
        <NavItem currentPage={page} referringPage={Pages.Home} link="/" />
        <NavItem currentPage={page} referringPage={Pages.Blogs} link="/blogs" />
        <NavItem currentPage={page} referringPage={Pages.About} link="/about" />
        <NavItem
          currentPage={page}
          referringPage={Pages.Contact}
          link="/contact"
        />
      </ul>
    </nav>
  );
}

interface NavItemParams {
  currentPage: Pages;
  referringPage: Pages;
  link: string;
}

function NavItem({ currentPage, referringPage, link }: NavItemParams) {
  return (
    <li
      className={
        "block p-3 md:mx-1 h-full text-center " +
        (currentPage === referringPage
          ? "bg-blue-chill-950"
          : "hover:opacity-50")
      }
    >
      <Link href={link}>{Pages[referringPage]}</Link>
    </li>
  );
}
