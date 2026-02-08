import React from "react";
import Images from "../Images";
import Man from "/src/assets/man.png";
import Button from "../Button";
import Container from "../Container"; // Spelling check: Conteinar

const Benner = () => {
  return (
    // 'min-h-screen' use kora hoyeche jate puruta screen cover kore
    // 'pt-32' dewa hoyeche jate Header-er niche content thake
    <div className="bg-[url('/src/assets/bennerBg.png')] bg-center bg-cover bg-no-repeat min-h-screen flex items-center pt-32 lg:pt-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Images Part */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="max-w-[500px]">
               <Images imgSrc={Man} imgAlt="Man image" />
            </div>
          </div>

          {/* Banner Text Part */}
          <div className="w-full lg:w-[500px] text-center  mt-10 lg:mt-0 ">
            <h5 className="text-[#8B9CB7] text-[20px] font-medium mb-4">
              Hi, I'm David Williamson
            </h5>
            <h1 className="text-white text-[40px] md:text-[54px] lg:text-[64px] font-bold leading-tight mb-8">
              I'm a freelance <span className="text-[#00BCD4] border-b-4 border-yellow-400">React</span> Developer
            </h1>
            <Button 
              btnText={"Download CV"}  
              className="bg-[#00BCD4] text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#00BCD4] transition-all duration-300"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benner;