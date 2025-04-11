import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SOCIAL_MEDIA_LINKS } from "../../../constants/socialMedia.constant";
import SocialLink from "./SocialLink";

export default function SocialAndSupport() {
  const t = useTranslations("socialAndSupport");
  return (
    <div className="flex flex-col gap-5 pb-5">
      <h3 className="text-base tablet:text-lg font-bold text-center">
        {t("title")}
      </h3>
      <div className="flex justify-center items-center gap-3.5">
        {SOCIAL_MEDIA_LINKS.map((mediaLink) => (
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
