"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import WorldIcon from "../../icons/world.svg";

interface Nav {
  title: string;
  path: string;
}

const Navs: Nav[] = [
  { title: "خانه", path: "/" },
  { title: "مستندات", path: "/documentation" },
  { title: "دریافت API Key", path: "/get-api-key" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-6">
      <li>
        <Link href="/">
          <WorldIcon className="size-12 hover:text-primary transition-all duration-200" />
        </Link>
      </li>
      {Navs.map((nav) => (
        <li key={nav.title}>
          <Button
            asChild
            variant="link"
            className={
              nav.path === pathname ? "bg-accent text-accent-foreground" : ""
            }
          >
            <Link href={nav.path}>{nav.title}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
