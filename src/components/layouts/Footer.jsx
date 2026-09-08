import React from "react";
import { Link } from "react-router-dom"; 
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import { FiFacebook, FiTwitter, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#101011] text-zinc-300 font-sans border-t border-zinc-900 pt-16 pb-12">
      <div className="w-full max-w-[1140px] px-5 lg:px-0 mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 pb-12 border-b border-zinc-800/60">
          
          {/* Logo & Description Section */}
          <div className="w-full md:w-[40%] flex flex-col items-start">
            <Link to="/" className="mb-4">
              <Images imgSrc={Logo} className="w-[45px] object-contain" />
            </Link>
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-sm mb-6">
              Crafting exceptional and user-centric digital experiences with modern web technologies. Let's build something great together.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-zinc-400">
              <a href="https://github.com/mesbaulrafi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors">
                <FiGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors">
                <FiLinkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Footer Menu Section */}
          <div className="w-full md:w-[50%] grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-zinc-100 text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="text-zinc-400 hover:text-zinc-100 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-zinc-400 hover:text-zinc-100 transition-colors">About</Link></li>
                <li><Link to="/services" className="text-zinc-400 hover:text-zinc-100 transition-colors">Services</Link></li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h4 className="font-semibold text-zinc-100 text-sm uppercase tracking-wider mb-4">Portfolio</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* More info Column */}
            <div>
              <h4 className="font-semibold text-zinc-100 text-sm uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="text-zinc-400 hover:text-zinc-100 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/" className="text-zinc-400 hover:text-zinc-100 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Mesbaul Haque Rafi. All rights reserved.</p>
          <p>Designed & Built with React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;