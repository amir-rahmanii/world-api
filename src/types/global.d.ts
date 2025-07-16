import type messages from '../../messages/fa.json';

declare module 'next-intl' {
  interface AppConfig {
    // ...
    Messages: typeof messages;
  }
}
