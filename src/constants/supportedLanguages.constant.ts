import type { TableHeader } from "@/types/tableHeaders.types";
import type { Messages } from "next-intl";

import type { APILocaleType } from "./apilocales.constant";

import { API_LOCALES } from "./apilocales.constant";

type SupportedLanguageKey =
  keyof Messages["documentationPage"]["changeLanguagePage"]["supported-languages"];

interface SupportedLanguage {
  title: SupportedLanguageKey;
  value: "xx" | APILocaleType;
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  { title: "persian", value: API_LOCALES.Persian },
  { title: "english", value: API_LOCALES.English },
  { title: "arabic", value: API_LOCALES.Arabic },
  { title: "invalid", value: "xx" },
];

export const TABLE_HEADERS_SUPPORTED_LANGUAGES: TableHeader[] = [
  { title: "title" },
  { title: "value" },
];
