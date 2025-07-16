import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import type { SocialMedia } from '@/constants/socialMedia.constant';

import TooltipWrapper from '@/components/shared/TooltipWrapper/TooltipWrapper';
import { Button } from '@/components/ui/button';

export default function SocialLink({ content, path, icon: Icon }: SocialMedia) {
  const t = useTranslations('socialAndSupport.socialMedia');
  return (
    <TooltipWrapper content={t(content)}>
      <Button asChild size="icon">
        <Link href={path} target="_blank">
          <Icon className="size-6" />
        </Link>
      </Button>
    </TooltipWrapper>
  );
}
