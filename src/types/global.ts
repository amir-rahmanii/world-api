import type { Locale } from 'next-intl';

import type { routing } from '@/i18n/routing';

import type messages from '../../messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

declare global {
  interface Props {
    params: Promise<{ locale: Locale }>;
  }
}
