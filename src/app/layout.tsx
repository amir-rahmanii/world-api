import type { Metadata } from "next";

import Header from "@/components/parts/Header/Header";

import "./globals.css";

import { ThemeProvider } from "@/store/theme-provider";
import localFont from "next/font/local";

const yekanMedium = localFont({
  src: "../../src/fonts/iranyekanwebmediumfanum.woff",
  variable: "--font-medium",
  display: "swap",
});

const yekanBold = localFont({
  src: "../../src/fonts/iranyekanwebboldfanum.woff",
  variable: "--font-bold",
  display: "swap",
});

const yekanExtraBold = localFont({
  src: "../../src/fonts/iranyekanwebextraboldfanum.woff",
  variable: "--font-extrabold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها",
  description:
    "وب سرویس اطلاعات کشورها به صورت دو زبانه فارسی و انگلیسی، شامل نام کشور، پرچم، کدهای ISO2 و ISO3 با استفاده از API Key، توسعه داده شده با Next.js برای توسعه‌دهندگان و پروژه‌های جهانی.",
  openGraph: {
    title: "وب سرویس اطلاعات کشورها",
    description:
      "وب سرویس اطلاعات کشورها به صورت دو زبانه فارسی و انگلیسی، شامل نام کشور، پرچم، کدهای ISO2 و ISO3 با استفاده از API Key، توسعه داده شده با Next.js برای توسعه‌دهندگان و پروژه‌های جهانی.",
    url: "https://yourwebsite.com/countries",
    siteName: "وبسایت شما",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "تصویر اوپن گراف وب سرویس کشورها",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  keywords: [
    "وب سرویس",
    "API کشورها",
    "اطلاعات کشورها",
    "پرچم کشورها",
    "ISO2",
    "ISO3",
    "کشورها",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <head>
        <link href="/logo.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body
        className={`${yekanMedium.variable} ${yekanBold.variable} ${yekanExtraBold.variable}`}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <Header />
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
