import type { Messages } from "next-intl";

import CompleteInformation from "@/assets/icons/home/completeInformation.svg";
import LanguageSupport from "@/assets/icons/home/languageSupport.svg";
import UpdateIcon from "@/assets/icons/home/updateIcon.svg";

type SiteDescriptionKey = keyof Messages["homePage"]["siteDescriptions"];

export interface SiteDescriptionsType {
  featureKey: SiteDescriptionKey;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SITE_DESCRIPTIONS: SiteDescriptionsType[] = [
  {
    featureKey: "completeInfo",
    icon: CompleteInformation,
  },
  {
    featureKey: "multiLanguage",
    icon: LanguageSupport,
  },
  {
    featureKey: "upToDate",
    icon: UpdateIcon,
  },
];
