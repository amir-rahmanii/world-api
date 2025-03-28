import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  avatar: string;
  name: string;
}

export default function Avatar({ avatar, name }: AvatarProps) {
  return (
    <TooltipWrapper content="پروفایل من">
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
            src={avatar || "/default-avatar.jpg"}
          />
        </div>
      </Button>
    </TooltipWrapper>
  );
}
