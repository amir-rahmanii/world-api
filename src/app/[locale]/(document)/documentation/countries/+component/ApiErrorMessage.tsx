import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

import type { ApiError } from "../layout";

export default function ApiErrorMessage({
  title,
  message,
  status = 400,
}: ApiError) {
  return (
    <>
      <h4>{title}</h4>
      <CodeBlock
        lang="json"
        code={`{
  "error": "${message}",
  "status": ${status}
}`}
      />
    </>
  );
}
