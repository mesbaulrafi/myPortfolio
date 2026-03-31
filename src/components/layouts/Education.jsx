import { useState } from "react";
import Images from "../Images";
import EducationIMG from "/src/assets/education.png";
import ExperienceIMG from "/src/assets/experience.png";

const educationItems = [
  {
    value: "edu-1",
    title: " BBA in Business Administratioin",
    period: "2023 ",
    description:
      " Running student of BBA in Business Asdministration at Govt Edward Collage Pabna. Ihave Complete 3 year of my BBA Course.",
    location: "Govt Edward Collage Pabna",
    tags: [],
    defaultOpen: true,
  },
  {
    value: "edu-2",
    title: "HSC College complete course",
    period: "2020 - 2022",
    description:
      "I Have Complete My HSC Course From Satbaria Degree Collage Pabna With Commerce Group . ",
    location: "",
    tags: [],
    defaultOpen: false,
  },
  {
    value: "edu-3",
    title: "High / Higher secondary School",
    period: "2010 - 2020",
    description:
      " I Have Commplete My SSC Course From Satbaria High School Pabna With Commerce Group .",
    location: "",
    tags: [],
    defaultOpen: false,
  },
];

const experienceItems = [
  {
    value: "exp-1",
    title: "Creative IT Institute (Intran)",
    period: "2025",
    description:
      "· Delivered quality code by applying the best development practices",
    location: " 4th Floor, Momtaz Plaza, House#7 Road 4, Dhaka 1205",
    tags: ["Html", "CSS", "REACT", "JavaScript"],
    defaultOpen: true,
  },
  {
    value: "exp-2",
    title: "DEF Themes - Creative full stack web design & development",
    period: "2025 - 2026",
    description: "",
    location: "",
    tags: [],
    defaultOpen: false,
  },
  {
    value: "exp-3",
    title: "GHI Themes - Web & App IT Company",
    period: "2025 - 2026",
    description: "",
    location: "",
    tags: [],
    defaultOpen: false,
  },
];

function TimelineAccordion({ items }) {
  const [openItem, setOpenItem] = useState(
    items.find((i) => i.defaultOpen)?.value || null,
  );

  const toggle = (value) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <div className="flex flex-col ">
      {items.map((item) => {
        const isOpen = openItem === item.value;
        return (
          <div
            key={item.value}
            className={`timeline-item ${isOpen ? "open" : ""}`}
          >
            <div className="timeline-header" onClick={() => toggle(item.value)}>
              <div className="timeline-icon">{isOpen ? "—" : "+"}</div>
              <span className="timeline-title">{item.title}</span>
              <span className="timeline-period">{item.period}</span>
            </div>
            {isOpen &&
              (item.description || item.location || item.tags.length > 0) && (
                <div className="timeline-content">
                  {item.description && (
                    <p className="timeline-desc">{item.description}</p>
                  )}
                  {item.location && (
                    <p className="timeline-location">{item.location}</p>
                  )}
                  {item.tags.length > 0 && (
                    <div className="timeline-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
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
    <div className="section-card">
      <div className="bg-[#13181f] lg:max-w-40 items-center lg:flex-col pt-[70px] px-10 border-r border-[#252d3d] justify-center hidden lg:block">
        <div className="section-icon">{icon }</div>
        <span className="section-label">{label}</span>
      </div>
      <div className="section-right">
        <TimelineAccordion items={items} />
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <>
      <div className="py-24 bg-[#121217] text-white">
        <div className="lg:w-[1140px] px-3 lg:px-0 mx-auto ">
          <div className="text-center pb-10 lg:pb-10 px-4 ">
            <h5 className="text-[#69C380] bg-[#69c37f1f] inline-block px-3 py-1 rounded text-sm uppercase tracking-wider">
              LIFE TIME
            </h5>
            <h3 className="text-3xl md:text-4xl py-4 font-bold">
              Education & Experience
            </h3>
            <p className="max-w-[550px] mx-auto text-[#D4DBE5] text-base md:text-lg">
              We craft digital, graphic and dimensional thinking, to create
              category leading brand experiences that have meaning.
            </p>
          </div>
          <div className="flex flex-col gap-6  max-w-[820px] pt-20 mx-auto">
            <SectionCard
              label="Education"
              items={educationItems}
              icon={<Images imgSrc={EducationIMG} />}
            />

            <SectionCard
              label="Experience"
              items={experienceItems}
              icon={<Images imgSrc={ExperienceIMG} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
