import type { Metadata } from "next";

import ApiRequestExample from "@/components/modules/ApiRequestExample";
import ApiResponseExample from "@/components/modules/ApiResponseExample";
import { defaultResponseJsonArrayFa } from "@/constants/defaultResponse";
import React from "react";

import ApiHeaderSection from "./_components/ApiHeaderSection";
import HeaderConfigs from "./_components/HeaderConfigs";

export interface ApiHeader {
  title: string;
  description: string;
  endpoint: string;
  exampleEndpoint?: string;
}

const apiHeader: ApiHeader = {
  title: "دریافت تمام کشورها",
  description:
    "این API به شما امکان می‌دهد اطلاعات جامع کشورها را دریافت کنید. اطلاعاتی مانند نام کشور، کد ISO، پرچم، پایتخت، کد تماس و موقعیت جغرافیایی از این طریق در دسترس است.",
  endpoint: "/api/v1/countries",
};

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | دریافت تمام کشورها",
};

export default function CountriesPage() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.endpoint} />
      <ApiResponseExample responseJson={defaultResponseJsonArrayFa} />
    </>
  );
}
