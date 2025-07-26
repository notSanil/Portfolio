import { getSortedPostsData } from "@/lib/posts";
import Navbar from "../Components/Navbar";
import { Pages } from "@/lib/Pages";
import Post from "../Components/Post";

export default function Blogs() {
  const posts = getSortedPostsData();

  const generatePosts = () => {
    const postComponents = [];

    for (var post of posts) {
      postComponents.push(
        <Post
          title={post.title}
          description={post.description}
          date={post.date}
          id={post.id}
          key={post.id}
        />
      );
    }

    return postComponents;
  };

  return (
    <main>
      <Navbar page={Pages.Blogs} />
      <div className="relative bg-primary text-center min-h-screen overflow-hidden text-zinc-100">
        <h5 className="text-5xl p-2">Rants</h5>
        <div>{generatePosts()}</div>
      </div>
    </main>
  );
}
