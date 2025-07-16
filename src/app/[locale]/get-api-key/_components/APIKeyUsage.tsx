import { useTranslations } from 'next-intl';
import React from 'react';

import ApiRequestExample from '@/components/shared/ApiRequestExample/ApiRequestExample';

export default function APIKeyUsage() {
  const t = useTranslations('getApiKeyPage.apiKeyUsage');
  return (
    <div>
      <h4>{t('title')}</h4>
      <p>{t('description')}</p>
      <h4>{t('whyTitle')}</h4>
      <p>{t('whyDescription')}</p>
      <ul className="list-disc ps-5">
        <li>{t('whyList.secure')}</li>
        <li>{t('whyList.simpleReadable')}</li>
        <li>{t('whyList.recommended')}</li>
      </ul>

      <h4>{t('howTitle')}</h4>
      <p>{t('howDescription')}</p>

      <ApiRequestExample endpoint="/api/v1/countries" />

      <h4>{t('securityTitle')}</h4>
      <ul className="list-disc ps-5">
        <li>{t('securityList.noPublicCode')}</li>
        <li>{t('securityList.useEnv')}</li>
      </ul>
    </div>
  );
}
