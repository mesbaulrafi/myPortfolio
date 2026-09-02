import React, { useState } from "react";
import Images from "../Images";

// Relative paths used for images
import EducationIMG from "../../assets/education.png";
import ExperienceIMG from "../../assets/experience.png";

const experienceItems = [
  {
    value: "exp-1",
    title: "Creative IT Institute (Intern)",
    period: "2025 - Present",
    description: "Delivered high-quality code by applying industry-standard web development practices and building responsive user interfaces.",
    location: "4th Floor, Momtaz Plaza, House#7 Road 4, Dhaka 1205",
    tags: ["HTML", "CSS", "React", "JavaScript"],
    defaultOpen: true,
  },
  {
    value: "exp-2",
    title: "Freelance Frontend Developer",
    period: "2024 - 2025",
    description: "Developed and maintained highly responsive portfolio websites and web applications for local clients.",
    location: "Remote",
    tags: ["Next.js", "Tailwind CSS"],
    defaultOpen: false,
  },
];

const educationItems = [
  {
    value: "edu-1",
    title: "BBA in Business Administration",
    period: "2023 - Present",
    description: "Currently pursuing my Bachelor of Business Administration (BBA) at Govt. Edward College, Pabna. Successfully completed 3 years of the academic program.",
    location: "Govt. Edward College, Pabna",
    tags: [],
    defaultOpen: true,
  },
  {
    value: "edu-2",
    title: "Higher Secondary Certificate (HSC)",
    period: "2020 - 2022",
    description: "Successfully completed my Higher Secondary Certificate (HSC) in Business Studies (Commerce).",
    location: "Satbaria Degree College, Pabna",
    tags: [],
    defaultOpen: false,
  },
  {
    value: "edu-3",
    title: "Secondary School Certificate (SSC)",
    period: "2010 - 2020",
    description: "Successfully completed my Secondary School Certificate (SSC) in Business Studies (Commerce).",
    location: "Satbaria High School, Pabna",
    tags: [],
    defaultOpen: false,
  },
];

function TimelineAccordion({ items }) {
  const [openItem, setOpenItem] = useState(
    items.find((i) => i.defaultOpen)?.value || null
  );

  const toggle = (value) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <div className="flex flex-col w-full">
      {items.map((item) => {
        const isOpen = openItem === item.value;
        return (
          <div
            key={item.value}
            className="border-b border-[#252d3d] last:border-none mb-2"
          >
            {/* Accordion Header */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => toggle(item.value)}
            >
              <div className="flex items-center gap-4">
                <div className={`text-2xl font-light w-6 text-center transition-colors ${isOpen ? "text-[#69C380]" : "text-white"}`}>
                  {isOpen ? "—" : "+"}
                </div>
                <span className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? "text-[#69C380]" : "text-white"}`}>
                  {item.title}
                </span>
              </div>
              <span className="text-sm text-[#8B9CB7] mt-2 sm:mt-0 ml-10 sm:ml-0">
                {item.period}
              </span>
            </div>

            {/* Accordion Content */}
            {isOpen && (item.description || item.location || item.tags.length > 0) && (
              <div className="pl-10 pr-4 pb-6">
                {item.description && (
                  <p className="text-[#8B9CB7] leading-relaxed mb-3">
                    {item.description}
                  </p>
                )}
                {item.location && (
                  <p className="text-[#8B9CB7] text-sm mb-4">
                    {item.location}
                  </p>
                )}
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1b1b21] border border-[#252d3d] text-[#D4DBE5] px-3 py-1 rounded text-xs tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SectionCard({ icon, label, items }) {
  return (
    <div className="flex flex-col lg:flex-row bg-[#16161b] rounded-lg overflow-hidden mb-8 border border-[#252d3d]">
      {/* Left side: Icon (made larger) and Horizontal Text */}
      <div className="bg-[#13181f] lg:w-48 flex flex-col py-8 px-6 border-r border-[#252d3d] items-center justify-center hidden lg:flex shrink-0 gap-4">
        <div className="w-16 h-16">
          {icon}
        </div>
        <span className="text-lg font-semibold text-white tracking-wider text-center">
          {label}
        </span>
      </div>
      
      {/* Right side: Accordion */}
      <div className="w-full p-6 lg:p-10">
        <TimelineAccordion items={items} />
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <section className="py-24 bg-[#121217] text-white font-sans">
      <div className="w-full max-w-[1140px] px-5 lg:px-0 mx-auto">
        
        {/* Header section */}
        <div className="text-center pb-12 lg:pb-16 px-4">
          <h5 className="text-[#69C380] bg-[#69c37f1f] inline-block px-3 py-1 rounded text-sm uppercase tracking-wider mb-4">
            LIFE TIME
          </h5>
          <h3 className="text-3xl md:text-4xl py-2 font-bold mb-4">
            Education & Experience
          </h3>
          <p className="max-w-[550px] mx-auto text-[#D4DBE5] text-base md:text-lg">
            A timeline of my academic background and professional journey in web development.
          </p>
        </div>

        {/* Content Box */}
        <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
          <SectionCard
            label="Experience"
            items={experienceItems}
            icon={<Images imgSrc={ExperienceIMG} className="w-full h-full object-contain opacity-80" />}
          />

          <SectionCard
            label="Education"
            items={educationItems}
            icon={<Images imgSrc={EducationIMG} className="w-full h-full object-contain opacity-80" />}
          />
        </div>

      </div>
    </section>
  );
}