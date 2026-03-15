import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import Images from '../Images';
import Logo from '/src/assets/Logo.png';
import { FaAnglesRight } from "react-icons/fa6";
import { FiAlignJustify, FiX } from "react-icons/fi";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  // Scroll korar jonno logic
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
  }, []); // Performance-er jonno dependency array 

  // Active Link dynamic style
  const navLinkStyle = ({ isActive }) => 
    `text-base font-medium uppercase tracking-wide transition-all duration-300 relative inline-block 
    after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-[#00BCD4] after:transition-all after:duration-300 
    ${isActive ? 'text-[#00BCD4] after:w-full' : 'text-white hover:text-[#00BCD4] after:w-0 hover:after:w-full'}`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0b1b28]/95 py-4 shadow-xl backdrop-blur-sm' : 'bg-transparent py-6'
    }`}>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 lg:px-0'>
        <div className="flex items-center justify-between">
          
          {/* Logo Part */}
          <div className="w-[120px] lg:w-[150px]">
            <Link to="/">
              <Images imgSrc={Logo} className={'h-[50px] lg:h-[70px] object-contain'}/>
            </Link>
          </div>

          {/* Desktop Nav Items (hidden on mobile) */}
          <div className="hidden md:block">
            <ul className='flex items-center gap-x-8 font-medium uppercase tracking-wide'>
              <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
              <li><NavLink to="/services" className={navLinkStyle}>Services</NavLink></li>
              <li><NavLink to="/resume" className={navLinkStyle}>Resume</NavLink></li>
              <li><NavLink to="/projects" className={navLinkStyle}>Projects</NavLink></li>
              <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Hire Me Button (Desktop) */}
          <div className="hidden sm:block">
            <Link to="/contact">
              <button className='flex items-center gap-x-2 text-[#00BCD4] font-bold py-2 px-5 md:py-2.5 lg:px-6 bg-white rounded-md hover:bg-[#00BCD4] hover:text-white transition-all duration-300 shadow-md'>
                Hire Me! <FaAnglesRight className='text-sm' />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <div className="lg:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiAlignJustify className='text-black'/>}
          </div>

        </div>

        {/* Mobile Sidebar / Dropdown */}
        <div className={`lg:hidden fixed left-0 top-[80px] w-full bg-[#0b1b28] border-t border-gray-800 z-40 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className='flex flex-col items-center gap-y-5 py-6'>
            <li><NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkStyle}>About</NavLink></li>
            <li><NavLink to="/services" onClick={() => setIsOpen(false)} className={navLinkStyle}>Services</NavLink></li>
            <li><NavLink to="/resume" onClick={() => setIsOpen(false)} className={navLinkStyle}>Resume</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setIsOpen(false)} className={navLinkStyle}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className={navLinkStyle}>Contact</NavLink></li>
            <li className="sm:hidden mt-2">
               <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className='bg-[#00BCD4] text-white py-2 px-6 rounded-md font-bold'>Hire Me!</button>
               </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;