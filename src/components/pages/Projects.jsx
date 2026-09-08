import React from "react";
import Container from "../Container";
import Images from "../Images";

import CitWeb from "/src/assets/CitWeb.png";
import Orabi from "/src/assets/orebi.png";
import Uomo from "/src/assets/uomo.png";
import Planto from "/src/assets/planto.png";
import Agency from "/src/assets/agency.png";
import Finance from "/src/assets/finance.png";
import { Link } from "react-router-dom";
import ProjectsCard from "../ProjectsCard";
import Button from "../Button";

const Projects = () => {
  return (
    <section className="bg-[#09090b] py-20 lg:py-24 relative overflow-hidden font-sans border-b border-zinc-800/50">
      
      {/* Subtle background glow for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[1140px] px-5 lg:px-0 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center pb-12 lg:pb-16 px-4 flex flex-col items-center">
          
          {/* Minimalist Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Portfolio
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 mb-5">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Projects</span>
          </h2>
          
          <p className="max-w-[600px] mx-auto text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            A selection of my recent frontend development work, showcasing functional interfaces built with React, Next.js, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8">
            
            {/* Project One */}
            <ProjectsCard 
              ProjectsImg={CitWeb} 
              ProjectsTitle={'Creative-web'} 
              ProjectsText={'A complete web application built using React and Tailwind CSS.'} 
              ProjectsTools={'React'} 
              ProjectsToolsTow={'Tailwind'} 
              ProjectsLink={'https://creative-web-six.vercel.app/'}
              RepoLink={'https://github.com/mesbaulrafi/creativeWeb'}
            />
            
            {/* Project Two */}
            <ProjectsCard 
              ProjectsImg={Orabi} 
              ProjectsTitle={'Orebi'} 
              ProjectsText={'A responsive e-commerce interface built using React and Tailwind CSS.'} 
              ProjectsTools={'React'} 
              ProjectsToolsTow={'Tailwind'} 
              ProjectsLink={'https://orebi-iota-mocha.vercel.app/'}
              RepoLink={'https://github.com/mesbaulrafi/orebi'}
            />
            
            {/* Project Three */}
            <ProjectsCard 
              ProjectsImg={Planto} 
              ProjectsTitle={'Planto'} 
              ProjectsText={'A modern UI dashboard built using React and Tailwind CSS.'} 
              ProjectsTools={'React'} 
              ProjectsToolsTow={'Tailwind'} 
              ProjectsLink={'https://planto-wine.vercel.app/'}
              RepoLink={'https://github.com/mesbaulrafi/planto'}
            />
            
            {/* Project Four */}
            <ProjectsCard 
              ProjectsImg={Uomo} 
              ProjectsTitle={'Uomo E-commerce'} 
              ProjectsText={'A scalable e-commerce platform built using Next.js and Tailwind CSS.'} 
              ProjectsTools={'Next.Js'} 
              ProjectsToolsTow={'Tailwind'} 
              ProjectsLink={'https://uomo.vercel.app/'}
              RepoLink={'https://github.com/mesbaulrafi/uomo'}
            />
            
            {/* Project Five */}
            <ProjectsCard 
              ProjectsImg={Agency} 
              ProjectsTitle={'Agency'} 
              ProjectsText={'A creative agency landing page built using React and Tailwind CSS.'} 
              ProjectsTools={'React'} 
              ProjectsToolsTow={'Tailwind'} 
              ProjectsLink={'https://innovate-react-ten.vercel.app/'}
              RepoLink={'https://github.com/mesbaulrafi/innovateReact'}
            />
            
            {/* Project Six */}
            <ProjectsCard 
              ProjectsImg={Finance} 
              ProjectsTitle={'Finance'} 
              ProjectsText={'A mobile-first financial dashboard built using React and Tailwind CSS.'} 
              ProjectsTools={'React'} 
              ProjectsToolsTow={'Tailwind'} 
              ProjectsLink={'https://mesbaulrafi.github.io/mobailFinance/'}
              RepoLink={'https://github.com/mesbaulrafi/mobailFinance'}
            />
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Link to={'https://github.com/mesbaulrafi'}>
            <Button 
              btnText={'View All on GitHub'} 
              className="bg-zinc-100 text-zinc-950 font-semibold px-8 py-3.5 rounded-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            />
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;