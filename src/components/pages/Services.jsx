import React from "react";
import Container from "../Container";
import Images from "../Images";
import Awesome from "/src/assets/Awesome.png";
import Dolar from "/src/assets/dolarLogo.png";
import Right from "/src/assets/right.png";

const Services = () => {
  return (
    <div className="py-25 bg-[#16161b] text-white">
      <Container>
        <div>
          {/* Services Header Text */}
          <div className="text-center pb-12 lg:pb-18 px-4">
            <h5 className="text-[#69C380] bg-[#69c37f1f] inline-block px-3 py-1 rounded text-sm uppercase tracking-wider">
              Services
            </h5>
            <h3 className="text-3xl md:text-4xl py-4 font-bold">
              Our Services
            </h3>
            <p className="max-w-[550px] mx-auto text-[#D4DBE5] text-base md:text-lg">
              We craft digital, graphic and dimensional thinking, to create
              category leading brand experiences that have meaning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Awesome Support Card */}
            <div className="bg-[#1b1b21] p-8 rounded-lg  ">
              <div className="mb-6 inline-block">
                <Images imgSrc={Awesome} className="w-12 h-12 object-contain" />
              </div>
              <h4 className="text-xl font-semibold mb-4 ">Awesome Support</h4>
              <p className="text-[#8B9CB7] leading-relaxed">
                Some quick example text to build on the card title and make up
                the bulk of the card's content platform.
              </p>
            </div>
            {/* Dynamic Growth Card */}
            <div className="bg-[#1b1b21] p-8 rounded-lg ">
              <div className="mb-6 inline-block">
                <Images imgSrc={Dolar} className="w-12 h-12 object-contain" />
              </div>
              <h4 className="text-xl font-semibold mb-4 ">Dynamic Growth</h4>
              <p className="text-[#8B9CB7] leading-relaxed">
                Credibly brand standards compliant users without extensible
                services. Anibh euismod tincidunt.
              </p>
            </div>
            {/* Branding Identity Card */}
            <div className="bg-[#1b1b21] p-8 rounded-lg ">
              <div className="mb-6 inline-block">
                <Images imgSrc={Right} className="w-12 h-12 object-contain" />
              </div>
              <h4 className="text-xl font-semibold mb-4 ">Branding Identity</h4>
              <p className="text-[#8B9CB7] leading-relaxed">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, and large.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
