import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        date: string;
        description: string;
        title: string;
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostFromSlug(slug: string) {
  const filepath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filepath);
  const {data, content} = matter(fileContents);
  return {...data, content} as Post;
}