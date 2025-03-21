import type { Metadata } from "next";

import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

import type { ApiError } from "../layout";
import type { ApiHeader } from "../page";

import ApiErrorMessage from "../+component/ApiErrorMessage/ApiErrorMessage";
import ApiHeaderSection from "../+component/ApiHeaderSection/ApiHeaderSection";
import ApiRequestExample from "../+component/ApiRequestExample/ApiRequestExample";
import ApiResponseExample from "../+component/ApiResponseExample/ApiResponseExample";
import HeaderConfigs from "../+component/HeaderConfigs/HeaderConfigs";

const apiHeader: ApiHeader = {
  title: "دریافت کشورها با name",
  description:
    "با استفاده از شناسه اختصاصی هر کشور (name)، شما می‌توانید به اطلاعات کامل و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور، کد ISO، پرچم، پایتخت، کد تماس، قاره و موقعیت جغرافیایی آن کشور می‌باشد.",
  endpoint: "/api/v1/countries?name={name}",
  exampleEndpoint: "/api/v1/countries?name=ایران",
};

const invalidIdError: ApiError = {
  title: "🔴 خطای ارسال id نامعتبر",
  message: "Invalid id parameter. It must be a number (e.g., 364).",
};

export const metadata: Metadata = {
  title: "  وب سرویس اطلاعات کشورها | مستندات |  دریافت کشورها با id",
};
export default function CountriesGetWithNamePage() {
  return (
    <div>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
      <ApiErrorMessage {...invalidIdError} />
    </div>
  );
}
