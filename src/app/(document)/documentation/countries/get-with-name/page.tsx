import type { LanguageType } from "@/types/locale.types";
import type { Metadata } from "next";

import ApiRequestExample from "@/components/modules/ApiRequestExample";
import ApiResponseExample from "@/components/modules/ApiResponseExample";
import React from "react";

import type { ApiHeader } from "../page";

import Table from "../../+components/Table";
import ApiHeaderSection from "../+component/ApiHeaderSection";
import HeaderConfigs from "../+component/HeaderConfigs";

interface NameMapping {
  language: LanguageType;
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
  { language: "fa", name: "ایران" },
  { language: "en", name: "Iran" },
  { language: "ar", name: "إيران" },
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
