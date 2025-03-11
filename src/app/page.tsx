import type { Metadata } from "next";

import HeroText from "@/components/parts/HeroText/HeroText";
import SiteDescriptionBox from "@/components/parts/SiteDescriptionBox/SiteDescriptionBox";

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | صفحه اصلی",
};

export default function HomePage() {
  return (
  <div>
    <HeroText />
    <SiteDescriptionBox />
  </div>
  );
}
