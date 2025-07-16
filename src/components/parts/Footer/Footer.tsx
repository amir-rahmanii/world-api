import { useTranslations } from 'next-intl';
import React from 'react';

import SocialAndSupport from '@/components/shared/SocialAndSupport/SocialAndSupport';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="mt-auto pt-26">
      <SocialAndSupport />
      <div className="border-accent border-t p-6">
        <p className="tablet:text-lg text-center text-base font-bold">
          {t('designedBy')}
        </p>
      </div>
    </footer>
  );
}
