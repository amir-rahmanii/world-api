import type { Messages } from "next-intl";

import Github from "@/assets/icons/shared/githubMini.svg";
import Linkedin from "@/assets/icons/shared/linkedin.svg";
import Telegram from "@/assets/icons/shared/telegram.svg";

type SocialMediaKey = keyof Messages["socialAndSupport"]["socialMedia"];

export interface SocialMedia {
  content: SocialMediaKey;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SOCIAL_MEDIA_LINKS: SocialMedia[] = [
  {
    content: "github",
    path: "https://github.com/amir-rahmanii/world-api",
    icon: Github,
  },
  {
    content: "telegram",
    path: "https://t.me/AmirRahmani313",
    icon: Telegram,
  },
  {
    content: "linkedin",
    path: "https://www.linkedin.com/in/amir-rahmani-104556317/",
    icon: Linkedin,
  },
];
