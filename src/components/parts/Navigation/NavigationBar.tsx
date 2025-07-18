'use client';

import React from 'react';

import Burger from '@/assets/icons/shared/burger.svg';
import WorldIcon from '@/assets/icons/shared/world.svg';
import { Button } from '@/components/ui/button';
import { Link, usePathname } from '@/i18n/navigation';

import { NAVS } from '../../../constants/navs.constant';
import { MobileNavigation } from './MobileNavigation';
import NavigationLink from './NavigationLink';

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className="wide:gap-5 flex items-center gap-3">
      <Link href="/">
        <WorldIcon className="hover:text-primary size-12 transition-all duration-200" />
      </Link>
      <div className="desktop:hidden flex items-center">
        <MobileNavigation>
          <Button size="icon" variant="outline">
            <Burger />
          </Button>
        </MobileNavigation>
      </div>
      <ul className="desktop:flex wide:gap-5 hidden items-center gap-3">
        {NAVS.map((nav) => (
          <NavigationLink key={nav.path} {...nav} currentPath={pathname} />
        ))}
      </ul>
    </div>
  );
}
