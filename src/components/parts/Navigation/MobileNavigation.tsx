"use client";
import SocialAndSupport from "@/components/modules/SocialAndSupport";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import type { Nav } from "./NavigationBar";

import WorldIcon from "../../icons/world.svg";
import NavigationLink from "./NavigationLink";

interface NavLinksMobileProps {
  children: React.ReactNode;
  Navs: Nav[];
}

export function MobileNavigation({ children, Navs }: NavLinksMobileProps) {
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
          {Navs.map((nav) => (
            <NavigationLink key={nav.path} {...nav} currentPath={pathname} />
          ))}
        </ul>
        <div className="mt-auto">
          <SocialAndSupport />
        </div>
      </SheetContent>
    </Sheet>
  );
}
