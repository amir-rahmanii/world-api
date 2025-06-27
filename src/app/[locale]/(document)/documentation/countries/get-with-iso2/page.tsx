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
  translationKey: "getWithIso2",
  endpoint: "/api/v1/countries?iso2={iso2}",
  exampleEndpoint: "/api/v1/countries?iso2=ir",
};

const invalidIso2Error: ApiError = {
  title: "invalidIso2",
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
