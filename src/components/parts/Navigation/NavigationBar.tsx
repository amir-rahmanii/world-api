"use client";
import Burger from "@/components/icons/burger.svg";
import Document from "@/components/icons/document.svg";
import Home from "@/components/icons/home.svg";
import Key from "@/components/icons/key.svg";
import { Button } from "@/components/ui/button";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";
import React from "react";

import WorldIcon from "../../icons/world.svg";
import { MobileNavigation } from "./MobileNavigation";
import NavigationLink from "./NavigationLink";

export interface Nav {
  title: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Navs: Nav[] = [
  { title: "home", path: "/", icon: Home },
  { title: "documentation", path: "/documentation/about", icon: Document },
  { title: "get-api-key", path: "/get-api-key", icon: Key },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3 wide:gap-5">
      <Link href="/">
        <WorldIcon className="size-12 hover:text-primary transition-all duration-200" />
      </Link>
      <div className="desktop:hidden flex items-center">
        <MobileNavigation Navs={Navs}>
          <Button size="icon" variant="outline">
            <Burger />
          </Button>
        </MobileNavigation>
      </div>
      <ul className="hidden desktop:flex items-center gap-3 wide:gap-5">
        {Navs.map((nav) => (
          <NavigationLink key={nav.path} {...nav} currentPath={pathname} />
        ))}
      </ul>
    </div>
  );
}
