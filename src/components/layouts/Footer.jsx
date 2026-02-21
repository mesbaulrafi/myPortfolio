import React from "react";
import { Link } from "react-router-dom"; // Link import kora hoyeche
import Container from "../Container";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import { FiFacebook, FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#172d51] py-25 text-white">
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo & Description Section */}
          <div className="w-1/2">
            <Link to="/">
              <Images imgSrc={Logo} className={"w-[70px]"} />
            </Link>
            <p className="w-[437px] text-lg opacity-40 py-6">
              In an ideal world this text wouldn’t exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <div className="flex items-center gap-x-3.5 text-lg opacity-40">
              <Link to="/"><i><FiFacebook /></i></Link>
              <Link to="/"><i><FiTwitter /></i></Link>
              <Link to="/"><i><FiGithub /></i></Link>
              <Link to="/"><i><FiInstagram /></i></Link>
            </div>
          </div>

          {/* Footer Menu Section */}
          <div className="w-1/2 flex items-center justify-between">
            
            {/* Company Column */}
            <div>
              <ul>
                <li className="pb-6 font-medium text-xl underline decoration-transparent">Company</li>
                <li className="text-lg opacity-40 pb-3"><Link to="/">Home</Link></li>
                <li className="text-lg opacity-40 pb-3"><Link to="/about">About</Link></li>
                <li className="text-lg opacity-40"><Link to="/services">Services</Link></li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <ul>
                <li className="pb-6 font-medium text-xl">Information</li>
                <li className="text-lg opacity-40 pb-3"><Link to="/resume">Resume</Link></li>
                <li className="text-lg opacity-40 pb-3"><Link to="/client-say">Client Say</Link></li>
                <li className="text-lg opacity-40"><Link to="/projects">Projects</Link></li>
              </ul>
            </div>

            {/* More info Column */}
            <div>
              <ul>
                <li className="pb-6 font-medium text-xl">More info</li>
                <li className="text-lg opacity-40 pb-3"><Link to="/blogs">Blogs</Link></li>
                <li className="text-lg opacity-40 pb-3"><Link to="/contact">Contact</Link></li>
                <li className="text-lg opacity-40"><Link to="/terms">Terms & condition</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;