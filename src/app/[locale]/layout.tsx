import type { Metadata } from "next";
import type { Locale } from "next-intl";

import { Analytics } from "@vercel/analytics/react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import Footer from "@/components/parts/Footer/Footer";
import Header from "@/components/parts/Header/Header";
import ScrollToTop from "@/components/parts/ScrollToTop/ScrollToTop";
import { getDirection } from "@/i18n/getDirection";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/store/theme-provider";
import { SupabaseProvider } from "@/supabase/SupabaseProvider";

const yekanMedium = localFont({
  src: "../../../src/assets/fonts/iranyekanwebmediumfanum.woff",
  variable: "--font-medium",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  const direction = getDirection(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      dir={direction}
      lang={locale}
      className={`${roboto.variable} ${yekanMedium.variable}`}
    >
      <head>
        <link href="/logo.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "flex flex-col min-h-dvh justify-between text-base/loose",
          locale === "fa" && "font-YekanMedium",
          locale !== "fa" && "font-roboto",
        )}
      >
        <SupabaseProvider>
          <NextIntlClientProvider>
            <ThemeProvider enableSystem attribute="class" defaultTheme="system">
              <Header />
              <main className="my-16 container">{children}</main>
              <Analytics />
              <ScrollToTop />
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
