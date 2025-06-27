import { useTranslations } from "next-intl";
import React from "react";

import { CodeBlock } from "@/components/shared/CodeBlock/CodeBlock";
import { DEFAULT_RESPONSE_JSON_FA } from "@/constants/defaultResponse.constant";

export default function ApiResponseExample({
  responseJson = DEFAULT_RESPONSE_JSON_FA,
}: {
  responseJson?: string;
}) {
  const t = useTranslations("codeBlock");
  return (
    <>
      <h4>{t("responseSampleTitle")}</h4>
      <CodeBlock lang="json" code={responseJson} />
    </>
  );
}
