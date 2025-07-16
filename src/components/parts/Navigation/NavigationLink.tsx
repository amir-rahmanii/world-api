import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

import type { Nav } from '../../../constants/navs.constant';

interface NavLinkProps extends Nav {
  currentPath: string;
}

export default function NavigationLink({
  title,
  path,
  icon: Icon,
  currentPath,
}: NavLinkProps) {
  const t = useTranslations('navs');
  const isActive =
    path === currentPath ||
    (path === '/documentation/about' &&
      currentPath.startsWith('/documentation'));
  const locale = useLocale();

  return (
    <li className="flex w-full items-end justify-center" key={title}>
      <Button
        asChild
        className={cn('w-full', isActive && 'bg-accent text-accent-foreground')}
        variant="link"
      >
        <Link href={path} locale={locale}>
          <Icon className="size-5" />
          <span className="translate-y-0.5">{t(title)}</span>
        </Link>
      </Button>
    </li>
  );
}
