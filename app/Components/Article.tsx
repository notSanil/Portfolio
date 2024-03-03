"use client";

import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import "./Article.css";

hljs.registerLanguage("cpp", cpp);

import Markdown from "react-markdown";
import { useEffect } from "react";

interface ArticleParams {
  content: string;
}

export default function Article({ content }: ArticleParams) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <article className={"prose prose-invert mx-auto prose-lg"}>
      <Markdown>{content}</Markdown>
    </article>
  );
}
