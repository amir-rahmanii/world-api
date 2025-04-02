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

  return (
    <>
      {systemTheme === "light" || theme === "light" ? (
        <TooltipWrapper content="تم تاریک">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme("dark")}
          >
            <Moon className="h-[1.2rem] w-[1.2rem] " />
          </Button>
        </TooltipWrapper>
      ) : (
        <TooltipWrapper content="تم روشن">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TooltipWrapper>
      )}
    </>
  );
}
