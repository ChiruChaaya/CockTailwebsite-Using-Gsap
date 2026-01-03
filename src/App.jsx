import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cocktails from "./component/Cocktails";
import About from "./component/About";
import Art from "./component/Art";

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Cocktails/>
      <About/>
      <Art/>
    </main>
  )
}

export default App
