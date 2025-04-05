"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/faqData";
import React from "react";

export default function AccordionFaq() {
  return (
    <Accordion className="w-full" type="single" collapsible>
      {faqData.map(({ question, answer, id }) => (
        <AccordionItem className="pb-4" key={id} value={`item-${id}`}>
          <AccordionTrigger className="font-bold text-lg px-4 py-3 transition-all">
            {question}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-base leading-relaxed">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
