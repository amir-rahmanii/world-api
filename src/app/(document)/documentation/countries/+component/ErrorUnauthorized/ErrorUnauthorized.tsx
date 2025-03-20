import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

export default function ErrorUnauthorized() {
  return (
    <>
      <h4>🔴 خطای عدم ارسال یا نامعتبر بودن API key</h4>
      <CodeBlock
        lang="json"
        code={`{
"error": "API key is missing or invalid. Please provide a valid API key.",
"status": 401
}`}
      />
      <p>
        ✅ راه‌حل: مقدار <code>X-API-Key</code> را در هدر درخواست تنظیم کنید و
        از معتبر بودن آن اطمینان حاصل کنید.
      </p>
    </>
  );
}
