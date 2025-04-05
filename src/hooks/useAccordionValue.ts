import { usePathname } from "@/i18n/navigation";
import { sideBarNavLinks } from "@/utils/sideBarNavLinks";
import { useEffect, useState } from "react";

export const useAccordionValue = () => {
  const pathName = usePathname();
  const [accordionValue, setAccordionValue] = useState("item-1");

  useEffect(() => {
    const foundItem = sideBarNavLinks.find((nav) =>
      nav.children.some((child) => child.path === pathName),
    );

    setAccordionValue(foundItem ? `item-${foundItem.id}` : "item-1");
  }, [pathName]);

  return { pathName, accordionValue, setAccordionValue };
};
