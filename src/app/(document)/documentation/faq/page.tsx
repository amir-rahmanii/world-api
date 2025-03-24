import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface FaqData {
  question: string;
  answer: string;
}

export const faqData: FaqData[] = [
  {
    question: "چگونه می‌توانم از این API استفاده کنم؟",
    answer:
      "برای استفاده از API، ابتدا باید با استفاده از حساب GitHub در وب‌سایت ما ثبت‌نام کنید. پس از ثبت‌نام، یک API Key منحصر‌به‌فرد دریافت خواهید کرد که برای ارسال درخواست‌ها به API الزامی است.",
  },
  {
    question: "چگونه می‌توانم API Key دریافت کنم؟",
    answer:
      "بعد از ثبت نام با گیت هاب به صفحه get-api-key ریدایرکت میشوید از آن جا میتوانید به Api-key خود دسترسی داشته باشید .",
  },
  {
    question: "آیا استفاده از این API رایگان است؟",
    answer: "بله، این وب سرویس کاملا رایگان است.",
  },
  {
    question: "آیا امکان دریافت لیست تمامی کشورها به زبان انگلیسی وجود دارد؟",
    answer:
      "بله، شما می‌توانید لیست تمامی کشورها را با زبان انگلیسی دریافت کنید.",
  },
  {
    question: "داده‌های این وب سرویس آیا به‌روز می‌شوند؟",
    answer:
      "بله،داده های این وب سرویس مدام در حال به روز و افزایش اطلاعات کشورها میباشد.",
  },
  {
    question: "چگونه می‌توانم مشکلات را گزارش دهم یا در توسعه API مشارکت کنم؟",
    answer:
      "شما می‌توانید مشکلات را در مخزن GitHub پروژه گزارش دهید یا Pull Request ارسال کنید.",
  },
];

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | سوالات متداول  ",
};

export default function FaqPage() {
  return (
    <>
      <h1>سوالات متداول</h1>
      <Accordion className="w-full" type="single" collapsible>
        {faqData.map(({ question, answer }) => (
          <AccordionItem
            className="pb-4"
            key={question}
            value={`item-${question}`}
          >
            <AccordionTrigger className="font-bold text-lg px-4 py-3 transition-all">
              {question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-base leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
