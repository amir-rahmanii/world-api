import type { ApiHeader } from "@/types/apiHeader.types";
import type { Metadata } from "next";

import ApiRequestExample from "@/components/shared/ApiRequestExample/ApiRequestExample";
import ApiResponseExample from "@/components/shared/ApiResponseExample/ApiResponseExample";
import {
  NAME_MAPPINGS,
  TABLE_HEADERS_NAME_MAPPINGS,
} from "@/constants/nameMappings.constant";
import { useTranslations } from "next-intl";
import React from "react";

import ApiHeaderSection from "../_components/ApiHeaderSection";
import HeaderConfigs from "../_components/HeaderConfigs";
import Table from "../../_components/Table";

const apiHeader: ApiHeader = {
  translationKey: "getWithName",
  endpoint: "/api/v1/countries?name={name}",
  exampleEndpoint: "/api/v1/countries?name=ایران",
};

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات |  دریافت کشورها با name",
};
export default function CountriesGetWithNamePage() {
  const t = useTranslations("documentationPage.getWithNamePage");
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <h4>{t("nameMappingsTitleTable")}</h4>
      <Table tableHeaders={TABLE_HEADERS_NAME_MAPPINGS}>
        <tbody>
          {NAME_MAPPINGS.map(({ language, name }) => (
            <tr key={language}>
              <td>{language}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
    </>
  );
}
