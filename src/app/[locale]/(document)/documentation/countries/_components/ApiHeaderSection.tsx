import type { ApiHeader } from "@/types/apiHeader.types";

import { CodeBlock } from "@/components/shared/CodeBlock/CodeBlock";
import { useTranslations } from "next-intl";
import React from "react";

export default function ApiHeaderSection({
  translationKey,
  endpoint,
}: ApiHeader) {
  const t = useTranslations("documentationPage.countriesPage");
  return (
    <>
      <h1>{t(`${translationKey}.title`)}</h1>
      <p>{t(`${translationKey}.description`)}</p>
      <h4>{t(`${translationKey}.request`)} </h4>
      <CodeBlock
        lang="http"
        code={`GET ${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}${endpoint}`}
      />
    </>
  );
}
