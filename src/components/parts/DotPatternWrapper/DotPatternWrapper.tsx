"use client";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

export default function DotPatternWrapper() {
  return (
    <DotPattern
      glow={true}
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      )}
    />
  );
}
