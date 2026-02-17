import React from "react";
import Container from "../Container";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import Tools from "./Tools";
// Logo Images 
import Android from "/src/assets/android.png";
import Angular from "/src/assets/angular.png";
import Bootstrap from "/src/assets/bootstrap.png";
import Vue from "/src/assets/vue.png";
import ReactLogo from "/src/assets/reactLogo.png";
import Mongodb from "/src/assets/mongodb.png";
import Laravel from "/src/assets/laravel.png";
import Node from "/src/assets/nodejs.png";





const About = () => {
  return (
    <div className="bg-[#121216] py-20 text-white"> 
      <Container>
        <div className="flex justify-between items-start">
          {/* Left Side: About Text */}
          <div className="w-[45%]">
            <h4 className="bg-[#FFC835] text-black px-2 py-1 text-xl font-bold inline-block mb-6">
              Personal Details
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </p>
            
            {/* Social Icons - Circle Style */}
            <div className="flex gap-4">
              {[FaGithub, FaTwitter, LiaGoogle, FaLinkedinIn].map((Icon, i) => (
                <div key={i} className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition-all cursor-pointer text-gray-400 hover:text-white">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Info Table */}
          <div className="w-[45%] flex gap-x-10 text-lg">
            <div className="text-gray-300 space-y-3">
              <p>Date of birth</p>
              <p>Spoken Languages</p>
              <p>Nationality</p>
              <p>Interest</p>
            </div>
            <div className="text-gray-400 space-y-3">
              <p><span className="mr-6">:</span> 06 june 1989</p>
              <p><span className="mr-6">:</span> English - French - German</p>
              <p><span className="mr-6">:</span> USA</p>
              <p><span className="mr-6">:</span> Music, Reading, journey</p>
            </div>
          </div>
        </div>

        {/* Tools Section  */}
        <div className="mt-20">
          {/* First Row */}
          <div className="flex items-center h-[180px] gap-4 mb-5">
            <Tools toolsImg={Android} toolsTitle='Android' ToolsText='2 Year Experience'/>
            <Tools toolsImg={Angular} toolsTitle='Angular' ToolsText='1 Year Experience'/>
            <Tools toolsImg={ReactLogo} toolsTitle='React' ToolsText='1 Year Experience'className={'animate-[spin_10s_linear_infinite]'}/>
            <Tools toolsImg={Bootstrap} toolsTitle='Bootstrap' ToolsText='3 Year Experience'/>
            <Tools toolsImg={Vue} toolsTitle='Vue' ToolsText='2 Year Experience'/>
          </div>
          
          {/* Second Row - Centered */}
          <div className="flex justify-center gap-4">
            <Tools toolsImg={Mongodb} toolsTitle='Mongodb' ToolsText='3 Months Experience'/>
            <Tools toolsImg={Laravel} toolsTitle='Laravel' ToolsText='1 Year Experience'/>
            <Tools toolsImg={Node} toolsTitle='Node.js' ToolsText='1 Year Experience'/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;