import type { Metadata } from "next";

import React from "react";

import type { ApiError } from "../layout";
import type { ApiHeader } from "../page";


import ApiErrorMessage from "../+component/ApiErrorMessage";
import ApiHeaderSection from "../+component/ApiHeaderSection";
import HeaderConfigs from "../+component/HeaderConfigs";
import ApiRequestExample from "@/components/modules/ApiRequestExample";
import ApiResponseExample from "@/components/modules/ApiResponseExample";

const apiHeader: ApiHeader = {
  title: "دریافت کشورها با کد بین المللی 2 حرفی (iso2)",
  description:
    "با استفاده از کد بین المللی 2 حرفی هر کشور (iso2)، شما می‌توانید به اطلاعات کامل و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور پرچم، پایتخت، کد تماس، قاره و موقعیت جغرافیایی آن کشور می‌باشد.",
  endpoint: "/api/v1/countries?iso2={iso2}",
  exampleEndpoint: "/api/v1/countries?iso2=ir",
};

const invalidIso2Error: ApiError = {
  title: "🔴 خطای ارسال iso2 نامعتبر",
  message: `Invalid iso2 parameter. It must be exactly 2 
    characters long (e.g., 'ir' for Iran).`,
};

export const metadata: Metadata = {
  title:
    "وب سرویس اطلاعات کشورها | مستندات | دریافت اطلاعات کشور بر اساس کد بین‌المللی دوحرفی (ISO2)",
};
export default function CountriesGetWithIso2Page() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
      <ApiErrorMessage {...invalidIso2Error} />
    </>
  );
}
