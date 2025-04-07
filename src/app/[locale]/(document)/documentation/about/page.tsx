import type { Metadata } from "next";

import React from "react";

import Table from "../_components/Table";

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
        برای دریافت <strong>API Key</strong>، ابتدا باید با استفاده از حساب های
        <strong> GitHub </strong>
        یا
        <strong> Google </strong>
        ثبت‌نام کنید. پس از ورود به حساب کاربری خود، به صفحه دریافت API Key
        هدایت می‌شوید که در آن می‌توانید کلید خود را دریافت کنید.
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
      <p>
        توجه داشته باشید که در فرآیند **فیلتر کردن کشورها**، سرویس به حروف بزرگ
        و کوچک حساس نیست. به عنوان مثال، هنگام دریافت اطلاعات یک کشور بر اساس
        **name**، مقادیری مانند "IRAN" و "iran" به صورت یکسان پردازش شده و
        نتیجه‌ی مشابهی خواهند داشت.
      </p>
      <Table tableHeaders={tableHeaders}>
        <tbody>
          {apiFieldInfos.map(({ title, description, type, example }) => (
            <tr key={title}>
              <td>{title}</td>
              <td>{description}</td>
              <td>{type}</td>
              <td>{example}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
