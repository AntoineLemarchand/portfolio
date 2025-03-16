import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, Locale } from "@/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoine Lemarchand",
  description: "Antoine Lemarchand's personal website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale, }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  return (
    <html lang={params.lang}>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
