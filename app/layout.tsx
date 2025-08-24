'use client'
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { i18n, Locale } from "@/i18n-config";
import "./globals.css";
import { getLocale } from "./LocalizedContent";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLocaleProvider({ children }: { children: React.ReactNode }) {

  const [locale, setLocale] = useState<'en' | 'fr'>(i18n.defaultLocale);

  useEffect(() => {
    setLocale(getLocale())
  }, []);

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

