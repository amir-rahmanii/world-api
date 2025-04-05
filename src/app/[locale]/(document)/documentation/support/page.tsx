import type { Metadata } from "next";

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
    value: "@AmirRahmani313",
  },
];

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات | پشتیبانی",
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
            <li className="flex items-center gap-2" key={type}>
              <strong>{type}:</strong>
              <p dir="ltr">{value}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
