import type { LanguageType } from "@/types/locale.types";

import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

export default function ApiRequestExample({
  endpoint,
  acceptLanguage = "fa",
}: {
  endpoint: string;
  acceptLanguage?: LanguageType;
}) {
  return (
    <>
      <h4>📝 نمونه کد درخواست:</h4>
      <CodeBlock
        code={`fetch("${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}${endpoint}", { 
  method: "GET", 
  headers: { 
    "X-API-Key": "your-api-key",  // 🔴 جایگزینی کلید شما در اینجا
    "Accept-Language" : "${acceptLanguage}" // "en" , "ar" or "fa"
  } 
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}
      />
    </>
  );
}
