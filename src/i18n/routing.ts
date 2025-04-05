import { SUPPORTED_LOCALES } from "@/constants/supportedLocales";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fa", "en"],
  defaultLocale: "fa",
});
