import type { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import React from 'react';

import type { ApiHeader } from '@/types/apiHeader.types';

import ApiRequestExample from '@/components/shared/ApiRequestExample/ApiRequestExample';
import ApiResponseExample from '@/components/shared/ApiResponseExample/ApiResponseExample';

import type { ApiError } from '../layout';

import ApiErrorMessage from '../_components/ApiErrorMessage';
import ApiHeaderSection from '../_components/ApiHeaderSection';
import HeaderConfigs from '../_components/HeaderConfigs';

const apiHeader: ApiHeader = {
  translationKey: 'getWithIso3',
  endpoint: '/api/v1/countries?iso3={iso3}',
  exampleEndpoint: '/api/v1/countries?iso3=irn',
};

const invalidIso3Error: ApiError = {
  title: 'invalidIso3',
  message: `Invalid iso3 parameter. It must be exactly 3 
    characters long (e.g., 'irn' for Iran).`,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('documentationPage.getWithIso3Page.title', {
      mainTitle: t('mainTitle'),
      documentTitle: t('documentationPage.documentTitle'),
    }),
  };
}

export default function CountriesGetWithIso3Page() {
  return (
    <>
      <ApiHeaderSection {...apiHeader} />
      <HeaderConfigs />
      <ApiRequestExample endpoint={apiHeader.exampleEndpoint!} />
      <ApiResponseExample />
      <ApiErrorMessage {...invalidIso3Error} />
    </>
  );
}
