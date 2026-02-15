import React from "react";
import Container from "../Container";
import Images from "../Images";
import Android from "/src/assets/android.png"



const Tools = () => {
  return (
    <div className="">
      <Container>
        <div className="bg-[#17171C] w-20 flex">
          <div className="">
            <Images imgSrc={Android} />
            </div>
          <div className="">
            <h4 className="">Android</h4>
            <p className="">2 Year Experience</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
