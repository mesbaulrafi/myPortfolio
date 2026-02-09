import React, { useState, useEffect } from 'react';
import Images from '../Images';
import Logo from '/src/assets/Logo.png';
import Container from '../Container'; 
import { FaAnglesRight } from "react-icons/fa6";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll track korar jonno logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

  // Menu item style variable
  const navLinkStyle = "text-base text-white hover:text-[#00BCD4] relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#00BCD4] after:transition-all after:duration-300 hover:after:w-full cursor-pointer transition-all duration-300";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0b1b28]/95 py-3 shadow-xl backdrop-blur-sm' : 'bg-transparent py-6'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo Part */}
          <div className="w-[150px]">
            <Images imgSrc={Logo} />
          </div>

          {/* Nav Items - Desktop */}
          <div className="hidden lg:block">
            <ul className='flex items-center gap-x-8 font-medium uppercase tracking-wide'>
              <li className={`${navLinkStyle} text-[#00BCD4]`}>Home</li>
              <li className={navLinkStyle}>About</li>
              <li className={navLinkStyle}>Services</li>
              <li className={navLinkStyle}>Resume</li>
              <li className={navLinkStyle}>Projects</li>
              <li className={navLinkStyle}>Contact</li>
            </ul>
          </div>

          {/* Hire Me Button */}
          <div>
            <button className='flex items-center gap-x-2 text-[#00BCD4] font-bold py-2.5 px-6 bg-white rounded-md hover:bg-[#00BCD4] hover:text-white transition-all duration-300 shadow-md'>
              Hire Me! <FaAnglesRight className='text-sm' />
            </button>
          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Header;