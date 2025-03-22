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
  title: "دریافت کشورها با پیش شماره تماس",
  description:
    "با استفاده از پیش شماره تماس هر کشور (callingCode)، شما می‌توانید به اطلاعات کامل و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور، کد ISO، پرچم، پایتخت، قاره و موقعیت جغرافیایی آن کشور می‌باشد.",
  endpoint: "/api/v1/countries?callingCode={callingCode}",
  exampleEndpoint: "/api/v1/countries?callingCode=98",
};

const invalidCallingCodeError: ApiError = {
  title: "🔴 خطای ارسال callingCode نامعتبر",
  message: `Invalid callingCode parameter.
     It must be a number (e.g., 98 for Iran).`,
};

export const metadata: Metadata = {
  title:
    "وب سرویس اطلاعات کشورها | مستندات |  دریافت کشورها با پیش شماره تماس (callingCode)",
};
export default function CountriesGetWithCallingCodePage() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
      <ApiErrorMessage {...invalidCallingCodeError} />
    </>
  );
}
