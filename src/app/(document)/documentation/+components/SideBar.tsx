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
      <ul className="w-full tablet:w-full desktop:w-[220px] wide:w-[280px] flex flex-col border border-accent rounded-lg p-4">
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
                    asChild={!navChild.new}
                    className="justify-start text-sm text-start w-full"
                    disabled={navChild.new}
                    variant={pathName === navChild.path ? "sideBar" : "link"}
                  >
                    <Link
                      className="w-full flex flex-wrap justify-between items-center"
                      href={navChild.path}
                    >
                      {navChild.title}
                      {navChild.new && (
                        <span className="text-[10px] text-primary">
                          به زودی
                        </span>
                      )}
                    </Link>
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
