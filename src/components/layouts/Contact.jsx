import React from "react";
import Button from "../Button";
import Images from "../Images";
import ContactMan from "/src/assets/contactMan.png";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-[#09090b] py-12 lg:py-16 font-sans">
      <div className="w-full max-w-[1140px] px-5 lg:px-0 mx-auto">
        
        {/* Compact Box Container */}
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-10 shadow-xl">
          
          {/* Form Section */}
          <div className="w-full lg:w-[65%]">
            
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-2">
                Let's work <span className="text-zinc-500">together.</span>
              </h3>
              <p className="text-zinc-400 text-sm md:text-base font-light max-w-sm">
                Always available for freelance work. Feel free to contact me.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    placeholder=" "
                    className="block px-4 py-3 w-full text-sm text-zinc-300 bg-transparent rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 peer transition-colors"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute text-[13px] text-zinc-500 bg-[#121214] px-1.5 left-3 z-10 transition-all duration-300 transform -translate-y-1/2 top-0 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-zinc-300 cursor-text"
                  >
                    Username
                  </label>
                </div>
                
                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    className="block px-4 py-3 w-full text-sm text-zinc-300 bg-transparent rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 peer transition-colors"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-[13px] text-zinc-500 bg-[#121214] px-1.5 left-3 z-10 transition-all duration-300 transform -translate-y-1/2 top-0 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-zinc-300 cursor-text"
                  >
                    Email Address *
                  </label>
                </div>
                
                {/* Subject */}
                <div className="relative">
                  <input
                    id="subject"
                    type="text"
                    placeholder=" "
                    className="block px-4 py-3 w-full text-sm text-zinc-300 bg-transparent rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 peer transition-colors"
                  />
                  <label 
                    htmlFor="subject" 
                    className="absolute text-[13px] text-zinc-500 bg-[#121214] px-1.5 left-3 z-10 transition-all duration-300 transform -translate-y-1/2 top-0 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-zinc-300 cursor-text"
                  >
                    Subject
                  </label>
                </div>
                
                {/* Contact */}
                <div className="relative">
                  <input
                    id="contact"
                    type="text"
                    placeholder=" "
                    className="block px-4 py-3 w-full text-sm text-zinc-300 bg-transparent rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 peer transition-colors"
                  />
                  <label 
                    htmlFor="contact" 
                    className="absolute text-[13px] text-zinc-500 bg-[#121214] px-1.5 left-3 z-10 transition-all duration-300 transform -translate-y-1/2 top-0 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-zinc-300 cursor-text"
                  >
                    Contact Number
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative mt-5">
                <textarea
                  id="message"
                  rows="3"
                  placeholder=" "
                  className="block px-4 py-3 w-full text-sm text-zinc-300 bg-transparent rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 peer transition-colors resize-none"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute text-[13px] text-zinc-500 bg-[#121214] px-1.5 left-3 z-10 transition-all duration-300 transform -translate-y-1/2 top-0 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-zinc-300 cursor-text"
                >
                  Message
                </label>
              </div>

              <div className="pt-2">
                <Button
                  id="subBtn"
                  btnText={"Send Message"}
                  className="bg-zinc-100 text-zinc-950 font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-sm"
                />
              </div>
            </form>
          </div>

          {/* Contact Info & Illustration */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800/80 pt-6 lg:pt-0 lg:pl-10">
            
            {/* Top Illustration */}
            <div className="flex justify-center lg:justify-end mb-6 lg:mb-0">
              <Images 
                imgSrc={ContactMan} 
                className="w-28 lg:w-32 opacity-80" 
              />
            </div>
            
            {/* Contact Details */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#09090b]/50 border border-zinc-800/50 mt-auto">
              <div className="bg-zinc-800/50 p-3 rounded-lg text-zinc-400">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-zinc-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">Email Me</p>
                <h4 className="text-zinc-200 font-medium text-sm">
                  mesbaulrafi@gmail.com
                </h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;