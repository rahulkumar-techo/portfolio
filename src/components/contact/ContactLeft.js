import React from "react";
import {  FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[rgb(30,32,36)] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={logo}
        alt="logo"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rahul kumar</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a developer, I dive into lines of code, sculpting digital
          landscapes. Debugging challenges, crafting solutions—I thrive in the
          realm where innovation meets precision, shaping tomorrow's technology
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91-9142684***</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">rahulkumar7250883289@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://www.instagram.com/p/Cm0CuY7y7Gr/?igshid=M2MyMzgzODVlNw==">
          <FaInstagram />
          </a>
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
