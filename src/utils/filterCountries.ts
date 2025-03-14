import type { Countries } from "@/app/api/v1/[locale]/countries/route";

export const filterCountries = (
  countries: Omit<Countries, "capital" | "flag">[],
  allSearchParams
) => {
  if (allSearchParams.id) {
    if (isNaN(allSearchParams.id)) {
      const error = new Error("Invalid id parameter, id must be number");
      throw error;
    }
    return countries.filter((country) => country.id === +allSearchParams.id);
  }

  if (allSearchParams.name) {
    if (isNaN(allSearchParams.id)) {
      const error = new Error("Invalid id parameter, id must be number");
      throw error;
    }
    return countries.filter((country) => country.id === +allSearchParams.id);
  }

  return countries;
};
