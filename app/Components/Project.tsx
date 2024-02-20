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
      <div className="p-4">
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
    <div className="relative grid grid-cols-2 left-[12.5%] w-3/4 mt-4 p-1">
      {direction == Direction.Left ? createImage() : null}

      <div>
        <p className="p-1 text-justify pt-4">
          <b className="text-lg">{name}</b> - {description}
        </p>

        <Link
          href={link}
          className="p-1 text-xl px-4 border-b border-black transition-all duration-500 hover:bg-blue-700"
        >
          View{" "}
        </Link>
      </div>
      {direction == Direction.Right ? createImage() : null}
    </div>
  );
}
