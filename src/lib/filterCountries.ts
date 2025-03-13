export const filterCountries = (countries, id , flag) => {
  if (id?.trim()) {
    return countries.filter((country) => +country.id === +id);
  }
  return countries;
};
