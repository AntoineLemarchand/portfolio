import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Starscape from "./ui/Starscape";
import { i18n, Locale } from "@/i18n-config";
import content from '@/app/content'

export default function Home() {

  const browserLang = navigator.language.split("-")[0];
  const locale: Locale = i18n.locales.includes(browserLang as Locale) ? browserLang as Locale : 'en'
  const localizedContent = content[locale]

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
