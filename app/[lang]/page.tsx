import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Starscape from "./ui/Starscape";

import content from "./content.json";

export default async function Home(props: {params: Promise<{lang: string}>}) {
  const params = await props.params;
  const localizedContent = content[params.lang];

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
