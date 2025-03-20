"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useAccordionValue } from "@/hooks/useAccordionValue";
import { sideBarNavLinks } from "@/utils/sideBarNavLinks";
import Link from "next/link";
import React from "react";

export default function SideBar() {
  const { pathName, accordionValue, setAccordionValue } = useAccordionValue();

  return (
    <div>
      <ul className="w-[250px] flex flex-col border border-accent rounded-lg p-4">
        <Accordion
          type="single"
          value={accordionValue}
          collapsible
          onValueChange={setAccordionValue}
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
