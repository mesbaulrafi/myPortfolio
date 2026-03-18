import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Images from '../Images';
import Logo from '/src/assets/Logo.png';
import { FaAnglesRight } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navRef = useRef(null);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect screen size — 1024px breakpoint
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // desktop এ গেলে menu বন্ধ
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Active link style
  const navLinkStyle = ({ isActive }) =>
    [
      'text-base font-medium uppercase tracking-wide transition-all duration-300 relative inline-block',
      "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-[#00BCD4] after:transition-all after:duration-300",
      isActive
        ? 'text-[#00BCD4] after:w-full'
        : 'text-white hover:text-[#00BCD4] after:w-0 hover:after:w-full',
    ].join(' ');

  return (
    <nav
      ref={navRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}
      className={`transition-all duration-500 ${
        scrolled ? 'bg-[#0b1b28] py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px' }}>

        {/* Top Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <div>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Images imgSrc={Logo} className="object-contain h-[50px] lg:h-[60px]" />
            </Link>
          </div>

          {/* Desktop Nav  */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <NavLink to="/" className={navLinkStyle}>Home</NavLink>
              <NavLink to="/about" className={navLinkStyle}>About</NavLink>
              <NavLink to="/services" className={navLinkStyle}>Services</NavLink>
              <NavLink to="/resume" className={navLinkStyle}>Resume</NavLink>
              <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
              <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
            </div>
          )}

          {/* Hire Me */}
          {!isMobile && (
            <Link to="/contact">
              <button className="flex items-center gap-x-2 text-[#00BCD4] font-bold py-2.5 px-6 bg-white rounded-md hover:bg-[#00BCD4] hover:text-white transition-all duration-300 shadow-md">
                Hire Me! <FaAnglesRight className="text-sm" />
              </button>
            </Link>
          )}

          {/* Hamburger — for mobile & tablet*/}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              style={{
                fontSize: '28px',
                background: 'none',
                border: 'none',
                padding: '6px',
                cursor: 'pointer',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: 'black',
              }}
            >
              {isOpen ? <FiAlignJustify /> : <FiAlignJustify />}
            </button>
          )}
        </div>

        {/* Mobile Dropdown */}
        {isMobile && (
          <div
            style={{
              maxHeight: isOpen ? '500px' : '0px',
              opacity: isOpen ? 1 : 0,
              overflow: 'hidden',
              pointerEvents: isOpen ? 'auto' : 'none',
              transition: 'max-height 0.5s ease, opacity 0.4s ease',
            }}
          >
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              marginTop: '12px',
              paddingTop: '16px',
              paddingBottom: '20px',
              backgroundColor: '#0b1b28',
            }}>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}>
                <li><NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyle}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkStyle}>About</NavLink></li>
                <li><NavLink to="/services" onClick={() => setIsOpen(false)} className={navLinkStyle}>Services</NavLink></li>
                <li><NavLink to="/resume" onClick={() => setIsOpen(false)} className={navLinkStyle}>Resume</NavLink></li>
                <li><NavLink to="/projects" onClick={() => setIsOpen(false)} className={navLinkStyle}>Projects</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className={navLinkStyle}>Contact</NavLink></li>
                <li style={{ marginTop: '8px' }}>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <button className="flex items-center gap-x-2 bg-[#00BCD4] text-white font-bold py-2.5 px-8 rounded-md hover:bg-white hover:text-[#00BCD4] transition-all duration-300">
                      Hire Me! <FaAnglesRight className="text-sm" />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Header;