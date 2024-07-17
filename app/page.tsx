import Header from "./components/header";
import About from "./components/about";
import Starscape from "./ui/Starscape";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
        <Starscape densityRatio={.3} defaultAlpha={.1} proximityRatio={.25}/>
        <Header />
        <About />
    </main>
  );
}
