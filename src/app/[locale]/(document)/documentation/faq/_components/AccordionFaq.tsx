"use client";
import { useTranslations } from "next-intl";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/faq.constant";

export default function AccordionFaq() {
  const t = useTranslations("documentationPage.faqPage.questions");
  return (
    <Accordion className="w-full" type="single" collapsible>
      {faqData.map((item) => (
        <AccordionItem className="pb-4" key={item} value={item}>
          <AccordionTrigger className="font-bold text-lg px-4 py-3 transition-all">
            {t(`${item}.question`)}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-base leading-relaxed">
            {t(`${item}.answer`)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
