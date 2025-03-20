"use client";
import { Button } from "@/components/ui/button";
import { usePaginationControls } from "@/hooks/usePaginationControls";
import Link from "next/link";
import React from "react";

import ArrowLeft from "./arrowLeft.svg";
import ArrowRight from "./arrowRight.svg";

export default function PaginationControls() {
  const { nextPage, previousPage } = usePaginationControls();
  return (
    <div className="flex items-center justify-between mt-12">
      {nextPage && (
        <Button asChild variant="link">
          <Link href={nextPage.path}>
            <ArrowRight />
            {nextPage.title}
          </Link>
        </Button>
      )}
      {previousPage && (
        <Button asChild variant="link">
          <Link href={previousPage.path}>
            {previousPage.title}
            <ArrowLeft />
          </Link>
        </Button>
      )}
    </div>
  );
}
