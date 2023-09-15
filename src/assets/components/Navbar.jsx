import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
    // Fonction pour masquer ou afficher la navbar
    const toggleNavbar = () => {
      setIsNavbarVisible(!isNavbarVisible);
    };
  
    return (
      <nav className={`justify-between items-center bg-transparent text-secondary p-4 fixed top-0 w-full z-10 ${isNavbarVisible ? 'flex' : 'hidden'}`}>
        {/* ... contenu de la navbar ... */}
        <button onClick={toggleNavbar}>Toggle Navbar</button>
        <ul className="h-full w-full flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="font-montserrat leading-normal text-lg text-secondary hover:animate-pulse">{item.label}</a>
                </li>
            ))}
        </ul>
      </nav>
    );
  };

export default Navbar