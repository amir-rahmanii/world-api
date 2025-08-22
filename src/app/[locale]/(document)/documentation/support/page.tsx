import type { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import { CONTACT_METHODS } from '@/constants/contactMethods.constant';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('documentationPage.supportPage.title', {
      mainTitle: t('mainTitle'),
      documentTitle: t('documentationPage.documentTitle'),
    }),
  };
}

export default function SupportPage() {
  const t = useTranslations('documentationPage.supportPage');
  const tContactMethod = useTranslations(
    'documentationPage.supportPage.contactMethod',
  );
  return (
    <>
      <h1>{t('title')}</h1>
      <section>
        <p>{t('description')}</p>
        <ul className="mt-3 flex list-disc flex-col gap-2 pr-5">
          {CONTACT_METHODS.map(({ type, value }) => (
            <li className="flex items-center gap-2" key={type}>
              <strong>{tContactMethod(type)}:</strong>
              <p dir="ltr">{value}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
