import SocialAndSupport from "@/components/modules/SocialAndSupport";
import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="pt-26 mt-auto">
      <SocialAndSupport />
      <div className="border-t border-accent p-6">
        <p className="text-center text-base tablet:text-lg font-bold">
          {t("designedBy")}
        </p>
      </div>
    </footer>
  );
}
