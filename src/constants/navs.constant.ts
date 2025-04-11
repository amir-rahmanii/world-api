import type { Messages } from "next-intl";

import Document from "@/assets/icons/shared/document.svg";
import Home from "@/assets/icons/shared/home.svg";
import Key from "@/assets/icons/shared/key.svg";

type NavTitleKey = keyof Messages["navs"];

export interface Nav {
  title: NavTitleKey;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const NAVS: Nav[] = [
  { title: "home", path: "/", icon: Home },
  { title: "documentation", path: "/documentation/about", icon: Document },
  { title: "getApiKey", path: "/get-api-key", icon: Key },
];
