'use client'
import React, { useEffect, useState } from "react";
import { i18n, Locale } from "@/i18n-config";
import "./globals.css";

import localFont from "next/font/local"

const delicious = localFont({
  variable: '--font-delicious',
  preload: false,
  src: [
    {
      path: '../public/fonts/DeliciousHandrawn-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
  ]
})

const geo = localFont({
  variable: '--font-geo',
  preload: false,
  src: [
    {
      path: '../public/fonts/Geo/Geo-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Geo/Geo-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
  ]
})

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
    <html lang={locale} className={`${[delicious.variable, geo.variable].filter(Boolean).join(' ')} scroll-smooth relative`}>
      <head>
        <title>Antoine Lemarchand</title>
        <meta name="description" content="My portfolio"/>
      </head>
      <body>{children}</body>
    </html>
  );
}

