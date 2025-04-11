import type { TableHeader } from "@/types/tableHeaders.types";

import type { APILocaleType } from "./apilocales.constant";

import { API_LOCALES } from "./apilocales.constant";

interface NameMapping {
  language: APILocaleType;
  name: string;
}
export const NAME_MAPPINGS: NameMapping[] = [
  { language: API_LOCALES.Persian, name: "ایران" },
  { language: API_LOCALES.English, name: "Iran" },
  { language: API_LOCALES.Arabic, name: "إيران" },
];

export const TABLE_HEADERS_NAME_MAPPINGS: TableHeader[] = [
  { title: "acceptLanguage" },
  { title: "countryName" },
];
