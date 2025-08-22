import type { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import React from 'react';

import type { ApiHeader } from '@/types/apiHeader.types';

import ApiRequestExample from '@/components/shared/ApiRequestExample/ApiRequestExample';
import ApiResponseExample from '@/components/shared/ApiResponseExample/ApiResponseExample';
import { DEFAULT_RESPONSE_JSON_ARRAY_FA } from '@/constants/defaultResponse.constant';

import ApiHeaderSection from './_components/ApiHeaderSection';
import HeaderConfigs from './_components/HeaderConfigs';

const apiHeader: ApiHeader = {
  translationKey: 'getAllCountries',
  endpoint: '/api/v1/countries',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('documentationPage.getAllCountriesPage.title', {
      mainTitle: t('mainTitle'),
      documentTitle: t('documentationPage.documentTitle'),
    }),
  };
}

export default function CountriesPage() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.endpoint} />
      <ApiResponseExample responseJson={DEFAULT_RESPONSE_JSON_ARRAY_FA} />
    </>
  );
}
