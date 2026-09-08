import React from "react";
import Button from "../Button";

const Input = () => {
  return (
    <section className="bg-[#09090b] py-20 lg:py-24 relative overflow-hidden font-sans border-b border-zinc-800/50">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="w-full max-w-[1140px] mx-auto px-5 lg:px-0 relative z-10">
        
        {/* Premium Glass/Card Wrapper */}
        <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 md:p-12 lg:p-16 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Hire Me</span>
            </div>
            
            <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
              Available For <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Freelance Work</span>
            </h4>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              Let's build something amazing together. Drop your email below to start a conversation about your next project.
            </p>
          </div>

          {/* Input & Action Button */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-64 md:w-80 bg-[#09090b]/80 border border-zinc-800 text-zinc-300 px-5 py-3.5 rounded-lg outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 shadow-inner"
            />
            <Button 
              btnText={'Send Message'} 
              className="w-full sm:w-auto bg-zinc-100 text-zinc-950 font-medium px-10 py-0.5 rounded-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Input;