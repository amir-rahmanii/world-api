export type SupportedLocaleType = "en" | "fa";

export const SUPPORTED_LOCALES = {
  Persian: "fa",
  English: "en",
} as const satisfies Record<string, SupportedLocaleType>;
