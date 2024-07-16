import Header from "./components/header";
import About from "./components/about";
import style from "./styles.module.css";
import Starscape from "./ui/Starscape";

export default function Home() {
  return (
    <main>
        <Starscape densityRatio={.3} defaultAlpha={.1} proximityRatio={.25}/>
        <Header />
    </main>
  );
}
