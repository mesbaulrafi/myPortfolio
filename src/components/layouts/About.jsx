import React from "react";
import Container from "../Container";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa6";




const About = () => {
  return (
    <div className="bg-[#1E1E1E] py-25">
      <Container>
        <div className="flex justify-between">
        {/* About Text part Left*/}
        <div className="w-[450px]">
          <h4 className="bg-[#FFC835] text-2xl inline-block">Personal Details</h4>
          <p className="pt-2 text-[20px]">
            It is a long established fact that a reader will be distracted
          </p>
          <p className="pb-6 text-[20px]">
            by the readable content of a page when looking at its layout.
          </p>
          {/* Icon Part */}
          <div className="flex gap-4">
            <i className="p-2 bg-transparent border border-white rounded-2xl"><FaGithub /></i>
            <i className="p-2 bg-transparent border border-white rounded-2xl"><FaTwitter /></i>
            <i className="p-2 bg-transparent border border-white rounded-2xl"><FaTwitter /></i>
            <i className="p-2 bg-transparent border border-white rounded-2xl"><LiaGoogle /></i>
            <i className="p-2 bg-transparent border border-white rounded-2xl"><FaTwitter /></i>
            <i className="p-2 bg-transparent border border-white rounded-2xl"><FaLinkedinIn /></i>
          </div>
        </div>
        {/* Text R */}
        <div className="flex items-center ">
          
          <div className="">
            <p className="pb-2.5">Date of birth </p>
          <p className="pb-2.5">Spoken Langages </p>
          <p className="pb-2.5">Nationality </p>
          <p className="pb-2.5">Interest </p>
          </div>
          <div className="">
            <span>:</span> <p className="pb-2.5">06 june 1989</p>
          <span>:</span> <p className="pb-2.5">English - French - German</p>
          <span>:</span> <p className="pb-2.5">USA</p>
          <span>:</span> <p className="pb-2.5">Music, Reading, journey</p>
          </div> 
        </div>
      </div>
      </Container>
    </div>
  );
};

export default About;
