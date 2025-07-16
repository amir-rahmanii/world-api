import type { Messages } from 'next-intl';

type FaqKey = keyof Messages['documentationPage']['faqPage']['questions'];

export const faqData: FaqKey[] = [
  'dataUpToDate',
  'getCountriesInEnglish',
  'howToGetApiKey',
  'howToUseApi',
  'isFree',
  'reportOrContribute',
];
