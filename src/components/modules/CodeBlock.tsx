import type { BundledLanguage, BundledTheme } from "shiki";

import React from "react";
import { codeToHtml } from "shiki";

import { CopyButton } from "./CopyButton";

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
}

export async function CodeBlock({
  code,
  lang = "javascript",
  theme = "catppuccin-mocha",
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme,
  });

  return (
    <div className="relative my-7">
      <CopyButton className="absolute top-auto right-0" text={code} />
      <div dir="ltr" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
