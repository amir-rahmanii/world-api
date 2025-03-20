import type { Metadata } from "next";

import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

import HeaderConfigs from "../+component/HeaderConfigs/HeaderConfigs";

export const metadata: Metadata = {
  title: "  وب سرویس اطلاعات کشورها | مستندات |  دریافت کشورها با id",
};
export default function CountriesGetWithIdPage() {
  return (
    <div>
      <h1>دریافت کشورها با id</h1>
      <p>
        با استفاده از شناسه اختصاصی هر کشور (id)، شما می‌توانید به اطلاعات کامل
        و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور، کد ISO،
        پرچم، پایتخت، کد تماس، قاره و موقعیت جغرافیایی آن کشور می‌باشد.
      </p>
      <h4>🚀 درخواست دریافت کشور با id</h4>
      <CodeBlock
        lang="http"
        code="http://localhost:3000/api/v1/countries?id={id}"
        isMethode
      />

      <HeaderConfigs />

      <h4>📝 نمونه کد درخواست:</h4>
      <CodeBlock
        code={`fetch("http://localhost:3000/api/v1/countries?id=364", { 
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
      <h4>📝 نمونه پاسخ:</h4>
      <CodeBlock
        lang="json"
        code={`{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "ایران",
"flag": "http://localhost:3000/v1/countries/flag/IR.svg",
"capital": "تهران",
"calling_code": 98,
"continent": "آسیا",
"lat": 32.0,
"long": 53.0
  }`}
      />
      <h4>⚠️ ارورهای احتمالی و توضیحات</h4>
      <h4>🔴 خطای ارسال id نامعتبر ارسال آن</h4>
      <CodeBlock
        lang="json"
        code={`{
  "error": "Invalid id parameter. It must be a number (e.g., 364 for Iran).",
  "status": 400
}`}
      />
      <p>
        ✅ راه‌حل: مقدار <code>id</code> باید یک عدد معتبر باشد. لطفاً بررسی
        کنید که مقدار ورودی به‌درستی ارسال شده و از نوع عددی (مانند{" "}
        <code>364</code> برای ایران) باشد.
      </p>
    </div>
  );
}
