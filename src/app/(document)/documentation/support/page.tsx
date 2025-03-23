import type { Metadata } from "next";

import Link from "next/link";
import React from "react";

interface ContactMethod {
  type: string;
  value: string;
}

const contactMethods: ContactMethod[] = [
  {
    type: "ایمیل",
    value: "rahmaniamirreza182@gmail.com",
  },
  {
    type: "تلگرام",
    value: "https://t.me/AmirRahmani313",
  },
  {
    type: "گیت هاب",
    value: "https://github.com/AmirRahmani313",
  },
  {
    type: "گیت هاب پروژه",
    value: "https://github.com/AmirRahmani313/project",
  },
];

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | پشتیبانی   ",
};

export default function SupportPage() {
  return (
    <>
      <h1>پشتیبانی</h1>
      <section>
        <p>
          برای هرگونه سوال یا مشکل، می‌توانید با استفاده از یکی از روش‌های زیر
          با ما تماس بگیرید:
        </p>
        <ul className="list-disc pr-5 flex flex-col gap-2 mt-3">
          {contactMethods.map(({ type, value }) => (
            <li key={type}>
              <strong>{type}:</strong>{" "}
              <Link href={value} target="_blank">
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
