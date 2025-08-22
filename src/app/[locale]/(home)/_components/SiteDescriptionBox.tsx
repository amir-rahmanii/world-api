import { useTranslations } from 'next-intl';
import React from 'react';

import type { SiteDescriptionsType } from '../../../../constants/siteDescription.constant';

export default function SiteDescriptionBox({
  featureKey,
  icon: Icon,
}: SiteDescriptionsType) {
  const t = useTranslations('homePage.siteDescriptions');
  return (
    <div className="group pointer-events-auto rounded-xl border border-accent bg-background transition-all hover:border-primary">
      <div className="flex flex-col gap-2.5 p-8">
        <Icon className="size-10 text-foreground transition-all group-hover:text-primary" />
        <h2 className="text-heading-foreground text-lg">
          {t(`${featureKey}.title`)}
        </h2>
        <p className="text-start text-sm leading-6 text-foreground/80">
          {t(`${featureKey}.desc`)}
        </p>
      </div>
    </div>
  );
}
