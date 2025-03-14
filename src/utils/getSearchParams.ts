export const getSearchParams = (searchParams: URLSearchParams) => {
  return {
    id: searchParams.get("id"),
    name: searchParams.get("name"),
    callingCode: searchParams.get("callingCode"),
    iso2: searchParams.get("iso2"),
    iso3: searchParams.get("iso3"),
  };
};
