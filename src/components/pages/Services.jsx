import React from "react";
import Images from "../Images";

// Relative paths used for images
import Awesome from "../../assets/Awesome.png";
import Dolar from "../../assets/dolarLogo.png";
import Right from "../../assets/right.png";

const Services = () => {
  return (
    <section className="bg-[#09090b] py-24 text-zinc-300 border-b border-zinc-800/50 font-sans">
      <div className="w-full max-w-[1140px] mx-auto px-5 lg:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6">
            What I Can Do For You
          </h2>
          <p className="max-w-[600px] mx-auto text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            I specialize in building high-quality, scalable, and responsive web applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Service 1: Frontend Development */}
          <div className="group bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm shadow-xl hover:-translate-y-2 hover:border-emerald-500/50 transition-all duration-300">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
              <Images imgSrc={Awesome} className="w-8 h-8 object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">
              Frontend Development
            </h4>
            <p className="text-zinc-400 leading-relaxed font-light">
              Building scalable and interactive user interfaces using React.js and Next.js to create seamless, modern web experiences.
            </p>
          </div>

          {/* Service 2: Responsive Design */}
          <div className="group bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm shadow-xl hover:-translate-y-2 hover:border-emerald-500/50 transition-all duration-300">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
              <Images imgSrc={Dolar} className="w-8 h-8 object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">
              Responsive Design
            </h4>
            <p className="text-zinc-400 leading-relaxed font-light">
              Ensuring your website looks and functions perfectly across all devices and screen sizes using Tailwind CSS and mobile-first principles.
            </p>
          </div>

          {/* Service 3: Performance Optimization */}
          <div className="group bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm shadow-xl hover:-translate-y-2 hover:border-emerald-500/50 transition-all duration-300">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
              <Images imgSrc={Right} className="w-8 h-8 object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">
              Performance Optimization
            </h4>
            <p className="text-zinc-400 leading-relaxed font-light">
              Enhancing website speed, clean code architecture, and Core Web Vitals to provide a fast and accessible experience for users.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;