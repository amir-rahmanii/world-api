import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import React from "react";

import { ApiKeyDisplay } from "./_components/ApiKeyDisplay";
import APIKeyUsage from "./_components/APIKeyUsage";

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | دریافت کلید API",
};

export default function GetApiKeyPage() {
  const t = useTranslations("getApiKeyPage");
  return (
    <>
      <h1>{t("title")}</h1>
      <ApiKeyDisplay title={t("loginPrompt")} />
      <APIKeyUsage />
    </>
  );
}
