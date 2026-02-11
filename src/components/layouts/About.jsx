import React from "react";
import Container from "../Container";

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
          <div className="">
            
          </div>
        </div>
        <div className="">
          <p className="">Date of birth : <span>06 june 1989</span></p>
          <p className="">Date of birth : <span>06 june 1989</span></p>
          <p className="">Date of birth : <span>06 june 1989</span></p>
          <p className="">Date of birth : <span>06 june 1989</span></p>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default About;
