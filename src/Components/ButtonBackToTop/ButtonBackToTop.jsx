import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import '../ButtonBackToTop/ButtonBackToTop.css'

function ButtonBackToTop() {

   const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  

  return (
    <>
    {showButton && (
        <button id="btn-back-to-top"
        title="Ir a inicio"
        onClick={scrollToTop}>
           🡹
        </button>
        
      )}
</>
  )
  
}

export default ButtonBackToTop