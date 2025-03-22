import type { Metadata } from "next";

import React from "react";

import type { ApiError } from "../layout";
import type { ApiHeader } from "../page";

import ApiRequestExample from "../../+components/ApiRequestExample";
import ApiResponseExample from "../../+components/ApiResponseExample";
import ApiErrorMessage from "../+component/ApiErrorMessage";
import ApiHeaderSection from "../+component/ApiHeaderSection";
import HeaderConfigs from "../+component/HeaderConfigs";

const apiHeader: ApiHeader = {
  title: "دریافت کشورها با id",
  description:
    "با استفاده از شناسه اختصاصی هر کشور (id)، شما می‌توانید به اطلاعات کامل و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور، کد ISO، پرچم، پایتخت، کد تماس، قاره و موقعیت جغرافیایی آن کشور می‌باشد.",
  endpoint: "/api/v1/countries?id={id}",
  exampleEndpoint: "/api/v1/countries?id=364",
};

const invalidIdError: ApiError = {
  title: "🔴 خطای ارسال id نامعتبر",
  message: "Invalid id parameter. It must be a number (e.g., 364 for Iran).",
};

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات |  دریافت کشورها با id",
};
export default function CountriesGetWithIdPage() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
      <ApiErrorMessage {...invalidIdError} />
    </>
  );
}
