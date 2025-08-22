import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function HeroText() {
  const t = useTranslations('homePage.heroText');

  return (
    <div className="flex h-[calc(100vh-220px)] flex-col items-center justify-center gap-8 desktop:h-[calc(100vh-180px)]">
      <h1 className="pb-0 text-center text-3xl font-black tablet:text-4xl desktop:text-5xl">
        {t('title')} <span className="text-primary">{t('countries')}</span>
      </h1>
      <p className="text-center text-lg desktop:text-xl">{t('description')}</p>
      <Button asChild variant="default">
        <Link href="/documentation/about"> {t('startButton')}</Link>
      </Button>
    </div>
  );
}
