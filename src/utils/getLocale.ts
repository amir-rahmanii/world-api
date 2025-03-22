import type { LanguageType } from "@/types/locale.types";

import { locale } from "@/constants/locale";

export function getLocale(acceptLanguage: string): LanguageType {
  const langCode = acceptLanguage
    .split(",")[0]
    .split("-")[0]
    .trim() as LanguageType;
  return Object.values(locale).includes(langCode) ? langCode : "fa";
}
