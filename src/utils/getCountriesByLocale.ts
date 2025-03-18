import { Locale } from "@/app/api/v1/countries/route";

import CountriesEn from "../../public/Countries-nationalities-en.json";
import CountriesFa from "../../public/Countries-nationalities-fa.json";

export const getCountriesByLocale = (locale: Locale) => {
  switch (locale) {
    case Locale.EN: {
      return CountriesEn;
    }
    case Locale.FA: {
      return CountriesFa;
    }
    default: {
      const error = new Error("Invalid locale. Locale must be 'fa' or 'en'.");
      throw error;
    }
  }
};
