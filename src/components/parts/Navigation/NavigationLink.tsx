import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

import type { Nav } from "./NavigationBar";

interface NavLinkProps extends Nav {
  currentPath: string;
}

export default function NavigationLink({
  title,
  path,
  icon: Icon,
  currentPath,
}: NavLinkProps) {
  const t = useTranslations("Navs");
  const isActive =
    path === currentPath ||
    (path === "/documentation/about" &&
      currentPath.startsWith("/documentation"));

  return (
    <li className="w-full flex justify-center items-end" key={title}>
      <Button
        asChild
        className={cn("w-full", isActive && "bg-accent text-accent-foreground")}
        variant="link"
      >
        <Link href={path}>
          <Icon className="size-5" />
          <span className="translate-y-0.5">{t(title)}</span>
        </Link>
      </Button>
    </li>
  );
}
