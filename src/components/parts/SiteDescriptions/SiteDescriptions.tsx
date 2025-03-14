import CompleteInformation from "@/components/icons/completeInformation.svg";
import LanguageSupport from "@/components/icons/languageSupport.svg";
import UpdateIcon from "@/components/icons/updateIcon.svg";
import React from "react";

import SiteDescriptionBox from "../SiteDescriptionBox/SiteDescriptionBox";

export interface SiteDescriptions {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const allSiteDescription: SiteDescriptions[] = [
  {
    title: "اطلاعات جامع",
    desc: "اطلاعات کامل و دقیق از کشورها",
    icon: CompleteInformation,
  },
  {
    title: "پشتیبانی از چند زبان",
    desc: "نمایش اطلاعات کشورها به زبان‌های مختلف از جمله انگلیسی",
    icon: LanguageSupport,
  },
  {
    title: "به‌روزرسانی مداوم",
    desc: "اطلاعات کشورها به‌صورت منظم به‌روزرسانی می‌شود",
    icon: UpdateIcon,
  },
];

export default function SiteDescriptions() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {allSiteDescription.map((siteDesc) => (
        <SiteDescriptionBox key={siteDesc.title} {...siteDesc} />
      ))}
    </div>
  );
}
