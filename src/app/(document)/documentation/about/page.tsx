import React from "react";

interface ApiFieldInfo {
  title: string;
  description: string;
  type: "Number" | "String";
  example?: number | string;
}

const apiFieldInfos: ApiFieldInfo[] = [
  {
    title: "id (Numeric code)",
    description: "شناسه مختص هر کشور",
    type: "Number",
    example: 364,
  },
  { title: "name", description: "نام کشور", type: "String", example: "ایران" },
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
    example: "http://localhost:3000/v1/countries/flag/IR.svg",
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
    type: "String",
    example: "98",
  },
  { title: "continent", description: "قاره", type: "String", example: 364 },
];

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
      <table className="w-full text-center border-collapse border border-accent-foreground mt-4">
        <thead>
          <tr className="bg-primary/80 font-bold">
            <th className="border border-accent-foreground px-4 py-2">
              نام فیلد
            </th>
            <th className="border border-accent-foreground px-4 py-2">
              توضیحات
            </th>
            <th className="border border-accent-foreground px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {apiFieldInfos.map((field) => (
            <tr key={field.title}>
              <td className="border border-accent-foreground px-4 py-2">
                {field.title}
              </td>
              <td className="border border-accent-foreground px-4 py-2">
                {field.description}
              </td>
              <td className="border border-accent-foreground px-4 py-2">
                {field.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
