import Navbar, { Pages } from "@/app/Components/Navbar";
import { getPostFromSlug, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import Article from "@/app/Components/Article";

interface BlogParams {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ slug: post.id }));
}

export default function Blog({ params }: BlogParams) {
  const { slug } = params;

  const post = getPostFromSlug(slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar page={Pages.Blogs} />
      <div className="p-4 px-10 bg-primary flex-grow flex-shrink-0">
        <div className="text-center text-5xl mb-4 text-zinc-100">
          {post.title}
        </div>
        <Article content={post.content} />
      </div>
    </main>
  );
}
