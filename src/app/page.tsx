import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بلاگ",
  description: "این یک صفحه بلاگ درباره آموزش‌های Next.js است.",
  openGraph: {
    title: "بلاگ",
    description: "همه چیز درباره Next.js را در بلاگ ما یاد بگیرید.",
    url: "https://yourwebsite.com/blog",
    siteName: "وبسایت شما",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "تصویر اوپن گراف بلاگ",
      },
    ],
    locale: "fa_IR", // تنظیم زبان فارسی
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div>
      <p className="font-bold">سلام</p>
      <p className="font-medium">سلام</p>
      <p className="font-extrabold">سلام</p>
    </div>
  );
}
