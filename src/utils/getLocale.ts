import { Locale } from "@/app/api/v1/countries/route";

export function getLocale(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;

  const langCode = acceptLanguage.split(",")[0].split("-")[0].trim() as Locale;

  return Object.values(Locale).includes(langCode) ? langCode : null;
}
