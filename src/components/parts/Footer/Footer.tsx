import Github from "@/components/icons/githubMini.svg";
import Linkedin from "@/components/icons/linkedin.svg";
import Telegram from "@/components/icons/telegram.svg";
import React from "react";
import SocialLink from "../SocialLink/SocialLink";

export interface SocialMedia {
  content: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialMediaLinks: SocialMedia[] = [
  {
    content: "گیت هاب",
    path: "https://github.com/amir-rahmanii",
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

export default function Footer() {
  return (
    <footer className="pt-26 mt-auto">
      <div className="flex flex-col gap-5 pb-5">
        <h3 className="text-base tablet:text-lg font-bold text-center">
          لینک شبکه های اجتماعی{" "}
        </h3>
        <div className="flex justify-center items-center gap-3.5">
          {SocialMediaLinks.map((mediaLink) => (
            <SocialLink key={mediaLink.content} {...mediaLink} />
          ))}
        </div>
      </div>
      <div className="border-t border-accent p-6">
        <p className="text-center text-base tablet:text-lg font-bold">
          طراحی شده با ❤️ توسط امیررضا رحمانی
        </p>
      </div>
    </footer>
  );
}
