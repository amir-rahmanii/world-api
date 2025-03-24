"use client";
import Burger from "@/components/icons/burger.svg";
import Document from "@/components/icons/document.svg";
import Github from "@/components/icons/githubMini.svg";
import Home from "@/components/icons/home.svg";
import Key from "@/components/icons/key.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { title: "خانه", path: "/", icon: Home },
  { title: "مستندات", path: "/documentation/about", icon: Document },
  { title: "دریافت API Key", path: "/get-api-key", icon: Key },
  {
    title: "گیت هاب",
    path: "https://github.com/amir-rahmanii/world-api",
    icon: Github,
  },
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
