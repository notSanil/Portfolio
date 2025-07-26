import Link from "next/link";

interface PostProps {
  title: string;
  description: string;
  date: string;
  id: string;
}

export default function Post({ title, description, date, id }: PostProps) {
  const link = id;

  return (
    <div className="overflow-hidden text-left">
      <Link
        href={`/blogs/${link}`}
        className="h-full left-0 max-w-screen-xl inline-block text-3xl text-left p-4 hover:scale-105 hover:translate-x-5 overflow-hidden transition-transform ease-in-out duration-250"
      >
        <div className="flex flex-row items-baseline">
          <div className="text-xs w-fit mr-3">{date}</div> {title}
        </div>
        <div className="text-base">{description}</div>
      </Link>
    </div>
  );
}
