import Image from "next/image";
import React from "react";

import TooltipWrapper from "@/components/shared/TooltipWrapper/TooltipWrapper";
import { Button } from "@/components/ui/button";

interface AvatarProps {
  avatarUrl: string;
  name: string;
  tooltip: string;
}

export default function Avatar({ avatarUrl, name, tooltip }: AvatarProps) {
  return (
    <TooltipWrapper content={tooltip}>
      <Button
        className="rounded-full p-1  tablet:rounded-md tablet:py-2 tablet:px-4"
        variant="outline"
      >
        <span className="hidden tablet:block">{name}</span>
        <div className="rounded-full w-7 h-7 overflow-hidden">
          <Image
            height={220}
            width={220}
            alt="profile"
            src={avatarUrl || "/default-avatar.jpg"}
          />
        </div>
      </Button>
    </TooltipWrapper>
  );
}
