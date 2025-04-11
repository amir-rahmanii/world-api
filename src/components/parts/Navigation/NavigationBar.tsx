"use client";

import Burger from "@/assets/icons/shared/burger.svg";
import WorldIcon from "@/assets/icons/shared/world.svg";
import { Button } from "@/components/ui/button";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";
import React from "react";

import { NAVS } from "../../../constants/navs.constant";
import { MobileNavigation } from "./MobileNavigation";
import NavigationLink from "./NavigationLink";

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3 wide:gap-5">
      <Link href="/">
        <WorldIcon className="size-12 hover:text-primary transition-all duration-200" />
      </Link>
      <div className="desktop:hidden flex items-center">
        <MobileNavigation>
          <Button size="icon" variant="outline">
            <Burger />
          </Button>
        </MobileNavigation>
      </div>
      <ul className="hidden desktop:flex items-center gap-3 wide:gap-5">
        {NAVS.map((nav) => (
          <NavigationLink key={nav.path} {...nav} currentPath={pathname} />
        ))}
      </ul>
    </div>
  );
}
