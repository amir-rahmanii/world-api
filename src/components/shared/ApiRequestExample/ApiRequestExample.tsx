import { useTranslations } from 'next-intl';
import React from 'react';

import type { APILocaleType } from '@/constants/apilocales.constant';

import { CodeBlock } from '@/components/shared/CodeBlock/CodeBlock';
import { API_LOCALES } from '@/constants/apilocales.constant';

export default function ApiRequestExample({
  endpoint,
  acceptLanguage = API_LOCALES.Persian,
}: {
  endpoint: string;
  acceptLanguage?: APILocaleType;
}) {
  const t = useTranslations('codeBlock');
  return (
    <>
      <h4>{t('codeSampleTitle')}</h4>
      <CodeBlock
        code={`fetch("${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ''}${endpoint}", { 
  method: "GET", 
  headers: { 
    "X-API-Key": "your-api-key",  // ${t('insertKeyPlaceholder')}
    "Accept-Language" : "${acceptLanguage}" // ${API_LOCALES.English} , ${API_LOCALES.Arabic} or ${API_LOCALES.Persian}
  } 
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}
      />
    </>
  );
}
