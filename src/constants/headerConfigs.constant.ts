import type { Messages } from "next-intl";

import type { TableHeader } from "@/types/tableHeaders.types";

type HeaderConfigKey =
  keyof Messages["documentationPage"]["headerConfigs"]["headerConfigsDesc"];

interface HeaderConfig {
  name: string;
  value: string;
  description: HeaderConfigKey;
  required: boolean;
  defaultValue: string | null;
}

export const HEADER_CONFIGS: HeaderConfig[] = [
  {
    name: "X-API-Key",
    value: "your-api-key",
    description: "x-api-key",
    required: true,
    defaultValue: null,
  },
  {
    name: "Accept-Language",
    value: "fa, en, ar",
    description: "accept-language",
    required: false,
    defaultValue: "OS Language",
  },
];

export const TABLE_HEADERS_HEADER_CONFIGS: TableHeader[] = [
  { title: "title" },
  { title: "value" },
  { title: "description" },
  { title: "required" },
  { title: "default" },
];
