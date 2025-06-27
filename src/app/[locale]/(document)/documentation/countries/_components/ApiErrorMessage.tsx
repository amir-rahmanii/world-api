import { useTranslations } from "next-intl";
import React from "react";

import { CodeBlock } from "@/components/shared/CodeBlock/CodeBlock";

import type { ApiError } from "../layout";

export default function ApiErrorMessage({
  title,
  message,
  status = 400,
}: ApiError) {
  const t = useTranslations("documentationPage.error");
  return (
    <>
      <h4>{t(title)}</h4>
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
