import React from "react";
import Container from "../Container";
import Button from "../Button";

const Input = () => {
  return (
    <div className="bg-[url('/src/assets/inputeBG.png')] bg-no-repeat bg-center bg-cover py-16 md:py-25">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* Input Text Section */}
          <div className="text-center lg:text-left lg:pr-13">
            <h4 className="text-2xl md:text-3xl pb-2 font-semibold">
              I Am Available For Freelancer.
            </h4>
            <p className="text-[#8B9CB7] text-sm md:text-base">
              Browse hundreds of job offers and find the best suitable position.
            </p>
          </div>

          {/* Input & Button Section */}
          <div className="bg-[#121216] p-3 md:p-5 rounded-lg flex flex-col sm:flex-row items-center w-full lg:w-auto gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-white px-4 py-2 w-full sm:w-64 md:w-80 outline-none"
            />
            <Button 
              btnText={'Send Message'} 
              className={'bg-white text-black w-full sm:w-auto px-6 py-2 rounded-md font-medium'}
            />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Input;