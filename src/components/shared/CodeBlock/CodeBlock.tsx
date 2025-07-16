import type { BundledLanguage } from 'shiki';

import React from 'react';
import { codeToHtml } from 'shiki';

import { CopyButton } from '@/components/shared/CopyButton/CopyButton';

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
}

export async function CodeBlock({ code, lang = 'javascript' }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: 'catppuccin-mocha',
  });

  return (
    <div className="relative my-7">
      <CopyButton text={code} />
      <div dir="ltr" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
