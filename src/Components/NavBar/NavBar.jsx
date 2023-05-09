import React from "react";
import {Navbar, MobileNav, Typography, IconButton} from "@material-tailwind/react";
import Logo from '../../Assets/Pictures/Logo.svg'
import LogIn from '../../Assets/Pictures/LogInICON.svg'
import { Link, animateScroll as scroll } from "react-scroll";

 
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h5"
        color="black"
        className="p-1 font-normal"
      >
        <Link 
        className="flex items-center cursor-pointer" 
        activeClass="active" 
        to="" 
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        >
          Inicio
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="h5"
        color="black"
        className="p-1 font-normal"
      >
          <Link 
        className="flex items-center cursor-pointer" 
        activeClass="active" 
        to="Colabora" 
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        >
          Colabora
        </Link>
        
      </Typography>

      <Typography
        as="li"
        variant="h5"
        color="black"
        className="p-1 font-normal"
      >
        <Link 
        className="flex items-center cursor-pointer" 
        activeClass="active" 
        to="QuienesSomos" 
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        >
          Quiénes somos
        </Link>
        
      </Typography>

      <Typography
        as="li"
        variant="h5"
        color="black"
        className="p-1 font-normal"
      >
        <Link 
        className="flex items-center cursor-pointer" 
        activeClass="active" 
        to="UltimasNoticias" 
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        >
          Últimas noticias
        </Link>
        
      </Typography>

      <Typography
        as="li"
        variant="h5"
        color="black"
        className="p-1 font-normal"
      >
        <Link 
        className="flex items-center cursor-pointer" 
        activeClass="active" 
        to="NuestroViaje" 
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        >
          Nuestro viaje
        </Link>
        
      </Typography>

      <a href="#"><img 
      className="mt-1 mr-4 h-10 cursor-pointer "
      src={LogIn}
      alt="LogInICON"
        /></a>
    </ul>
  );
 
  return (
    <>
      <Navbar className="relative shadow-none inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-start justify-between text-blue-gray-900">
          <a href="#"><img 
      className="mr-4 h-28 cursor-pointer "
      src={Logo}
      alt="Logo"
      
        /></a>
          
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>

            
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
      
    </>
  );
}