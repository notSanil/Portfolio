import { getSortedPostsData } from "@/lib/posts";
import Navbar, { Pages } from "../Components/Navbar";
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
        <h5 className="text-5xl p-2">Thoughts & Notes</h5>
        <h1 className="text-sm m-2 mb-4">
          A collection of things I think about, and other useful stuff.
        </h1>
        <div className="border-b-2 border-dashed border-blue-chill-600 mx-2"></div>
        <div>{generatePosts()}</div>
      </div>
    </main>
  );
}
