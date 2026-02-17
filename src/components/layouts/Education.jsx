import React from "react";
import Container from "../Container";
import Images from "../Images";
import EducationImg from "/src/assets/education.png";
import ExperienceImg from "/src/assets/experience.png";

const Education = () => {
  return (
    <div className="py-24 bg-[#121217] text-white font-sans">
      <Container>
        {/* --- Header Section --- */}
        <div className="text-center pb-16 px-4">
          <h5 className="text-[#69C380] bg-[#69c37f1f] inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[2px] mb-4">
            Life Time
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & Experience
          </h2>
          <p className="max-w-[650px] mx-auto text-[#D4DBE5] text-sm md:text-base leading-relaxed">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning.
          </p>
        </div>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          
          {/* --- Education Section --- */}
          <div className="flex flex-col md:flex-row bg-[#1b1b21] rounded-sm border border-[#2e2e3550]">
            {/* Left Side: Icon & Title */}
            <div className="w-full md:w-1/3 bg-[#16161c] flex flex-col items-center justify-center p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#2e2e3550]">
              <Images imgSrc={EducationImg} className="w-24 md:w-32 mb-6" />
              <h4 className="text-2xl font-bold">Education</h4>
            </div>

            {/* Right Side: Info List */}
            <div className="w-full md:w-2/3 flex flex-col">
              {/* Item 1 */}
              <div className="p-6 md:p-8 border-b border-[#2e2e3550]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <h5 className="text-lg font-semibold text-gray-200">— MSc IT Master Degree</h5>
                  <span className="text-[#3fc1c9] font-mono text-sm">2010 - 2012</span>
                </div>
                <div className="sm:pl-8">
                  <p className="text-[#8B9CB7] text-sm mb-3 leading-relaxed">
                    Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.
                  </p>
                  <p className="text-white text-sm font-semibold italic">Harvard University, Cambridge, MA, United States</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center p-5 md:px-8 border-b border-[#2e2e3550] text-gray-400">
                <h5 className="text-sm md:text-base">+ BCA college complete course</h5>
                <span className="text-[#3fc1c9] font-mono text-sm">2007 - 2010</span>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center p-5 md:px-8 text-gray-400">
                <h5 className="text-sm md:text-base">+ High / Higher secondary school</h5>
                <span className="text-[#3fc1c9] font-mono text-sm">1999 - 2007</span>
              </div>
            </div>
          </div>

          {/* --- Experience Section --- */}
          <div className="flex flex-col md:flex-row bg-[#1b1b21] rounded-sm border border-[#2e2e3550]">
            {/* Left Side */}
            <div className="w-full md:w-1/3 bg-[#16161c] flex flex-col items-center justify-center p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#2e2e3550]">
              <Images imgSrc={ExperienceImg} className="w-24 md:w-32 mb-6" />
              <h4 className="text-2xl font-bold">Experience</h4>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-2/3 flex flex-col">
              {/* Experience Item 1 */}
              <div className="p-6 md:p-8 border-b border-[#2e2e3550]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <h5 className="text-lg font-semibold text-gray-200">— ABC themes - Web Design IT Company</h5>
                  <span className="text-[#3fc1c9] font-mono text-sm">2020 - 2021</span>
                </div>
                <div className="sm:pl-8">
                  <p className="text-[#8B9CB7] text-sm mb-2 italic">- Delivered quality code by applying the best development practices</p>
                  <p className="text-white text-xs md:text-sm font-bold mb-4 uppercase tracking-tighter">A-000 Chambers Street, Suite z-701 New York, NY 10007, United States</p>
                  <div className="flex flex-wrap gap-2">
                    {["ANGULAR", "REACT", "PYTHON"].map((skill) => (
                      <span key={skill} className="bg-[#1e2633] text-[#4d79ff] text-[10px] px-3 py-1 rounded-sm font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="flex justify-between items-center p-5 md:px-8 border-b border-[#2e2e3550] text-gray-400">
                <h5 className="text-sm md:text-base">+ DEF Themes - Creative full stack web design</h5>
                <span className="text-[#3fc1c9] font-mono text-sm">2016 - 2019</span>
              </div>

              {/* Experience Item 3 */}
              <div className="flex justify-between items-center p-5 md:px-8 text-gray-400">
                <h5 className="text-sm md:text-base">+ GHI Themes - Web & App IT Company</h5>
                <span className="text-[#3fc1c9] font-mono text-sm">2013 - 2015</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Education;