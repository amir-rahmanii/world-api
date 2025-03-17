"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface SideBarNavLink {
  id: number;
  title: string;
  children: { title: string; path: string }[];
}

const sideBarNavLinks: SideBarNavLink[] = [
  {
    id: 1,
    title: "توضیحات وب سرویس",
    children: [
      { title: "توضیحات", path: "/documentation/about" },
      { title: "تغییر زبان", path: "/documentation/change-language" },
    ],
  },
  {
    id: 2,
    title: "مستندات اطلاعات کشورها",
    children: [
      { title: "دریافت تمام کشورها", path: "/documentation/countries" },
      { title: "دریافت کشورها با ID", path: "/documentation/countries/id" },
    ],
  },
  {
    id: 3,
    title: "پشتیبانی و سوالات متداول",
    children: [
      { title: "سوالات متداول", path: "/documentation/faq" },
      { title: "پشتیبانی", path: "/documentation/support" },
    ],
  },
];

export default function SideBar() {
  const pathName = usePathname();

  const defaultAccordionValue = useMemo(() => {
    const foundItem = sideBarNavLinks.find((nav) =>
      nav.children.some((child) => child.path === pathName)
    );
    return foundItem ? `item-${foundItem.id}` : "item-1";
  }, [pathName]);

  return (
    <div>
      <ul className="w-[250px] flex flex-col border border-accent rounded-lg p-4">
        <Accordion
          defaultValue={defaultAccordionValue}
          type="single"
          collapsible
        >
          {sideBarNavLinks.map((nav) => (
            <AccordionItem key={nav.id} value={`item-${nav.id}`}>
              <AccordionTrigger>{nav.title}</AccordionTrigger>
              {nav.children.map((navChild) => (
                <AccordionContent className="pb-2" key={navChild.title}>
                  <Button
                    asChild
                    className="justify-start text-sm text-start w-full"
                    variant={pathName === navChild.path ? "sideBar" : "link"}
                  >
                    <Link href={navChild.path}>{navChild.title}</Link>
                  </Button>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </ul>
    </div>
  );
}
