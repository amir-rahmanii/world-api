export type APILocaleType = 'ar' | 'en' | 'fa';

export const API_LOCALES = {
  Persian: 'fa',
  Arabic: 'ar',
  English: 'en',
} as const satisfies Record<string, APILocaleType>;
