import type { Metadata } from "next";

import { CONTACT_METHODS } from "@/constants/contactMethods.constant";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات | پشتیبانی",
};

export default function SupportPage() {
  const t = useTranslations("documentationPage.supportPage");
  const tContactMethod = useTranslations(
    "documentationPage.supportPage.contactMethod",
  );
  return (
    <>
      <h1>{t("title")}</h1>
      <section>
        <p>{t("description")}</p>
        <ul className="list-disc pr-5 flex flex-col gap-2 mt-3">
          {CONTACT_METHODS.map(({ type, value }) => (
            <li className="flex items-center gap-2" key={type}>
              <strong>{tContactMethod(type)}:</strong>
              <p dir="ltr">{value}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
