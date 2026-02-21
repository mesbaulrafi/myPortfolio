import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import ErrorImg from "/src/assets/404-Error.jpg";
import Images from "../Images";

const Error = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden z-50">
      {/* Image Section */}
      <Images 
        imgSrc={ErrorImg} 
        className="h-full w-full object-cover sm:object-fill" 
      />

      {/* Button Section - Centered using absolute positioning */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex justify-center">
        <Link
          to="/"
          className="flex items-center gap-x-2 bg-[#00BCD4] text-[#1c252e] font-bold px-6 py-3 rounded shadow-lg hover:bg-[#00acc1] transition-all"
        >
          <FaHome className="text-xl" />
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;