import type { Metadata } from "next";

import React from "react";

import AccordionFaq from "./_components/AccordionFaq";

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | سوالات متداول  ",
};

export default function FaqPage() {
  return (
    <>
      <h1>سوالات متداول</h1>
      <AccordionFaq />
    </>
  );
}
