import React from "react";
import Container from "../Container";
import Images from "../Images";
import Android from "/src/assets/android.png"



const Tools = ({toolsImg,toolsTitle,ToolsText,className}) => {
  return (
    <div className="">
      
        <div className="bg-[#17171C] p-6 w-60 flex items-center rounded-sm">
          <div className={``}>
            <Images imgSrc={toolsImg} className={`${className}`}/>
            </div>
          <div className="pl-4">
            <h4 className="">{toolsTitle}</h4>
            <p className="">{ToolsText}</p>
          </div>
        </div>
      
    </div>
  );
};

export default Tools;
