import React from "react";
import Images from "../Images";
import ImportBG from "/src/assets/inputeBG.png";
import Container from "../Container";
import Button from "../Button";

const Input = () => {
  return (
    <div className="bg-[url('/src/assets/inputeBG.png')] bg-no-repeat bg-center bg-cover py-25">
        <Container>
            <div className="flex items-center ">
                {/* Input Text */}
                <div className="pr-13 py-5">
                    <h4 className="text-3xl pb-2">I Am Available For Freelancer.</h4>
                    <p className="text-[#8B9CB7] text-base">Browse hundreds of job offers and find the bestsuitable position.</p>
                </div>
                {/* Input Btn */}
                <div className="bg-[#121216] p-5 rounded-lg">
                    <input type="email" name="" id="" placeholder="Email Address" className="pr-65 outline-0" />
                     <Button btnText={'Send Massage'} className={'bg-white text-black'}/>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Input;
