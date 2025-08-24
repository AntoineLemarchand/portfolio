'use client'
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Starscape from "./ui/Starscape";
import { i18n, Locale } from "@/i18n-config";
import content from '@/app/content'
import { useEffect, useState } from "react";

export default function Home() {

  const [localizedContent, setLocalizedContent] = useState(content.en);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const detectedLocale: Locale = i18n.locales.includes(browserLang as Locale)
      ? (browserLang as Locale)
      : 'en';
    setLocalizedContent(content[detectedLocale]);
  }, []);


  return (
    <main className="flex flex-col justify-center">
        <Starscape densityRatio={.3} defaultAlpha={.1} proximityRatio={.25}/>
        <Header content={localizedContent} />
        <About content={localizedContent} />
        <Projects content={localizedContent} />
        <Contact content={localizedContent} />
    </main>
  );
}
