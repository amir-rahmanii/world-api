import type { SideBarNavChild } from "@/constants/sideBar.constant";

import { SIDEBAR_NAV_LINKS } from "@/constants/sideBar.constant";
import { usePathname } from "@/i18n/navigation";
import { useCallback, useEffect, useState } from "react";

export const usePaginationControls = () => {
  const pathname = usePathname();
  const [nextPage, setNextPage] = useState<SideBarNavChild | null>(null);
  const [previousPage, setPreviousPage] = useState<SideBarNavChild | null>(
    null,
  );

  const updatePaginationLinks = useCallback(() => {
    const allLinks = SIDEBAR_NAV_LINKS.flatMap((nav) =>
      nav.children.filter((navChild) => !navChild.new),
    );

    const currentIndex = allLinks.findIndex((link) => pathname === link.path);

    if (currentIndex !== -1) {
      setNextPage(allLinks[currentIndex + 1] || null);
      setPreviousPage(allLinks[currentIndex - 1] || null);
    }
  }, [pathname]);

  useEffect(() => {
    updatePaginationLinks();
  }, [updatePaginationLinks]);

  return { nextPage, previousPage };
};
