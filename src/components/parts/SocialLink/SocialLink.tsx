import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import type { SocialMedia } from "../Footer/Footer";

export default function SocialLink({ content, path, icon: Icon }: SocialMedia) {
  return (
    <TooltipWrapper content={content}>
      <Button asChild size="icon">
        <Link href={path} target="_blank">
          <Icon className="size-6" />
        </Link>
      </Button>
    </TooltipWrapper>
  );
}
