import { sideBarNavLinks } from "@/utils/sideBarNavLinks";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface PageLink {
  title: string;
  path: string;
}

export const usePaginationControls = () => {
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
  }, [pathname]);

  useEffect(() => {
    updatePaginationLinks();
  }, [updatePaginationLinks]);

  return { nextPage, previousPage };
};
