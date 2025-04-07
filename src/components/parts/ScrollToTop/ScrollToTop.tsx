"use client";
import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

function ScrollToTop() {
  const t = useTranslations("BackToTop");
  const { isVisible, scrollToTop } = useScrollToTop();
  if (!isVisible) return null;
  return (
    <TooltipWrapper content={t("tooltip")}>
      <Button
        size="icon"
        className="fixed bottom-5 right-5 transition-opacity duration-300"
        variant="default"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </Button>
    </TooltipWrapper>
  );
}

export default ScrollToTop;
