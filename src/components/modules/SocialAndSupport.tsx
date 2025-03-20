import Github from "@/components/icons/githubMini.svg";
import Linkedin from "@/components/icons/linkedin.svg";
import Telegram from "@/components/icons/telegram.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import SocialLink from "../parts/SocialLink/SocialLink";

export interface SocialMedia {
  content: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialMediaLinks: SocialMedia[] = [
  {
    content: "گیت هاب",
    path: "https://github.com/amir-rahmanii/world-api",
    icon: Github,
  },
  {
    content: "تلگرام",
    path: "https://t.me/AmirRahmani313",
    icon: Telegram,
  },
  {
    content: "لینکدین",
    path: "https://www.linkedin.com/in/amir-rahmani-104556317/",
    icon: Linkedin,
  },
];

export default function SocialAndSupport() {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <h3 className="text-base tablet:text-lg font-bold text-center">
        لینک شبکه های اجتماعی
      </h3>
      <div className="flex justify-center items-center gap-3.5">
        {SocialMediaLinks.map((mediaLink) => (
          <SocialLink key={mediaLink.content} {...mediaLink} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link href="https://www.coffeebede.com/amirrahmani" target="_blank">
          <Image
            height={160}
            width={160}
            alt="coffeebede"
            className="img-fluid"
            src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg"
          />
        </Link>
      </div>
    </div>
  );
}
