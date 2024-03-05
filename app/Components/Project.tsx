import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  image: any;
  direction: Direction;
}

export enum Direction {
  Left,
  Right,
}

export default function Project({
  name,
  description,
  link,
  image,
  direction,
}: ProjectProps) {
  function createImage() {
    return (
      <div className="hidden md:block p-1 md:p-4 flex-1">
        <Image
          src={image}
          height={0}
          width={0}
          alt={name}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }

  function createMobileImage() {
    return (
      <div className="md:hidden p-1 md:p-4 flex-1">
        <Image
          src={image}
          height={0}
          width={0}
          alt={name}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col md:flex-row content-evenly mx-4 md:m-auto md:w-3/4 mt-6 md:mt-4 p-1 text-zinc-100">
      {createMobileImage()}
      {direction == Direction.Left ? createImage() : null}

      <div className="p-1 md:p-3 flex-1">
        <p className="p-1 text-justify md:pt-4">
          <b className="text-xl text-blue-chill-400">{name}</b> - {description}
        </p>

        <Link
          href={link}
          className="p-1 text-xl text-blue-chill-950 px-4 bg-blue-chill-400 rounded hover:bg-blue-chill-300"
        >
          View{" "}
        </Link>
      </div>
      {direction == Direction.Right ? createImage() : null}
    </div>
  );
}
