import type { Metadata } from "next";

import React from "react";

import ApiRequestExample from "../+components/ApiRequestExample";
import ApiResponseExample from "../+components/ApiResponseExample";
import ApiHeaderSection from "./+component/ApiHeaderSection";
import HeaderConfigs from "./+component/HeaderConfigs";

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
      <ApiResponseExample
        responseJson={`[{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "ایران",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IR.svg",
"capital": "تهران",
"calling_code": 98,
"continent": "آسیا",
"lat": 32.0,
"long": 53.0
  },
  {
"id": 368,
"iso2": "iq",
"iso3": "irq",
"name": "عراق",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IQ.svg",
"capital": "بغداد",
"calling_code": 964,
"continent": "آسیا",
"lat": 33.0,
"long": 44.0
  },]`}
      />
    </>
  );
}
