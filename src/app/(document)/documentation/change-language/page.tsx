import type { Metadata } from "next";

import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

import ApiRequestExample from "../+components/ApiRequestExample";
import Table from "../+components/Table";
import ApiResponseExample from "../+components/ApiResponseExample";

export const metadata: Metadata = {
  title: "🌍 وب سرویس اطلاعات کشورها | مستندات | تغییر زبان",
};

interface SupportedLanguage {
  title: string;
  value: "ar" | "en" | "fa" | "xx";
}

const supportedLanguages: SupportedLanguage[] = [
  { title: "اطلاعات کشور‌‌ها به زبان فارسی", value: "fa" },
  { title: "اطلاعات کشور‌‌‌‌ها به زبان انگلیسی", value: "en" },
  { title: "اطلاعات کشورها به زبان عربی", value: "ar" },
  { title: "زبان نامعتبر (اطلاعات کشورها پیش فرض به زبان فارسی)", value: "xx" },
];

const tableHeaders: string[] = ["عنوان", "مقدار"];

export default function ChangeLanguagePage() {
  return (
    <div>
      <h1>
        تغییر زبان با استفاده از <code>Accept-Language</code>
      </h1>

      <p>
        برای تغییر زبان پاسخ‌ها از API، شما می‌توانید از هدر
        <code> Accept-Language </code> در درخواست‌های HTTP استفاده کنید. این هدر
        به سرور اعلام می‌کند که ترجیح شما برای زبان چیست و سرور بر اساس آن پاسخ
        را به زبان انتخابی ارسال می‌کند.
      </p>

      <h4>ℹ️ عدم ارسال Accept-Language:</h4>
      <p>
        اگر هدر <code>Accept-Language</code> ارسال نشود، زبان پاسخ به‌صورت
        خودکار بر اساس زبان سیستم‌عامل کاربر تنظیم می‌شود. به این معنا که:
      </p>
      <ul>
        <li>
          🟢 اگر زبان سیستم‌عامل فارسی باشد، پاسخ به زبان <code>"fa"</code>
          ارسال خواهد شد.
        </li>
        <li>
          ⚠️ اگر زبان سیستم‌عامل شناسایی نشود یا پشتیبانی نشود، پاسخ به‌طور
          پیش‌فرض به زبان فارسی (<code>"fa"</code>) ارسال خواهد شد.
        </li>
      </ul>

      <h4>🔄 تغییر زبان به‌صورت دستی:</h4>
      <Table tableHeaders={tableHeaders}>
        <tbody>
          {supportedLanguages.map(({ value, title }) => (
            <tr key={value}>
              <td>{title}</td>
              <td>
                <code>{`"Accept-Language": "${value}"`}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ApiRequestExample
        acceptLanguage="en"
        endpoint="/api/v1/countries?id=364"
      />
      <ApiResponseExample
        responseJson={`[{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "Iran",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IR.svg",
"capital": "Tehran",
"calling_code": 98,
"continent": "Asia",
"lat": 32.0,
"long": 53.0
}]`}
      />
    </div>
  );
}
