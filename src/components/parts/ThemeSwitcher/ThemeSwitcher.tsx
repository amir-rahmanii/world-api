"use client";

import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { Button } from "../../ui/button";

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? (systemTheme ?? "light") : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <TooltipWrapper content={currentTheme === "light" ? "تم تاریک" : "تم روشن"}>
      <Button size="icon" variant="outline" onClick={toggleTheme}>
        {currentTheme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] " />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </TooltipWrapper>
  );
}
