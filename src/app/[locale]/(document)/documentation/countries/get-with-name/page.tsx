import type { APILocaleType } from "@/constants/apilocales";
import type { Metadata } from "next";

import ApiRequestExample from "@/components/modules/ApiRequestExample";
import ApiResponseExample from "@/components/modules/ApiResponseExample";
import { API_LOCALES } from "@/constants/apilocales";
import React from "react";

import type { ApiHeader } from "../page";

import Table from "../../_components/Table";
import ApiHeaderSection from "../_components/ApiHeaderSection";
import HeaderConfigs from "../_components/HeaderConfigs";

interface NameMapping {
  language: APILocaleType;
  name: string;
}

const apiHeader: ApiHeader = {
  title: "دریافت کشورها با name",
  description:
    "با استفاده از نام هر کشور (name)، شما می‌توانید به اطلاعات کامل و دقیق آن کشور دسترسی پیدا کنید. این اطلاعات شامل نام کشور، کد ISO، پرچم، پایتخت، کد تماس، قاره و موقعیت جغرافیایی آن کشور می‌باشد.",
  endpoint: "/api/v1/countries?name={name}",
  exampleEndpoint: "/api/v1/countries?name=ایران",
};

const nameMappings: NameMapping[] = [
  { language: API_LOCALES.Persian, name: "ایران" },
  { language: API_LOCALES.English, name: "Iran" },
  { language: API_LOCALES.Arabic, name: "إيران" },
];

const tableHeaders: string[] = ["Accept-Language", "نام کشور (name)"];

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | مستندات |  دریافت کشورها با name",
};
export default function CountriesGetWithNamePage() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <h4>تغییر مقدار name بر اساس Accept-Language</h4>
      <Table tableHeaders={tableHeaders}>
        <tbody>
          {nameMappings.map(({ language, name }) => (
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
