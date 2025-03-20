import type { Metadata } from "next";

import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";
import HeaderConfigs from "./+component/HeaderConfigs/HeaderConfigs";

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | دریافت تمام کشورها",
};
export default function CountriesPage() {
  return (
    <div>
      <h1>دریافت تمام کشورها</h1>
      <p>
        این API به شما امکان می‌دهد اطلاعات جامع کشورها را دریافت کنید. اطلاعاتی
        مانند نام کشور، کد ISO، پرچم، پایتخت، کد تماس و موقعیت جغرافیایی از این
        طریق در دسترس است.
      </p>
      <h4>🚀 درخواست دریافت تمام کشورها</h4>
      <CodeBlock
        lang="http"
        code="http://localhost:3000/api/v1/countries"
        isMethode
      />

      <HeaderConfigs />

      <h4>📝 نمونه کد درخواست:</h4>
      <CodeBlock
        code={`fetch("http://localhost:3000/api/v1/countries", { 
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
        code={`[{
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
  },
  {
"id": 368,
"iso2": "iq",
"iso3": "irq",
"name": "عراق",
"flag": "http://localhost:3000/v1/countries/flag/IQ.svg",
"capital": "بغداد",
"calling_code": 964,
"continent": "آسیا",
"lat": 33.0,
"long": 44.0
  },]`}
      />
      <h4>⚠️ ارورهای احتمالی و توضیحات</h4>
    </div>
  );
}
