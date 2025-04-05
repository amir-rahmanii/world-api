"use client";

import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { Button } from "../../ui/button";

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Theme");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "light" ? (
        <TooltipWrapper content={t("dark")}>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme("dark")}
          >
            <Moon />
          </Button>
        </TooltipWrapper>
      ) : (
        <TooltipWrapper content={t("light")}>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme("light")}
          >
            <Sun />
          </Button>
        </TooltipWrapper>
      )}
    </>
  );
}
