import { SIDEBAR_NAV_LINKS } from "@/constants/sideBar.constant";
import { usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";

export const useAccordionValue = () => {
  const pathName = usePathname();
  const [accordionValue, setAccordionValue] = useState("item-1");

  useEffect(() => {
    const foundItem = SIDEBAR_NAV_LINKS.find((nav) =>
      nav.children.some((child) => child.path === pathName),
    );

    setAccordionValue(foundItem ? `item-${foundItem.id}` : "item-1");
  }, [pathName]);

  return { pathName, accordionValue, setAccordionValue };
};
