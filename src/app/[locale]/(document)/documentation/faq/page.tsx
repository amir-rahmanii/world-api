import type { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import AccordionFaq from './_components/AccordionFaq';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('documentationPage.faqPage.title', {
      mainTitle: t('mainTitle'),
      documentTitle: t('documentationPage.documentTitle'),
    }),
  };
}

export default function FaqPage() {
  const t = useTranslations('documentationPage.faqPage');
  return (
    <>
      <h1>{t('title')}</h1>
      <AccordionFaq />
    </>
  );
}
