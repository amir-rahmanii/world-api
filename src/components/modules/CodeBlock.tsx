import type { BundledLanguage, BundledTheme } from "shiki";

import React from "react";
import { codeToHtml } from "shiki";

import { CopyButton } from "./CopyButton";
import { Button } from "../ui/button";

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  isMethode?: boolean;
}

export async function CodeBlock({
  code,
  lang = "javascript",
  theme = "catppuccin-mocha",
  isMethode = false,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme,
  });

  return (
    <div className="relative my-7">
      <CopyButton className="absolute top-auto right-0" text={code} />
      <div className="flex items-center justify-end gap-4 bg-[#1e1e2e] rounded-md p-6 overflow-auto">
        <div dir="ltr" dangerouslySetInnerHTML={{ __html: html }}></div>
        {isMethode && <span className="font-semibold text-[#CBA6F7]">GET</span>}
      </div>
    </div>
  );
}
