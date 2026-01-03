import { navLinks } from "../../constants"
import { useGSAP } from "@gsap/react"
const Navbar = () => {
useGSAP(()=>{
    
})

  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo"/>
                <p>
                    Velvet Pour
                </p>
            </a>

            <ul>
               {navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
               ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar