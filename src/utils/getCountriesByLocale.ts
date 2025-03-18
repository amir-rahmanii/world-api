import { Locale } from "@/app/api/v1/countries/route";

import CountriesAr from "../../public/Countries-nationalities-ar.json";
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
    case Locale.AR: {
      return CountriesAr;
    }
    default: {
      return CountriesFa;
    }
  }
};
