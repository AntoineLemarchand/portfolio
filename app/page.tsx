import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Starscape from "./ui/Starscape";
import { getLocalizedContent } from "./LocalizedContent";

export default function Home() {

    const content = getLocalizedContent()

  return (
    <main className="flex flex-col justify-center">
        <Starscape densityRatio={.3} defaultAlpha={.1} proximityRatio={.25}/>
        <Header content={content} />
        <About content={content} />
        <Projects content={content} />
        <Contact content={content} />
    </main>
  );
}
