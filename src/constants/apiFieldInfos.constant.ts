import type { TableHeader } from "@/types/tableHeaders.types";
import type { Messages } from "next-intl";

export type ApiFieldInfosKey =
  keyof Messages["documentationPage"]["aboutPage"]["apiFieldInfos"];

interface ApiFieldInfo {
  title: string;
  description: ApiFieldInfosKey;
  type: "Number" | "String";
  example: number | string;
}

export const TABLE_HEADERS_API_FIELD_INFOS: TableHeader[] = [
  { title: "fieldName" },
  { title: "description" },
  { title: "type" },
  { title: "example" },
];

export const API_FIELD_INFOS: ApiFieldInfo[] = [
  {
    title: "id (Numeric code)",
    description: "id",
    type: "Number",
    example: 364,
  },
  {
    title: "name",
    description: "name",
    type: "String",
    example: "ایران",
  },
  {
    title: "iso2",
    description: "iso2",
    type: "String",
    example: "ir",
  },
  {
    title: "iso3",
    description: "iso3",
    type: "String",
    example: "irn",
  },
  {
    title: "flag",
    description: "flag",
    type: "String",
    example: "IR.svg",
  },
  {
    title: "capital",
    description: "capital",
    type: "String",
    example: "تهران",
  },
  {
    title: "calling_code",
    description: "calling_code",
    type: "Number",
    example: 98,
  },
  { title: "lat", description: "lat", type: "Number", example: 32.0 },
  {
    title: "long",
    description: "long",
    type: "Number",
    example: 53.0,
  },
  {
    title: "continent",
    description: "continent",
    type: "String",
    example: "Asia",
  },
];
