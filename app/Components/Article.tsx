"use client";

import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import "./Article.css";

hljs.registerLanguage("cpp", cpp);

const rubik = Rubik({ weight: "300", subsets: ["latin"] });

import Markdown from "react-markdown";
import { useEffect } from "react";
import { Roboto, Rubik } from "next/font/google";

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
        "prose prose-invert prose-inline-code:rounded prose-inline-code:bg-gray-600 \
        prose-inline-code:before:invisible prose-inline-code:after:invisible \
        prose-inline-code:border prose-inline-code:border-gray-600 mx-auto prose-lg " +
        rubik.className
      }
    >
      <Markdown>{content}</Markdown>
    </article>
  );
}
