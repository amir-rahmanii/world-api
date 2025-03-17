import type { Metadata } from "next";

import React from "react";

interface ApiFieldInfo {
  title: string;
  description: string;
  type: "Number" | "String";
  example: number | string;
}
const tableHeaders: string[] = ["نام فیلد", "توضیحات", "نوع", "مثال"];

const apiFieldInfos: ApiFieldInfo[] = [
  {
    title: "id (Numeric code)",
    description: "شناسه مختص هر کشور",
    type: "Number",
    example: 364,
  },
  {
    title: "name",
    description: "نام هر  کشور",
    type: "String",
    example: "ایران",
  },
  {
    title: "iso2",
    description: "کد 2 رقمی بین المللی",
    type: "String",
    example: "ir",
  },
  {
    title: "iso3",
    description: "کد 3 رقمی بین المللی",
    type: "String",
    example: "irn",
  },
  {
    title: "flag",
    description: "آدرس پرچم با فرمت svg",
    type: "String",
    example: "IR.svg",
  },
  {
    title: "capital",
    description: "پایتخت کشور",
    type: "String",
    example: "تهران",
  },
  {
    title: "calling_code",
    description: "کد تماس کشور",
    type: "Number",
    example: 98,
  },
  { title: "lat", description: "عرض جغرافیایی", type: "Number", example: 32.0 },
  {
    title: "long",
    description: "طول جغرافیایی",
    type: "Number",
    example: 53.0,
  },
  { title: "continent", description: "قاره", type: "String", example: "Asia" },
];

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات | توضیحات وب سرویس",
};

export default function AboutPage() {
  return (
    <div>
      <h1>توضیحات وب سرویس</h1>
      <p>
        این وب سرویس اطلاعات کشورهای مختلف را در اختیار توسعه‌دهندگان قرار
        می‌دهد. کاربران می‌توانند با دریافت یک API Key، داده‌های مربوط به کشورها
        را دریافت کرده و در پروژه‌های خود استفاده کنند.
      </p>

      <h4>🚀 نحوه دریافت API Key</h4>
      <p>
        برای دریافت <strong>API Key</strong>، ابتدا باید با استفاده از حساب
        <strong> GitHub </strong> ثبت‌نام کنید. پس از ورود به حساب کاربری خود،
        به صفحه دریافت API Key هدایت می‌شوید که در آن می‌توانید کلید خود را
        دریافت کنید.
      </p>

      <h4>🎯 اهداف وب سرویس</h4>
      <p>
        این پروژه یک <strong>پروژه متن‌باز (Open Source)</strong> است و دیگران
        نیز می‌توانند در توسعه و بهبود آن مشارکت داشته باشند. هدف اصلی این وب
        سرویس، فراهم کردن یک راه ساده و استاندارد برای دسترسی به اطلاعات
        کشورهاست تا برنامه‌نویسان بتوانند به‌راحتی از آن در پروژه‌های خود
        استفاده کنند.
      </p>

      <h4>🔄 به‌روزرسانی‌ها و ویژگی‌های جدید</h4>
      <p>
        این پروژه به‌طور مداوم به‌روزرسانی می‌شود و ویژگی‌های جدیدی به آن اضافه
        می‌شود. تیم توسعه همواره در حال افزودن قابلیت‌های جدید و بهبود عملکرد
        است تا کاربران بتوانند از جدیدترین امکانات استفاده کنند.
      </p>

      <h4>📌 انواع داده‌های موجود در API</h4>
      <div className="w-full overflow-auto">
        <table className="w-full table-auto tablet:table-fixed overflow-hidden text-center rounded-xl mt-4">
          <thead>
            <tr className="bg-gray-700/70 font-bold">
              {tableHeaders.map((header) => (
                <th className="table-cell" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {apiFieldInfos.map((field) => (
              <tr
                className="even:bg-gray-700/20 odd:bg-gray-700/30 hover:bg-gray-700/60"
                key={field.title}
              >
                <td className="table-cell">{field.title}</td>
                <td className="table-cell">{field.description}</td>
                <td className="table-cell">{field.type}</td>
                <td className="table-cell">{field.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
