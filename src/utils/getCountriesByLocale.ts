import type { LanguageType } from "@/types/locale.types";

import CountriesAr from "../../public/Countries-nationalities-ar.json";
import CountriesEn from "../../public/Countries-nationalities-en.json";
import CountriesFa from "../../public/Countries-nationalities-fa.json";

export const getCountriesByLocale = (locale: LanguageType) => {
  switch (locale) {
    case "en": {
      return CountriesEn;
    }
    case "fa": {
      return CountriesFa;
    }
    case "ar": {
      return CountriesAr;
    }
    default: {
      return CountriesFa;
    }
  }
};
