import type { Metadata } from "next";

import React from "react";

import type { ApiHeader } from "@/types/apiHeader.types";

import ApiRequestExample from "@/components/shared/ApiRequestExample/ApiRequestExample";
import ApiResponseExample from "@/components/shared/ApiResponseExample/ApiResponseExample";

import type { ApiError } from "../layout";

import ApiErrorMessage from "../_components/ApiErrorMessage";
import ApiHeaderSection from "../_components/ApiHeaderSection";
import HeaderConfigs from "../_components/HeaderConfigs";

const apiHeader: ApiHeader = {
  translationKey: "getWithCallingCode",
  endpoint: "/api/v1/countries?callingCode={callingCode}",
  exampleEndpoint: "/api/v1/countries?callingCode=98",
};

const invalidCallingCodeError: ApiError = {
  title: "invalidCallingCode",
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
