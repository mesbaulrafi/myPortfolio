import React from "react";
import Images from "../Images";
import Man from "/src/assets/rafi.webp";
import Button from "../Button";
import { Typewriter } from 'react-simple-typewriter'; 

const Banner = () => {
  return (
    <section className="bg-[#09090b] min-h-[90vh] flex items-center justify-center relative overflow-hidden font-sans border-b border-zinc-800/50 pt-24 lg:pt-0 pb-16 lg:pb-0">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

      <div className="w-full max-w-[1140px] mx-auto mt-19 px-5 lg:px-0 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Content (Text) */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 my-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-zinc-300">Available for work</span>
            </div>

            {/* Name - Reduced Size */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-tight mb-3">
              Mesbaul Haque <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Rafi</span>
            </h1>

            {/* Typewriter */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-400 mb-5 h-[35px]">
              I'm a <span className="text-white">
                <Typewriter
                  words={['Front-End Developer', 'React Specialist', 'Web Engineer']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>

            {/* Description - Adjusted Spacing */}
            <p className="text-zinc-400 text-base lg:text-lg max-w-[480px] mb-8 leading-relaxed font-light">
              Crafting pixel-perfect, responsive, and highly performant web applications using modern technologies like React, Next.js, and Tailwind CSS.
            </p>

            {/* Button */}
            <a href="/public/MesbaulRafi.pdf" download={'Resume-MesbaulRafi'}>
              <Button 
                btnText={"Download Resume"}  
                className="bg-zinc-100 text-zinc-950 font-semibold px-8 py-3 rounded-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
              />
            </a>
          </div>

          {/* Right Content (Image) - No Box, No Border */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-8 lg:mt-20">
            <div className="w-full max-w-[350px] lg:max-w-[450px]">
              <Images 
                imgSrc={Man} 
                imgAlt="Mesbaul Haque Rafi" 
                // Images components e jeno kono default border na thake. 
                // Shudu shadow dewa hoyeche jate dark background e valo fute othe.
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(255,255,255,0.03)]" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;