import type { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import { ApiKeyDisplay } from './_components/ApiKeyDisplay';
import APIKeyUsage from './_components/APIKeyUsage';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('getApiKeyPage.title', { mainTitle: t('mainTitle') }),
  };
}

export default function GetApiKeyPage() {
  const t = useTranslations('getApiKeyPage');
  return (
    <>
      <h1>{t('title')}</h1>
      <ApiKeyDisplay title={t('loginPrompt')} />
      <APIKeyUsage />
    </>
  );
}
