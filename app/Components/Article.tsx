"use client";

import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import "./Article.css";

hljs.registerLanguage("cpp", cpp);

const rubik = Rubik({ weight: "300", subsets: ["latin"] });

import Markdown from "react-markdown";
import { useEffect } from "react";
import { Rubik } from "next/font/google";

interface ArticleParams {
  content: string;
}

export default function Article({ content }: ArticleParams) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <article
      className={
        "prose prose-invert prose-inlineCode prose-inline:bg-gray-600 \
        prose-strong:text-blue-chill-400 prose-em:text-[#f0d2c8] \
        prose-inline:border-gray-600 prose-quoteless hover:prose-a:text-blue-chill-600 \
        prose-p:text-blue-chill-50 mx-auto prose-lg " + rubik.className
      }
    >
      <Markdown>{content}</Markdown>
    </article>
  );
}
