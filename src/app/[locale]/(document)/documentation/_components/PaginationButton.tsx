"use client";
import ArrowLeft from "@/assets/icons/documentation/arrowLeft.svg";
import ArrowRight from "@/assets/icons/documentation/arrowRight.svg";
import { Button } from "@/components/ui/button";
import { usePaginationControls } from "@/hooks/usePaginationControls";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function PaginationControls() {
  const t = useTranslations("documentationPage.sideBar.sideBarNavLink");
  const { nextPage, previousPage } = usePaginationControls();

  return (
    <div
      dir="rtl"
      className="flex flex-row flex-wrap items-center justify-between mt-12"
    >
      {nextPage && (
        <Button asChild variant="link">
          <Link href={nextPage.path}>
            <ArrowRight />
            {t(`links.${nextPage.title}`)}
          </Link>
        </Button>
      )}
      {previousPage && (
        <Button asChild variant="link">
          <Link href={previousPage.path}>
            {t(`links.${previousPage.title}`)}
            <ArrowLeft />
          </Link>
        </Button>
      )}
    </div>
  );
}
