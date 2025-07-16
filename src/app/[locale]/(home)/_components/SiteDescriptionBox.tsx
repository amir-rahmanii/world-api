import { useTranslations } from 'next-intl';
import React from 'react';

import type { SiteDescriptionsType } from '../../../../constants/siteDescription.constant';

export default function SiteDescriptionBox({
  featureKey,
  icon: Icon,
}: SiteDescriptionsType) {
  const t = useTranslations('homePage.siteDescriptions');
  return (
    <div className="group border-accent bg-background pointer-events-auto rounded-xl border transition-all hover:border-primary">
      <div className="flex flex-col gap-2.5 p-8">
        <Icon className="text-foreground size-10 transition-all group-hover:text-primary" />
        <h2 className="text-heading-foreground text-lg">
          {t(`${featureKey}.title`)}
        </h2>
        <p className="text-foreground/80 text-start text-sm leading-6">
          {t(`${featureKey}.desc`)}
        </p>
      </div>
    </div>
  );
}
