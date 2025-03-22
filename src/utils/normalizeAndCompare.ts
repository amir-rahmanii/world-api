export const normalizeAndCompare = (
  value: string | null,
  countryValue: string,
) => {
  return value?.toLowerCase() === countryValue.toLowerCase();
};
