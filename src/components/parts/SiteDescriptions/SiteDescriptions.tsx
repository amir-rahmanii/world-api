import CompleteInformation from "@/components/icons/completeInformation.svg";
import LanguageSupport from "@/components/icons/languageSupport.svg";
import UpdateIcon from "@/components/icons/updateIcon.svg";
import React from "react";

import SiteDescriptionBox from "./SiteDescriptionBox";

export interface SiteDescriptionsType {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const allSiteDescription: SiteDescriptionsType[] = [
  {
    title: "اطلاعات جامع",
    desc: "اطلاعات کامل و دقیق از کشورها",
    icon: CompleteInformation,
  },
  {
    title: "پشتیبانی از چند زبان",
    desc: "نمایش اطلاعات کشورها به زبان‌های مختلف از جمله فارسی ، انگلیسی و عربی",
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
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3">
      {allSiteDescription.map((siteDesc) => (
        <SiteDescriptionBox key={siteDesc.title} {...siteDesc} />
      ))}
    </div>
  );
}
