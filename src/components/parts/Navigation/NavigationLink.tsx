import { Button } from "@/components/ui/button";
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
  const isActive =
    path === currentPath ||
    (path === "/documentation" && currentPath.startsWith("/documentation"));

  return (
    <li className="w-full flex justify-center items-end" key={title}>
      <Button
        asChild
        variant="link"
        className={
          isActive ? "bg-accent text-accent-foreground w-full" : "w-full"
        }
      >
        <Link href={path}>
          <Icon className="size-6" />
          {title}
        </Link>
      </Button>
    </li>
  );
}
