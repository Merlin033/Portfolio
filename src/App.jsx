import Navbar from "./assets/components/Navbar"
import Apropos from "./assets/sections/Apropos"
import Contact from "./assets/sections/Contact"
import Home from "./assets/sections/Home"
import Skills from "./assets/sections/Skills"

export default function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Apropos />
    <Skills />
    <Contact />
    </>
  )
}