import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <main>
      <Navbar/>
      <Hero />
    </main>
  )
}

export default App
