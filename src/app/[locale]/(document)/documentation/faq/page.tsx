import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import React from "react";

import AccordionFaq from "./_components/AccordionFaq";

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | سوالات متداول  ",
};

export default function FaqPage() {
  const t = useTranslations("documentationPage.faqPage");
  return (
    <>
      <h1>{t("title")}</h1>
      <AccordionFaq />
    </>
  );
}
