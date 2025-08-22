import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

import { Analytics } from '@vercel/analytics/react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

import Footer from '@/components/parts/Footer/Footer';
import Header from '@/components/parts/Header/Header';
import ScrollToTop from '@/components/parts/ScrollToTop/ScrollToTop';
import { getDirection } from '@/i18n/getDirection';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/store/theme-provider';
import { SupabaseProvider } from '@/supabase/SupabaseProvider';

const yekanMedium = localFont({
  src: [
    {
      path: '../../../src/assets/fonts/iranyekanwebregularfanum.woff',
      weight: '400',
    },
    {
      path: '../../../src/assets/fonts/iranyekanwebmediumfanum.woff',
      weight: '500',
    },
    {
      path: '../../../src/assets/fonts/iranyekanwebboldfanum.woff',
      weight: '700',
    },
    {
      path: '../../../src/assets/fonts/iranyekanwebblackfanum.woff',
      weight: '900',
    },
  ],
  display: 'swap',
  variable: '--font-yekan',
});

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('mainTitle'),
    description: t('layout.description'),
    openGraph: {
      title: t('mainTitle'),
      description: t('layout.openGraph.description'),
      siteName: t('layout.openGraph.siteName'),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ''}/world-logo.png`,
          width: 1200,
          height: 630,
          alt: t('layout.openGraph.imageAlt'),
        },
      ],
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
      type: 'website',
    },
    keywords: t('layout.keywords').split(','),
  };
}

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
          'flex min-h-dvh flex-col justify-between text-base/loose',
          locale === 'fa' && 'font-yekan',
          locale !== 'fa' && 'font-roboto',
        )}
      >
        <SupabaseProvider>
          <NextIntlClientProvider>
            <ThemeProvider enableSystem attribute="class" defaultTheme="system">
              <Header />
              <main className="container my-16">{children}</main>
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
