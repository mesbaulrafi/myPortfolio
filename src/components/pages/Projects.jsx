import React from "react";
import Container from "../Container";
import Images from "../Images";

import { FaArrowRight } from "react-icons/fa";
import Orabi from "/src/assets/orebi.png";
import Agency from "/src/assets/agency.png";
import Finance from "/src/assets/finance.png";
import { Link } from "react-router-dom";
import { FaLink, FaGithub } from "react-icons/fa";
import ProjectsCard from "../ProjectsCard";

const Projects = () => {
  return (
    <div className="py-24 bg-[#121217] text-white font-sans">
      <Container>
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
        <div className="flex items-center justify-between gap-7">
            {/* Project One */}
            <ProjectsCard ProjectsImg={Orabi} ProjectsTitle={'E-commerce'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://orebi-iota-mocha.vercel.app/'}/>
            {/* Project Two */}
            <ProjectsCard ProjectsImg={Agency} ProjectsTitle={'Agency'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://innovate-react-ten.vercel.app/'}/>
            {/* Project Three */}
            <ProjectsCard ProjectsImg={Finance} ProjectsTitle={'Finance'} ProjectsText={'A complete dashboard built using React, Tailwind CSS,.'} ProjectsTools={'React'} ProjectsToolsTow={'Tailwind'} ProjectsLink={'https://mesbaulrafi.github.io/mobailFinance/'}/>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
