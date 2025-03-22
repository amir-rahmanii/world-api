import type { Countries, SearchParams } from "@/app/api/v1/countries/route";

const normalizeAndCompare = (value: string | null, countryValue: string) => {
  return value?.toLowerCase() === countryValue.toLowerCase();
};

export const filterCountries = (
  countries: Countries[],
  allSearchParams: SearchParams
) => {
  const { id, name, iso2, iso3, callingCode } = allSearchParams;

  if (id) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new Error(
        "Invalid id parameter. It must be a number (e.g., 364 for Iran)."
      );
    }
    return countries.filter((country) => country.id === numericId);
  }

  if (name) {
    return countries.filter((country) =>
      normalizeAndCompare(name, country.name)
    );
  }

  if (iso2) {
    const normalizedIso2 = iso2.trim().toLowerCase();

    if (normalizedIso2.length !== 2) {
      throw new Error(
        "Invalid iso2 parameter. It must be exactly 2 characters long (e.g., 'IR' for Iran)."
      );
    }

    return countries.filter((country) =>
      normalizeAndCompare(normalizedIso2, country.iso2)
    );
  }

  if (iso3) {
    return countries.filter((country) =>
      normalizeAndCompare(iso3, country.iso3)
    );
  }

  if (callingCode) {
    const numericCallingCode = Number(callingCode);
    if (isNaN(numericCallingCode)) {
      throw new Error(
        "Invalid callingCode parameter. It must be a number (e.g., 98 for Iran)."
      );
    }
    return countries.filter(
      (country) => country.calling_code === numericCallingCode
    );
  }

  return countries;
};
