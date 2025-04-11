"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SIDEBAR_NAV_LINKS } from "@/constants/sideBar.constant";
import { useAccordionValue } from "@/hooks/useAccordionValue";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export default function SideBar() {
  const t = useTranslations("documentationPage.sideBar");
  const { pathName, accordionValue, setAccordionValue } = useAccordionValue();
  return (
    <div>
      <ul className="w-full wide:w-[280px] flex flex-col border border-accent rounded-lg p-4">
        <Accordion
          type="single"
          value={accordionValue}
          collapsible
          onValueChange={setAccordionValue}
        >
          {SIDEBAR_NAV_LINKS.map((nav) => (
            <AccordionItem key={nav.id} value={`item-${nav.id}`}>
              <AccordionTrigger>
                {t(`sideBarNavLink.titles.${nav.title}`)}
              </AccordionTrigger>
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
                      {t(`sideBarNavLink.links.${navChild.title}`)}
                      {navChild.new && (
                        <span className="text-[10px] text-primary">
                          {t("comingSoon")}
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
