'use client'
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Starscape from "./ui/Starscape";
import { useEffect, useState } from "react";
import { i18n, Locale } from "@/i18n-config";

export default function Home() {
  const [locale, setLocale] = useState<'en' | 'fr'>(i18n.defaultLocale);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (i18n.locales.includes(browserLang as Locale)) {
      setLocale(browserLang as typeof i18n.locales[number]);
    }
    import("./content.json").then((json) => setContent(json));
  }, []);

  const localizedContent = content && content[locale]

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
