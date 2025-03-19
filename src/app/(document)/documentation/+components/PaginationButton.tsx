"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import type { SideBarNavLink } from "../../layout";

import ArrowLeft from "./arrowLeft.svg";
import ArrowRight from "./arrowRight.svg";

// Define the PageLink interface
interface PageLink {
  title: string;
  path: string;
}

export default function PaginationControls({
  sideBarNavLinks,
}: {
  sideBarNavLinks: SideBarNavLink[];
}) {
  const pathname = usePathname();
  const [nextPage, setNextPage] = useState<PageLink | null>(null);
  const [previousPage, setPreviousPage] = useState<PageLink | null>(null);

  const updatePaginationLinks = useCallback(() => {
    const allLinks = sideBarNavLinks.flatMap((nav) => nav.children); // Combine all child links in one array

    const currentIndex = allLinks.findIndex((link) => pathname === link.path); // Find the current path index

    if (currentIndex !== -1) {
      // Set the next and previous pages based on the current index
      setNextPage(allLinks[currentIndex + 1] || null);
      setPreviousPage(allLinks[currentIndex - 1] || null);
    }
  }, [pathname, sideBarNavLinks]);

  useEffect(() => {
    updatePaginationLinks();
  }, [updatePaginationLinks]);

  return (
    <div className="flex items-center justify-between mt-12">
      {nextPage && (
        <Button asChild variant="link">
          <Link href={nextPage.path}>
            <ArrowRight />
            {nextPage.title}
          </Link>
        </Button>
      )}
      {previousPage && (
        <Button asChild variant="link">
          <Link href={previousPage.path}>
            {previousPage.title}
            <ArrowLeft />
          </Link>
        </Button>
      )}
    </div>
  );
}
