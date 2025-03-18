import type { Metadata } from "next";

import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

import Table from "../+components/Table";

export const metadata: Metadata = {
  title: "🌍 وب سرویس اطلاعات کشورها | مستندات | تغییر زبان",
};

interface SupportedLanguage {
  title: string;
  value: "ar" | "en" | "fa";
}

const supportedLanguages: SupportedLanguage[] = [
  { title: "اطلاعات کشور‌‌ها به زبان فارسی", value: "fa" },
  { title: "اطلاعات کشور‌‌‌‌ها به زبان انگلیسی", value: "en" },
  { title: "اطلاعات کشورها به زبان عربی", value: "ar" },
];

const tableHeaders = ["عنوان", "مقدار"];

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
          🔵 اگر زبان سیستم‌عامل انگلیسی باشد، پاسخ به زبان <code>"en"</code>
          ارسال خواهد شد.
        </li>
        <li>
          🟠 اگر زبان سیستم‌عامل عربی باشد، پاسخ به زبان <code>"ar"</code> ارسال
          خواهد شد.
        </li>
        <li>
          ⚠️ اگر زبان سیستم‌عامل شناسایی نشود یا پشتیبانی نشود، پاسخ به‌طور
          پیش‌فرض به زبان فارسی (<code>"fa"</code>) ارسال خواهد شد.
        </li>
      </ul>

      <h4>🔄 تغییر زبان به‌صورت دستی:</h4>
      <Table tableHeaders={tableHeaders}>
        <tbody>
          {supportedLanguages.map((language) => (
            <tr className="table-row" key={language.value}>
              <td className="table-cell">{language.title}</td>
              <td className="table-cell">
                <code>{`"Accept-Language": "${language.value}"`}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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

      <h4>⚠️ در صورت وارد کردن زبان نادرست:</h4>
      <p>
        اگر هدر <code>Accept-Language</code> به طور اشتباه وارد شود (مثلاً زبانی
        که پشتیبانی نمی‌شود)، پاسخ به‌طور پیش‌فرض به زبان فارسی ارسال خواهد شد.
      </p>
      <Table tableHeaders={tableHeaders}>
        <tbody>
          <tr className="table-row">
            <td className="table-cell">زبان نامعتبر (پیش فرض فارسی)</td>
            <td className="table-cell">
              <code>{`"Accept-Language": "xx"`}</code>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
