import React from "react";
import Container from "../Container";

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
      </Container>
    </div>
  );
};

export default Projects;
