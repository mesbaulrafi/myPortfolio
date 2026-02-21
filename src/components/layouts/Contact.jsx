import React from "react";
import Container from "../Container";
import Button from "../Button";
import Images from "../Images";
import ContactMan from "/src/assets/contactMan.png";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-[#17171c] py-27">
      <Container>
        <div className="bg-[url('/src/assets/contactImg.png')] bg-center bg-cover bg-no-repeat p-8 lg:p-8 rounded-lg flex flex-col lg:flex-row gap-16  ">
          {/* Form Section */}
          <div className="w-full lg:w-2/3 z-10">
            <h3 className="text-white text-4xl font-semibold mb-4">
              Get in touch !
            </h3>
            <p className="text-gray-400 mb-5 max-w-lg">
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>
            <form className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border border-gray-700 p-2 rounded-md focus:border-cyan-500 outline-none text-white transition-all"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-transparent border border-gray-700 p-2 rounded-md focus:border-cyan-500 outline-none text-white transition-all"
                  />
                </div>
                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm">Subject</label>
                  <input
                    type="text"
                    placeholder="your subject"
                    className="bg-transparent border border-gray-700 p-2 rounded-md focus:border-cyan-500 outline-none text-white transition-all"
                  />
                </div>
                {/* Contact */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm">Contact</label>
                  <input
                    type="text"
                    placeholder="Your Number"
                    className="bg-transparent border border-gray-700 p-2 rounded-md focus:border-cyan-500 outline-none text-white transition-all"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows="3"
                  placeholder="Enter your message..."
                  className="bg-transparent border border-gray-700 p-2 rounded-md focus:border-cyan-500 outline-none text-white transition-all"
                ></textarea>
              </div>

              <Button
                btnText={"Send message"}
                className={
                  "bg-[#00BCD4] text-black font-medium py-3 px-8 rounded-md mt-2 hover:bg-[#00acc1] transition-all"
                }
              />
            </form>
          </div>
          {/* Contact Info & Illustration */}
          <div className="w-full lg:w-1/3 flex flex-col justify-start gap-10 z-10">
            {/* Top Illustration */}
            <div className="flex justify-end">
              <Images imgSrc={ContactMan} className={"w-28"} />
            </div>
            {/* Contact Details */}
            <div className="flex items-center gap-4 pt-8">
              <div className="bg-[#1e1e26] p-4 rounded-md text-gray-400">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium opacity-80">
                  mesbaulrafi@gmail.com
                </h4>
                <p className="text-gray-500 text-sm">Monday to Saturday</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
