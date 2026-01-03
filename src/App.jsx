import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <>
    <div className="flex-center h-[100vh]">
     <h1 className="text-3xl text-green-600">HI this my first react page thank you </h1>
     </div>
    </>
  )
}

export default App
