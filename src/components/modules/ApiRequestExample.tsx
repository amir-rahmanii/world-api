import type { APILocaleType } from "@/constants/apilocales";

import { CodeBlock } from "@/components/modules/CodeBlock";
import { API_LOCALES } from "@/constants/apilocales";
import React from "react";

export default function ApiRequestExample({
  endpoint,
  acceptLanguage = API_LOCALES.Persian,
}: {
  endpoint: string;
  acceptLanguage?: APILocaleType;
}) {
  return (
    <>
      <h4>📝 نمونه کد درخواست:</h4>
      <CodeBlock
        code={`fetch("${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}${endpoint}", { 
  method: "GET", 
  headers: { 
    "X-API-Key": "your-api-key",  // 🔴 جایگزینی کلید شما در اینجا
    "Accept-Language" : "${acceptLanguage}" // ${API_LOCALES.English} , ${API_LOCALES.Arabic} or ${API_LOCALES.Persian}
  } 
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}
      />
    </>
  );
}
