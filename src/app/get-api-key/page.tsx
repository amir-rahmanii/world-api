import type { Metadata } from "next";

import React from "react";

import { ApiKeyDisplay } from "./+components/ApiKeyDisplay";
import APIKeyUsage from "./+components/APIKeyUsage";

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | دریافت کلید API",
};

export default function GetApiKeyPage() {
  return (
    <>
      <h1>دریافت API Key</h1>
      <ApiKeyDisplay />
      <APIKeyUsage />
    </>
  );
}
