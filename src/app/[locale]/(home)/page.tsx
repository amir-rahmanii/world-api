import type { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import HeroText from './_components/HeroText';
import SiteDescriptions from './_components/SiteDescriptions';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('homePage.title', { mainTitle: t('mainTitle') }),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroText />
      <SiteDescriptions />
    </>
  );
}
