import type { Metadata } from "next";

import Footer from "@/components/parts/Footer/Footer";

import "./globals.css";

import Header from "@/components/parts/Header/Header";
import { ThemeProvider } from "@/store/theme-provider";
import { SupabaseProvider } from "@/supabase/SupabaseProvider";
import { Analytics } from "@vercel/analytics/react";
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
    "دریافت اطلاعات جامع از کشورها و شهرهای آن‌ها به صورت چندزبانه از جمله فارسی و انگلیسی، شامل نام، پرچم، کدهای ISO2 و ISO3.",
  openGraph: {
    title: "وب سرویس اطلاعات کشورها",
    description:
      "دریافت اطلاعات کشورها و شهرها به صورت چندزبانه از جمله فارسی و انگلیسی، شامل نام، پرچم، کدهای ISO2 و ISO3.",
    url: process.env.NEXT_PUBLIC_DOMAIN_URL ?? "",
    siteName: "وبسایت اطلاعات کشورها",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/world-logo.png`,
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
    "شهرها",
    "چندزبانه",
    "فارسی",
    "انگلیسی",
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
        className={`flex flex-col min-h-dvh justify-between text-base/loose ${yekanMedium.variable} ${yekanBold.variable} ${yekanExtraBold.variable}`}
      >
        <SupabaseProvider>
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            <Header />
            <div className="my-16 container">
              {children}
              <Analytics />
            </div>
            <Footer />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
