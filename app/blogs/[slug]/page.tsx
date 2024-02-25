import Navbar, { Pages } from "@/app/Components/Navbar";
import { getPostFromSlug, getSortedPostsData } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import style from "./markdown-styles.module.css";

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

  return (
    <main>
      <Navbar page={Pages.Blogs} />
      <div className="p-4 px-10">
        <div className="text-center text-5xl mb-4">{post.title}</div>
        <Markdown
          remarkPlugins={[remarkBreaks]}
          children={post.content}
          className={style.reactMarkdown}
        />
      </div>
    </main>
  );
}
