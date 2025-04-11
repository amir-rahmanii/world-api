import type { Messages } from "next-intl";

type ApiHeaderType = keyof Messages["documentationPage"]["countriesPage"];

export interface ApiHeader {
  translationKey: ApiHeaderType;
  endpoint: string;
  exampleEndpoint?: string;
}
