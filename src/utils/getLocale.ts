import type { APILocaleType } from "@/constants/apilocales.constant";

import { API_LOCALES } from "@/constants/apilocales.constant";

export function getLocale(acceptLanguage: string): APILocaleType {
  const langCode = acceptLanguage
    .split(",")[0]
    .split("-")[0]
    .trim() as APILocaleType;
  return Object.values(API_LOCALES).includes(langCode)
    ? langCode
    : API_LOCALES.Persian;
}
