"use client";
import WorldIcon from "@/assets/icons/shared/world.svg";
import SocialAndSupport from "@/components/shared/SocialAndSupport/SocialAndSupport";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import React, { useEffect, useState } from "react";

import { NAVS } from "../../../constants/navs.constant";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import NavigationLink from "./NavigationLink";

interface NavLinksMobileProps {
  children: React.ReactNode;
}

export function MobileNavigation({ children }: NavLinksMobileProps) {
  const [isOpenMobileNavigation, setIsOpenMobileNavigation] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMobileNavigation(false);
  }, [pathname]);

  return (
    <Sheet
      onOpenChange={setIsOpenMobileNavigation}
      open={isOpenMobileNavigation}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="pt-24 px-4 overflow-auto" side="right">
        <Link
          className="absolute top-2 right-2 flex gap-2 justify-center items-center"
          href="/"
        >
          <WorldIcon className="size-10 hover:text-primary transition-all duration-200" />
        </Link>
        <ul className="flex flex-col items-center gap-10">
          {NAVS.map((nav) => (
            <NavigationLink key={nav.path} {...nav} currentPath={pathname} />
          ))}
        </ul>
        <div className="w-full pt-6">
          <LanguageSwitcher />
        </div>
        <div className="mt-auto">
          <SocialAndSupport />
        </div>
      </SheetContent>
    </Sheet>
  );
}
