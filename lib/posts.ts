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
    const aDate = convertToDate(a.date)
    const bDate = convertToDate(b.date)
    if (aDate < bDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

function convertToDate(s: String) {
  const day = parseInt(s.slice(0, 2))
  const month = parseInt(s.slice(3, 5))
  const year = parseInt(s.slice(7))

  return new Date(year, month, day)
}

export function getPostFromSlug(slug: string) {
  const filepath = path.join(postsDirectory, `${slug}.md`);
  var fileContents: string;
  try {
    fileContents = fs.readFileSync(filepath, "utf-8");
  } catch (err) {
    return null;
  }
  const { data, content } = matter(fileContents);
  return { ...data, content } as Post;
}
