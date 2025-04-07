import { useTranslations } from "next-intl";
import React from "react";

import type { SiteDescriptionsType } from "./SiteDescriptions";

export default function SiteDescriptionBox({
  title,
  desc,
  icon: Icon,
}: SiteDescriptionsType) {
  const t = useTranslations("HomePage.SiteDescriptions");
  return (
    <div className="group pointer-events-auto rounded-xl border border-accent bg-background hover:border-primary transition-all">
      <div className="flex flex-col gap-2.5 p-8">
        <Icon className="size-10 text-foreground group-hover:text-primary transition-all" />
        <h2 className="font-bold text-lg text-heading-foreground">
          {t(title)}
        </h2>
        <p className="text-foreground/80 text-start text-sm leading-6">
          {t(desc)}
        </p>
      </div>
    </div>
  );
}
