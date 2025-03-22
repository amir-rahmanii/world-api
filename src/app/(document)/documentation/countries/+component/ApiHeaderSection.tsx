import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

import type { ApiHeader } from "../page";

export default function ApiHeaderSection({
  title,
  description,
  endpoint,
}: ApiHeader) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <h4>🚀 درخواست {title} </h4>
      <CodeBlock
        lang="http"
        code={`${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}${endpoint}`}
        isMethode
      />
    </>
  );
}
