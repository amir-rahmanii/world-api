import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function HeroText() {
  const t = useTranslations('homePage.heroText');

  return (
    <div className="desktop:h-[calc(100vh-180px)] flex h-[calc(100vh-220px)] flex-col items-center justify-center gap-8">
      <h1 className="tablet:text-4xl desktop:text-5xl pb-0 text-center text-3xl font-black">
        {t('title')} <span className="text-primary">{t('countries')}</span>
      </h1>
      <p className="desktop:text-xl text-center text-lg">{t('description')}</p>
      <Button asChild variant="default">
        <Link href="/documentation/about"> {t('startButton')}</Link>
      </Button>
    </div>
  );
}
