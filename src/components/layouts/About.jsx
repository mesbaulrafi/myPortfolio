import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Tools from "./Tools";

// Relative paths used for images
import Android from "../../assets/android.png";
import AngularLogo from "../../assets/Angular.png";
import Bootstrap from "../../assets/bootstrap.png";
import Vue from "../../assets/vue.png";
import ReactLogo from "../../assets/reactLogo.png";
import Mongodb from "../../assets/mongodb.png";
import Laravel from "../../assets/laravel.png";
import Node from "../../assets/nodejs.png";

const socialLinks = [
  { Icon: FaGithub, link: "https://github.com/mesbaulrafi" },
  { Icon: FaTwitter, link: "https://twitter.com/mesbaulrafi" },
  { Icon: FaLinkedinIn, link: "https://linkedin.com/in/mesbaulrafi" },
];

const About = () => {
  return (
    <section className="bg-[#09090b] py-24 text-zinc-300 border-b border-zinc-800/50 font-sans">
      <div className="w-full max-w-[1140px] mx-auto px-5 lg:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6">
            Transforming Ideas Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
              Digital Experiences
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Side: Bio & Socials */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-zinc-100">
                Hi, I'm Mesbaul Haque Rafi
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                I am a passionate Front-End Developer with a strong focus on building responsive, accessible, and highly performant web applications. I enjoy turning complex problems into simple, beautiful, and intuitive interface designs using modern web technologies like React, Next.js, and Tailwind CSS.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-sm"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Info Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              {/* Changed from "Personal Details" to "Quick Facts" */}
              <h4 className="text-lg font-semibold text-zinc-100 mb-6 border-b border-zinc-800 pb-3">
                Quick Facts
              </h4>
              <ul className="space-y-5">
                <li className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-zinc-200 font-medium">Dhaka, Bangladesh</span>
                </li>
                <li className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-zinc-500">Email</span>
                  <a href="mailto:mesbaulrafi@gmail.com" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                    mesbaulrafi@gmail.com
                  </a>
                </li>
                {/* <li className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-zinc-500">Phone</span>
                  <a href="tel:+8801789618818" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                    +880 1789618818
                  </a>
                </li> */}
                <li className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-zinc-500">Languages</span>
                  <span className="text-zinc-200 font-medium">Bengali, English, Hindi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack / Tools Section */}
        <div className="pt-10 border-t border-zinc-800/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-zinc-100">My Tech Stack</h3>
            <p className="text-zinc-500 mt-2">Technologies I've been working with</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Tools toolsImg={Android} toolsTitle="Android" ToolsText="1 Year Experience" />
            <Tools toolsImg={AngularLogo} toolsTitle="Angular" ToolsText="1 Year Experience" />
            <Tools 
              toolsImg={ReactLogo} 
              toolsTitle="React" 
              ToolsText="1 Year Experience" 
              className="animate-[spin_8s_linear_infinite]" 
            />
            <Tools toolsImg={Bootstrap} toolsTitle="Bootstrap" ToolsText="1 Year Experience" />
            <Tools toolsImg={Vue} toolsTitle="Vue" ToolsText="1 Year Experience" />
            <Tools toolsImg={Mongodb} toolsTitle="Mongodb" ToolsText="1 Year Experience" />
            <Tools toolsImg={Laravel} toolsTitle="Laravel" ToolsText="1 Year Experience" />
            <Tools toolsImg={Node} toolsTitle="Node.js" ToolsText="1 Year Experience" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;