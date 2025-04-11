import { useTranslations } from "next-intl";
import React from "react";

import type { SiteDescriptionsType } from "../../../../constants/siteDescription.constant";

export default function SiteDescriptionBox({
  featureKey,
  icon: Icon,
}: SiteDescriptionsType) {
  const t = useTranslations("homePage.siteDescriptions");
  return (
    <div className="group pointer-events-auto rounded-xl border border-accent bg-background hover:border-primary transition-all">
      <div className="flex flex-col gap-2.5 p-8">
        <Icon className="size-10 text-foreground group-hover:text-primary transition-all" />
        <h2 className="text-lg text-heading-foreground">
          {t(`${featureKey}.title`)}
        </h2>
        <p className="text-foreground/80 text-start text-sm leading-6">
          {t(`${featureKey}.desc`)}
        </p>
      </div>
    </div>
  );
}
