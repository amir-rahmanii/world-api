import React from "react";

import CompleteInformation from "./completeInformation.svg";
import LanguageSupport from "./languageSupport.svg";
import SiteDescriptionBox from "./SiteDescriptionBox";
import UpdateIcon from "./updateIcon.svg";

export interface SiteDescriptionsType {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const allSiteDescription: SiteDescriptionsType[] = [
  {
    title: "completeInfoTitle",
    desc: "completeInfoDesc",
    icon: CompleteInformation,
  },
  {
    title: "multiLanguageTitle",
    desc: "multiLanguageDesc",
    icon: LanguageSupport,
  },
  {
    title: "upToDateTitle",
    desc: "upToDateDesc",
    icon: UpdateIcon,
  },
];

export default function SiteDescriptions() {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3">
      {allSiteDescription.map((siteDesc) => (
        <SiteDescriptionBox key={siteDesc.title} {...siteDesc} />
      ))}
    </div>
  );
}
