import type { Locale } from "next-intl";

export type Direction = "ltr" | "rtl";

const directions: Record<string, Direction> = {
  fa: "rtl",
  en: "ltr",
};

export const getDirection = (locale: Locale): Direction => directions[locale];
