import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export default function HeroText() {
  const t = useTranslations("homePage.heroText");

  return (
    <div className="flex flex-col gap-8 justify-center  items-center h-[calc(100vh-220px)]  desktop:h-[calc(100vh-180px)]">
      <h1 className="text-3xl pb-0 tablet:text-4xl desktop:text-5xl text-center font-black">
        {t("title")} <span className="text-primary">{t("countries")}</span>
      </h1>
      <p className="text-lg desktop:text-xl text-center">{t("description")}</p>
      <Button asChild variant="default">
        <Link href="/documentation/about"> {t("startButton")}</Link>
      </Button>
    </div>
  );
}
