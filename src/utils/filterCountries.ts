import type {
  Countries,
  SearchParams,
} from "@/app/api/v1/[locale]/countries/route";

export const filterCountries = (
  countries: Countries[],
  allSearchParams: SearchParams
) => {
  if (allSearchParams.id !== null) {
    if (isNaN(Number(allSearchParams.id))) {
      const error = new Error(
        "Invalid id parameter. It must be a number (e.g., 364 for Iran)."
      );
      throw error;
    }
    return countries.filter(
      (country) => country.id === Number(allSearchParams.id)
    );
  }

  if (allSearchParams.name) {
    return countries.filter(
      (country) =>
        country.name.toLowerCase() === allSearchParams.name?.toLowerCase()
    );
  }

  if (allSearchParams.iso2) {
    return countries.filter(
      (country) =>
        country.iso2.toLowerCase() === allSearchParams.iso2?.toLowerCase()
    );
  }

  if (allSearchParams.iso3) {
    return countries.filter(
      (country) =>
        country.iso3.toLowerCase() === allSearchParams.iso3?.toLowerCase()
    );
  }

  if (allSearchParams.callingCode) {
    if (isNaN(Number(allSearchParams.callingCode))) {
      const error = new Error(
        "Invalid callingCode parameter. It must be a number (e.g., 98 for Iran)."
      );
      throw error;
    }
    return countries.filter(
      (country) => country.calling_code === allSearchParams.callingCode
    );
  }

  return countries;
};
