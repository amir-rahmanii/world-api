import type { Metadata } from 'next';

import HeroText from './_components/HeroText';
import SiteDescriptions from './_components/SiteDescriptions';

export const metadata: Metadata = {
  title: 'وب سرویس اطلاعات کشورها | صفحه اصلی',
};

export default function HomePage() {
  return (
    <>
      <HeroText />
      <SiteDescriptions />
    </>
  );
}
