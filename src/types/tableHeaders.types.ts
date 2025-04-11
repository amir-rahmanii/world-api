import type { Messages } from "next-intl";

type TableHeadersType = keyof Messages["documentationPage"]["tableHeaders"];
export interface TableHeader {
  title: TableHeadersType;
}
