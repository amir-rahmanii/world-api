import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface GithubAvatarProps {
  avatar: string;
  name: string;
}

export default function GithubAvatar({ avatar, name }: GithubAvatarProps) {
  return (
    <TooltipWrapper content="پروفایل من">
      <Button variant="outline">
        {name}
        <div className="rounded-full w-8 h-8 overflow-hidden">
          <Image height={220} width={220} alt="profile" src={avatar} />
        </div>
      </Button>
    </TooltipWrapper>
  );
}
