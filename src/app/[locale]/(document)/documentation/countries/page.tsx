import type { ApiHeader } from "@/types/apiHeader.types";
import type { Metadata } from "next";

import ApiRequestExample from "@/components/shared/ApiRequestExample/ApiRequestExample";
import ApiResponseExample from "@/components/shared/ApiResponseExample/ApiResponseExample";
import { DEFAULT_RESPONSE_JSON_ARRAY_FA } from "@/constants/defaultResponse.constant";
import React from "react";

import ApiHeaderSection from "./_components/ApiHeaderSection";
import HeaderConfigs from "./_components/HeaderConfigs";

const apiHeader: ApiHeader = {
  translationKey: "getAllCountries",
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
      <ApiResponseExample responseJson={DEFAULT_RESPONSE_JSON_ARRAY_FA} />
    </>
  );
}
