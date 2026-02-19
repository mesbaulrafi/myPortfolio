import React from "react";
import Images from "./Images";
import { Link } from "react-router-dom";
import { FaLink, FaGithub } from "react-icons/fa";

const ProjectsCard = ({
  ProjectsImg,
  ProjectsTitle,
  ProjectsText,
  ProjectsTools,
  ProjectsToolsTow,
  ProjectsLink,
}) => {
  return (
    <>
    {/* Project Card  */}
      <div className="">
        <div className="group bg-[#17171c] rounded-xl overflow-hidden border border-gray-800  transition hover:-translate-y-2 duration-300">
          <div className="relative overflow-hidden">
            <Images
              imgSrc={ProjectsImg}
              className={
                "w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              }
            />
            <div className="">
              <ul className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <Link to={ProjectsLink}>
                  <li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#3fc1c9] hover:bg-[#000000]">
                    <FaLink />
                  </li>
                </Link>
                <Link to={"https://github.com/mesbaulrafi"}>
                  <li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#3fc1c9] hover:bg-[#000000]">
                    <FaGithub />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {ProjectsTitle}
            </h2>
            <p className="text-gray-400 text-sm mb-4">{ProjectsText}</p>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-gray-800 rounded text-[#3fc1c9]">
                {ProjectsTools}
              </span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded text-[#3fc1c9]">
                {ProjectsToolsTow}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
