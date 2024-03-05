import Link from "next/link";
import { HTMLAttributes } from "react";

interface NavTileParams extends HTMLAttributes<HTMLLIElement> {
  link: string;
  children?: any;
}

export default function NavTile({ link, children, className }: NavTileParams) {
  return (
    <li
      className={
        `${className} relative bg-white bg-opacity-15 underline decoration-2 decoration-zinc-100 underline-offset-auto m-2 rounded-sm ` +
        (link.length > 0 ? "hover:bg-black hover:bg-opacity-15" : null)
      }
    >
      {link.length > 0 ? (
        <Link
          href={link}
          className="h-full w-full inline-block text-center md:text-left"
        >
          <h1 className="md:m-4 text-5xl md:text-4xl text-zinc-100 top-1/2 relative -translate-y-1/2 md:top-0 md:translate-y-0">
            {children}
          </h1>
        </Link>
      ) : (
        children
      )}
    </li>
  );
}
