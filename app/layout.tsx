import { Inter } from "next/font/google";
import React from "react";
import { i18n, Locale } from "@/i18n-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLocaleProvider({ children }: { children: React.ReactNode }) {

  const browserLang = navigator.language.split("-")[0];
  let locale = i18n.locales.includes(browserLang as Locale) ? browserLang : 'en'

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

