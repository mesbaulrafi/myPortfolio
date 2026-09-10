import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Images from '../Images';
import Logo from '/src/assets/Logo.png';
import { FaAnglesRight } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50 py-3 shadow-lg' 
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-5 lg:px-0">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="relative z-50">
            <Images imgSrc={Logo} className="object-contain h-10 lg:h-[45px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm lg:text-base font-medium transition-colors duration-300 py-1 ${
                    isActive ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                  {/* Moving Border Animation (Strictly Horizontal) */}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-nav-underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-zinc-100 rounded-full"
                      initial={false}
                      transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.3
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Me Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="flex items-center gap-2 bg-zinc-100 text-zinc-950 font-semibold py-2 px-5 rounded-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300 text-sm">
                Hire Me <FaAnglesRight className="text-xs" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 text-zinc-300 hover:text-white p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <IoCloseSharp size={28} /> : <FiAlignJustify size={26} />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800/50 transition-all duration-400 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <nav className="flex flex-col items-center gap-6 px-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2 w-full max-w-[200px]">
              <button className="w-full flex justify-center items-center gap-2 bg-zinc-100 text-zinc-950 font-semibold py-3 px-5 rounded-lg hover:bg-white transition-all duration-300 text-sm">
                Hire Me <FaAnglesRight className="text-xs" />
              </button>
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;