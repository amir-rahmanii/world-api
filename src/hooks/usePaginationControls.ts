import type { SideBarNavChild } from "@/utils/sideBarNavLinks";

import { sideBarNavLinks } from "@/utils/sideBarNavLinks";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const usePaginationControls = () => {
  const pathname = usePathname();
  const [nextPage, setNextPage] = useState<SideBarNavChild | null>(null);
  const [previousPage, setPreviousPage] = useState<SideBarNavChild | null>(
    null,
  );

  const updatePaginationLinks = useCallback(() => {
    const allLinks = sideBarNavLinks.flatMap((nav) =>
      nav.children.filter((navChild) => !navChild.new),
    ); // Combine all child links in one array

    const currentIndex = allLinks.findIndex((link) => pathname === link.path); // Find the current path index

    if (currentIndex !== -1) {
      // Set the next and previous pages based on the current index
      setNextPage(allLinks[currentIndex + 1] || null);
      setPreviousPage(allLinks[currentIndex - 1] || null);
    }
  }, [pathname]);

  useEffect(() => {
    updatePaginationLinks();
  }, [updatePaginationLinks]);

  return { nextPage, previousPage };
};
