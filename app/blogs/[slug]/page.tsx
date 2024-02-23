import Navbar, { Pages } from "@/app/Components/Navbar";
import { getPostFromSlug, getSortedPostsData } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

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
      <div className="p-2">
        <div className="text-center text-5xl">{post.title}</div>
        <Markdown
          remarkPlugins={[remarkBreaks]}
          children={post.content.replace(/\n/gi, "&nbsp; \n")}
        />
      </div>
    </main>
  );
}
