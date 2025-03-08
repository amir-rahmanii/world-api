import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`${yekanMedium.variable} ${yekanBold.variable} ${yekanExtraBold.variable}`}
      >
        <div className="container font-medium">{children}</div>
      </body>
    </html>
  );
}
