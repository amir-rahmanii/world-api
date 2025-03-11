import type { Metadata } from "next";

import HeroText from "@/components/parts/HeroText/HeroText";
import SiteDescriptions from "@/components/parts/SiteDescriptions/SiteDescriptions";

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | صفحه اصلی",
};

export default function HomePage() {
  return (
    <>
      <HeroText />
      <SiteDescriptions />
    </>
  );
}
