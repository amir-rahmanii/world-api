import { useTranslations } from 'next-intl';
import React from 'react';

import SocialAndSupport from '@/components/shared/SocialAndSupport/SocialAndSupport';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="mt-auto pt-26">
      <SocialAndSupport />
      <div className="border-t border-accent p-6">
        <p className="text-center text-base font-bold tablet:text-lg">
          {t('designedBy')}
        </p>
      </div>
    </footer>
  );
}
