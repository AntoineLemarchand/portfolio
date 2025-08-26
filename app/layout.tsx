'use client'
import { Geo, Inter, Michroma } from "next/font/google";
import React, { useEffect, useState } from "react";
import { i18n, Locale } from "@/i18n-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const geo = Geo({ subsets: ["latin"], weight: ['400'], variable: '--font-geo' })

export default function ClientLocaleProvider({ children }: { children: React.ReactNode }) {

  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (i18n.locales.includes(browserLang as Locale)) {
      setLocale(browserLang as Locale);
    }
    document.documentElement.lang = locale; // update <html lang="">
  }, [locale]);

  return (
    <html lang={locale} className={`${inter.variable} ${geo.variable} scroll-smooth`}>
      <head>
        <title>Antoine Lemarchand</title>
        <meta name="description" content="My portfolio"/>
      </head>
      <body>{children}</body>
    </html>
  );
}

