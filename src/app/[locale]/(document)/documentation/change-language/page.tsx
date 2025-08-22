import type { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import ApiRequestExample from '@/components/shared/ApiRequestExample/ApiRequestExample';
import ApiResponseExample from '@/components/shared/ApiResponseExample/ApiResponseExample';
import { DEFAULT_RESPONSE_JSON_EN } from '@/constants/defaultResponse.constant';
import {
  SUPPORTED_LANGUAGES,
  TABLE_HEADERS_SUPPORTED_LANGUAGES,
} from '@/constants/supportedLanguages.constant';

import Table from '../_components/Table';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('documentationPage.changeLanguagePage.title', {
      mainTitle: t('mainTitle'),
      documentTitle: t('documentationPage.documentTitle'),
    }),
  };
}

export default function ChangeLanguagePage() {
  const t = useTranslations('documentationPage.changeLanguagePage');
  const tSupportedLanguages = useTranslations(
    'documentationPage.changeLanguagePage.supported-languages',
  );
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <h4>{t('noAcceptLanguageTitle')}</h4>
      <p>{t('noAcceptLanguageDescription')}</p>
      <ul>
        <li>{t('osLangFa')}</li>
        <li>{t('osLangNotFound')}</li>
      </ul>
      <h4>{t('manualChange')}</h4>
      <Table tableHeaders={TABLE_HEADERS_SUPPORTED_LANGUAGES}>
        <tbody>
          {SUPPORTED_LANGUAGES.map(({ value, title }) => (
            <tr key={value}>
              <td>{tSupportedLanguages(title)}</td>
              <td>
                <code>{`"Accept-Language": "${value}"`}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ApiRequestExample
        acceptLanguage="en"
        endpoint="/api/v1/countries?id=364"
      />
      <ApiResponseExample responseJson={DEFAULT_RESPONSE_JSON_EN} />
    </div>
  );
}
