import { useState } from "react";

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
    // Fonction pour masquer ou afficher la navbar
    const toggleNavbar = () => {
      setIsNavbarVisible(!isNavbarVisible);
    };
  
    return (
      <nav className={`bg-primary text-secondary p-4 fixed top-0 w-full z-10 ${isNavbarVisible ? 'block' : 'hidden'}`}>
        {/* ... contenu de la navbar ... */}
        <button onClick={toggleNavbar}>Toggle Navbar</button>
      </nav>
    );
  };

export default Navbar