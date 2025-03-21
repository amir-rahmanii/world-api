import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

export default function ApiRequestExample({ endpoint }: { endpoint: string }) {
  return (
    <>
      <h4>📝 نمونه کد درخواست:</h4>
      <CodeBlock
        code={`fetch("${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}${endpoint}", { 
  method: "GET", 
  headers: { 
    "X-API-Key": "your-api-key",  // 🔴 جایگزینی کلید شما در اینجا
    "Accept-Language" : "fa" // "en" or "ar"
  } 
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}
      />
    </>
  );
}
