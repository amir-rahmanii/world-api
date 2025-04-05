import type { APILocaleType } from "@/constants/apilocales";
import type { Metadata } from "next";

import ApiRequestExample from "@/components/modules/ApiRequestExample";
import ApiResponseExample from "@/components/modules/ApiResponseExample";
import { API_LOCALES } from "@/constants/apilocales";
import { defaultResponseJsonEn } from "@/constants/defaultResponse";
import React from "react";

import Table from "../+components/Table";

interface SupportedLanguage {
  title: string;
  value: "xx" | APILocaleType;
}

const supportedLanguages: SupportedLanguage[] = [
  { title: "اطلاعات کشور‌‌ها به زبان فارسی", value: API_LOCALES.Persian },
  { title: "اطلاعات کشور‌‌‌‌ها به زبان انگلیسی", value: API_LOCALES.English },
  { title: "اطلاعات کشورها به زبان عربی", value: API_LOCALES.Arabic },
  { title: "زبان نامعتبر (اطلاعات کشورها پیش فرض به زبان فارسی)", value: "xx" },
];

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات | تغییر زبان",
};

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
          🟢 اگر زبان سیستم‌عامل فارسی باشد، پاسخ به زبان{" "}
          <code>"{API_LOCALES.Persian}"</code>
          ارسال خواهد شد.
        </li>
        <li>
          ⚠️ اگر زبان سیستم‌عامل شناسایی نشود یا پشتیبانی نشود، پاسخ به‌طور
          پیش‌فرض به زبان فارسی (<code>"{API_LOCALES.Persian}"</code>) ارسال شد.
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
      <ApiResponseExample responseJson={defaultResponseJsonEn} />
    </div>
  );
}
