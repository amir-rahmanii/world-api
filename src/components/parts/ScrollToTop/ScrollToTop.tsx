"use client";
import TooltipWrapper from "@/components/shared/TooltipWrapper/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

function ScrollToTop() {
  const t = useTranslations("backToTop");
  const { isVisible, scrollToTop } = useScrollToTop();
  if (!isVisible) return null;
  return (
    <TooltipWrapper content={t("tooltip")}>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 transition-opacity duration-300"
        variant="default"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </Button>
    </TooltipWrapper>
  );
}

export default ScrollToTop;
