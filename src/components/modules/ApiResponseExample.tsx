import { CodeBlock } from "@/components/modules/CodeBlock";
import { defaultResponseJsonFa } from "@/constants/defaultResponse";
import React from "react";



export default function ApiResponseExample({
  responseJson = defaultResponseJsonFa,
}: {
  responseJson?: string;
}) {
  return (
    <>
      <h4>📝 نمونه پاسخ:</h4>
      <CodeBlock lang="json" code={responseJson} />
    </>
  );
}
