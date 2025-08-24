'use client'
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { i18n, Locale } from "@/i18n-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale}>
      <head>
        <title>Antoine Lemarchand</title>
        <meta name="description" content="My portfolio"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

