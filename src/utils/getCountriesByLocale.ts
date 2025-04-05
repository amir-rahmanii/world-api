import type { APILocaleType } from "@/constants/apilocales";

import { API_LOCALES } from "@/constants/apilocales";

import CountriesAr from "../../public/Countries-nationalities-ar.json";
import CountriesEn from "../../public/Countries-nationalities-en.json";
import CountriesFa from "../../public/Countries-nationalities-fa.json";

export const getCountriesByLocale = (locale: APILocaleType) => {
  switch (locale) {
    case API_LOCALES.English: {
      return CountriesEn;
    }
    case API_LOCALES.Persian: {
      return CountriesFa;
    }
    case API_LOCALES.Arabic: {
      return CountriesAr;
    }
    default: {
      return CountriesFa;
    }
  }
};
