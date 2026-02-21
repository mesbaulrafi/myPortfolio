import React from "react";
import Container from "../Container";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";





const Footer = () => {
  return (
    <>
      <div className="bg-[#172d51] py-25">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo & Text */}
            <div className="w-[437px] ">
              <Images imgSrc={Logo} className={'w-[70px]'}/>
              <p className="text-lg opacity-40 py-6">
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
              <div className="flex items-center gap-x-2 text-lg opacity-40">
                <i><FiFacebook /></i>
                <i><FiTwitter /></i>
                <i><FiGithub /></i>
                <i><FiInstagram /></i>
              </div>
            </div>
            {/* Footer Menu */}
            <div className=""></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
