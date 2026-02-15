import React from "react";
import Container from "../Container";
import Images from "../Images";
import Android from "/src/assets/android.png"



const Tools = ({toolsImg,toolsTitle,ToolsText}) => {
  return (
    <div className="">
      
        <div className="bg-[#17171C] p-6 w-60 flex items-center rounded-sm">
          <div className="">
            <Images imgSrc={toolsImg} className={'pr-4'}/>
            </div>
          <div className="">
            <h4 className="">{toolsTitle}</h4>
            <p className="">{ToolsText}</p>
          </div>
        </div>
      
    </div>
  );
};

export default Tools;
