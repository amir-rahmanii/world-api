import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

const defaultResponse =`[{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "ایران",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IR.svg",
"capital": "تهران",
"calling_code": 98,
"continent": "آسیا",
"lat": 32.0,
"long": 53.0
}]`

export default function ApiResponseExample({
  responseJson = defaultResponse,
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
