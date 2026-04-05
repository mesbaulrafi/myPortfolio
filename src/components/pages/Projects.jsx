import React from "react";
import Container from "../Container";
import Images from "../Images";

import { FaArrowRight } from "react-icons/fa";
import CitWeb from "/src/assets/CitWeb.png";
import Orabi from "/src/assets/orebi.png";
import Uomo from "/src/assets/uomo.png";
import Planto from "/src/assets/planto.png";
import Agency from "/src/assets/agency.png";
import Finance from "/src/assets/finance.png";
import { Link } from "react-router-dom";
import { FaLink, FaGithub } from "react-icons/fa";
import ProjectsCard from "../ProjectsCard";
import Button from "../Button";

const Projects = () => {
  return (
    <div className="py-24 bg-[#121217] text-white font-sans">
      <div className="lg:w-[1140px] px-3 lg:px-0 mx-auto">
        {/* Project Text Part */}
        <div className="text-center pb-16 px-4">
          <h5 className="text-[#69C380] bg-[#69c37f1f] inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[2px] mb-4">
            Work
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="max-w-[650px] mx-auto text-[#D4DBE5] text-sm md:text-base leading-relaxed">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning .
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-7">
            {/* Project One */}
            <ProjectsCard ProjectsImg={CitWeb} ProjectsTitle={'Creative-web'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://creative-web-six.vercel.app/'}
            RepoLink={'https://github.com/mesbaulrafi/creativeWeb'}/>
            {/* Project Two */}
            <ProjectsCard ProjectsImg={Orabi} ProjectsTitle={'Orabi '} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://orebi-iota-mocha.vercel.app/'}
            RepoLink={'https://github.com/mesbaulrafi/orebi'}/>
            {/* Project Three */}
            <ProjectsCard ProjectsImg={Planto} ProjectsTitle={'Planto'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://planto-wine.vercel.app/'}
            RepoLink={'https://github.com/mesbaulrafi/planto'}/>
            {/* Project Four */}
            <ProjectsCard ProjectsImg={Uomo} ProjectsTitle={'Uomo E-commerce'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'Next.Js'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://uomo.vercel.app/'}
            RepoLink={'https://github.com/mesbaulrafi/uomo'}/>
            {/* Project Five */}
            <ProjectsCard ProjectsImg={Agency} ProjectsTitle={'Agency'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://innovate-react-ten.vercel.app/'}
            RepoLink={'https://github.com/mesbaulrafi/innovateReact'}/>
            {/* Project Six */}
            <ProjectsCard ProjectsImg={Finance} ProjectsTitle={'Finance'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://mesbaulrafi.github.io/mobailFinance/'}
            RepoLink={'https://github.com/mesbaulrafi/mobailFinance'}/>
        </div>
        <Button btnText={'View All'} className={'bg-[#00BCD4] text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#00BCD4] transition-all duration-300 mt-10 '}/>
      </div>
    </div>
  );
};

export default Projects;
