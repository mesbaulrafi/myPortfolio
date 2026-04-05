import React from "react";
import Container from "../Container";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import Tools from "./Tools";
// Logo Images
import Android from "/src/assets/android.png";
import AngularLogo from "/src/assets/Angular.png"
import Bootstrap from "/src/assets/bootstrap.png";
import Vue from "/src/assets/vue.png";
import ReactLogo from "/src/assets/reactLogo.png";
import Mongodb from "/src/assets/mongodb.png";
import Laravel from "/src/assets/laravel.png";
import Node from "/src/assets/nodejs.png";

const socialLinks = [
        { Icon: FaGithub, link: "https://github.com/mesbaulrafi" },
        { Icon: FaTwitter, link: "https://twitter.com/mesbaulrafi" },
        { Icon: LiaGoogle, link: "mailto:your-email@gmail.com" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com/in/mesbaulrafi" },
    ];

const About = () => {
    return (
        <div className="bg-[#121216] py-20 text-white">
            <div className="lg:w-[1140px] px-3 lg:px-0 mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-start gap-y-10">
                    {/* Left Side: About Text */}
                    <div className="">
                        <h4 className="bg-[#FFC835] text-black px-2 py-1 text-xl font-bold inline-block mb-6">
                            Personal Details
                        </h4>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </p>
                        {/* Social Icons - Circle Style */}
                        <div className="flex gap-4">
                            {socialLinks.map((item, i) => (
                                <a 
                                    key={i} 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition-all cursor-pointer text-gray-400 hover:text-white"
                                >
                                    <item.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Side: Info Table */}
                    <div className="flex gap-x-10">
                        <div className="text-gray-300 space-y-3 text-sm lg:text-lg">
                            <p>Date of birth</p>
                            <p>Spoken Languages</p>
                            <p>Nationality</p>
                        </div>
                        <div className="text-gray-400 space-y-3 text-sm lg:text-lg">
                            <p><span className="mr-2 lg:mr-6">:</span> 27 Dec 2004</p>
                            <p><span className="mr-2 lg:mr-6">:</span> English - Hindi</p>
                            <p><span className="mr-2 lg:mr-6">:</span> Bangladeshi</p>
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mt-20">
                    {/* First Row */}
                    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-5">
                        <Tools toolsImg={Android} toolsTitle='Android' ToolsText='2 Year Experience' />
                        <Tools toolsImg={AngularLogo} toolsTitle='Angular' ToolsText='1 Year Experience' />
                        <Tools toolsImg={ReactLogo} toolsTitle='React' ToolsText='1 Year Experience' className={'animate-[spin_8s_linear_infinite]'} />
                        <Tools toolsImg={Bootstrap} toolsTitle='Bootstrap' ToolsText='3 Year Experience' />
                    </div>

                    {/* Second Row _ Centered */}
                    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
                        <Tools toolsImg={Vue} toolsTitle='Vue' ToolsText='2 Year Experience' />
                        <Tools toolsImg={Mongodb} toolsTitle='Mongodb' ToolsText='3 Months Experience' />
                        <Tools toolsImg={Laravel} toolsTitle='Laravel' ToolsText='1 Year Experience' />
                        <Tools toolsImg={Node} toolsTitle='Node.js' ToolsText='1 Year Experience' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
