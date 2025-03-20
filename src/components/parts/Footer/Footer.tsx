import SocialAndSupport from "@/components/modules/SocialAndSupport";
import React from "react";

export default function Footer() {
  return (
    <footer className="pt-26 mt-auto">
      <SocialAndSupport />
      <div className="border-t border-accent p-6">
        <p className="text-center text-base tablet:text-lg font-bold">
          طراحی شده با ❤️ توسط امیررضا رحمانی
        </p>
      </div>
    </footer>
  );
}
