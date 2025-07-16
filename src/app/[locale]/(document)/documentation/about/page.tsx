import type { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import React from 'react';

import Table from '../_components/Table';
import {
  API_FIELD_INFOS,
  TABLE_HEADERS_API_FIELD_INFOS,
} from '../../../../../constants/apiFieldInfos.constant';

export const metadata: Metadata = {
  title: 'وب سرویس اطلاعات کشورها | مستندات | توضیحات وب سرویس',
};

export default function AboutPage() {
  const t = useTranslations('documentationPage.aboutPage');
  const tApiFieldInfos = useTranslations(
    'documentationPage.aboutPage.apiFieldInfos',
  );
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('intro')}</p>
      <h4>{t('apiKeyTitle')}</h4>
      <p>{t('apiKeyDescription')}</p>

      <h4>{t('goalsTitle')}</h4>
      <p>{t('goalsDescription')}</p>

      <h4>{t('updatesTitle')}</h4>
      <p>{t('updatesDescription')}</p>

      <h4>{t('dataTypesTitle')}</h4>
      <p>{t('dataTypesDescription')}</p>
      <Table tableHeaders={TABLE_HEADERS_API_FIELD_INFOS}>
        <tbody>
          {API_FIELD_INFOS.map(({ title, description, type, example }) => (
            <tr key={title}>
              <td>{title}</td>
              <td>{tApiFieldInfos(description)}</td>
              <td>{type}</td>
              <td>{example}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
