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
        {/* About Text part */}
        <div className="">
          <h4 className="">Personal Details</h4>
          <p className="">
            It is a long established fact that a reader will be distracted
          </p>
          <p className="">
            by the readable content of a page when looking at its layout.
          </p>
          {/* Icon Part */}
          <div className="flex gap-4">
            <i><FaGithub /></i>
            <i><FaTwitter /></i>
            <i><LiaGoogle /></i>
            <i><FaLinkedinIn /></i>
          </div>
        </div>
        {/* Text R */}
        <div className="">
          <p className="">Date of birth : <span>06 june 1989</span></p>
          <p className="">Spoken Langages : <span>English - French - German</span></p>
          <p className="">Nationality : <span>USA</span></p>
          <p className="">Interest : <span>Music, Reading, journey</span></p>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default About;
