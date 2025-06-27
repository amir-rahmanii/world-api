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
  translationKey: "getWithId",
  endpoint: "/api/v1/countries?id={id}",
  exampleEndpoint: "/api/v1/countries?id=364",
};

const invalidIdError: ApiError = {
  title: "invalidID",
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
