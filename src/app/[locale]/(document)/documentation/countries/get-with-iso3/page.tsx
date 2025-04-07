import type { Metadata } from "next";

import ApiRequestExample from "@/components/modules/ApiRequestExample";
import ApiResponseExample from "@/components/modules/ApiResponseExample";
import React from "react";

import type { ApiError } from "../layout";
import type { ApiHeader } from "../page";

import ApiErrorMessage from "../_components/ApiErrorMessage";
import ApiHeaderSection from "../_components/ApiHeaderSection";
import HeaderConfigs from "../_components/HeaderConfigs";

const apiHeader: ApiHeader = {
  title: "دریافت کشورها با کد بین المللی 3 حرفی (iso3)",
  description:
    "با استفاده از کد بین المللی 3 حرفی هر کشور (iso3)، شما می‌توانید به اطلاعات کامل و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور پرچم، پایتخت، کد تماس، قاره و موقعیت جغرافیایی آن کشور می‌باشد.",
  endpoint: "/api/v1/countries?iso3={iso3}",
  exampleEndpoint: "/api/v1/countries?iso3=irn",
};

const invalidIso3Error: ApiError = {
  title: "🔴 خطای ارسال iso3 نامعتبر",
  message: `Invalid iso3 parameter. It must be exactly 3 
    characters long (e.g., 'irn' for Iran).`,
};

export const metadata: Metadata = {
  title:
    "وب سرویس اطلاعات کشورها | مستندات | دریافت اطلاعات کشور بر اساس کد بین‌المللی سه حرفی (ISO3)",
};
export default function CountriesGetWithIso3Page() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
      <ApiErrorMessage {...invalidIso3Error} />
    </>
  );
}
