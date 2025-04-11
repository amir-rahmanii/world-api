import type { Messages } from "next-intl";

type ContactMethodKey =
  keyof Messages["documentationPage"]["supportPage"]["contactMethod"];

interface ContactMethod {
  type: ContactMethodKey;
  value: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    type: "email",
    value: "rahmaniamirreza182@gmail.com",
  },
  {
    type: "telegram",
    value: "@AmirRahmani313",
  },
];
