import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare, FaGithub} from "react-icons/fa";
import React, { Fragment, useContext } from "react";
import "../App.css";
import AnimatedTitles from "../utils/AnimatedTitles";
import profile from "../assets/slider.png"; // Your image
import { ThemeContext } from "../context/ThemeContext";
import cv from "../assets/khan-cv.pdf"
import { Link } from 'react-router-dom';

function Hero() {

  const {darkMode, toggleDarkMode} = useContext(ThemeContext);

  return (
    <Fragment>
      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center  pt-16 pb-20 text-black ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >

        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Side */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-light tracking-wide text-teal-500">
              Hi, I'm Rafiq Khan Kharoty
            </h3>

            <AnimatedTitles />

            <p className={`mt-6 ${darkMode? "text-white":"text-gray-500"} max-w-xl `}>
              Frontend Developer in Afghanistan specializing in React, Tailwind CSS, and
              JavaScript. I build responsive, modern, and user-friendly web
              applications using modern technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
              <span className={`px-4 py-2 bg-gray-100 backdrop-blur-md rounded-full ${darkMode? "bg-gray-600 text-white":""}`}>Web Design</span>
              <span className={`px-4 py-2 bg-gray-100 backdrop-blur-md rounded-full ${darkMode? "bg-gray-600 text-white":""}`}>Frontend Development </span>
              <span className={`px-4 py-2 bg-gray-100 backdrop-blur-md rounded-full ${darkMode? "bg-gray-600 text-white":""}`}>UI/UX Design</span>
            </div>
            <div className="flex flex-wrap mt-8 gap-5 justify-cneter  md:justify-start">
              <Link to ="https://www.facebook.com/share/18yUjor1bK/" target="_blank" className={`p-3 bg-gray-300 rounded-full hover:bg-teal-400 transition-colors ${darkMode? "bg-gray-600":""}`}>
                <FaFacebook />
              </Link>
              <Link to ="https://www.linkedin.com/in/rafiq-khan-900092392?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className={`p-3 bg-gray-300 rounded-full hover:bg-teal-400 transition-colors ${darkMode? "bg-gray-600":""}`}>
                <FaLinkedin />
              </Link>
              <Link to ="https://www.instagram.com/rk_kharoty?igsh=anhlOTNuazJpeWd2" target="_blank" className={`p-3 bg-gray-300 rounded-full hover:bg-teal-400 transition-colors ${darkMode? "bg-gray-600":""}`}>
                <FaInstagramSquare />
              </Link>
              <Link to ="https://github.com/RafiqKhan-7" target="_blank" className={`p-3 bg-gray-300 rounded-full hover:bg-teal-400 transition-colors ${darkMode? "bg-gray-600":""}`}>
                <FaGithub />
              </Link>
             
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/work" className="px-6 cursor-pointer py-2 text-sm rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light text-white hover:opacity-70 transition-opacity">View My Works</Link>

              <a href={cv} download={cv} className={`px-6 cursor-pointer py-2 text-sm rounded-full bg-gray-400 backdrop-blur-md font-light text-white hover:opacity-70 transition-opacity ${darkMode? "bg-orange-600": ""}`}>Download CV</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-50 h-50 md:w-100 md:h-100  rounded-full border-3 border-gray-100 object-cover shadow-[0_0_40px_rgba(40,40,40,0.9)] animate-fadeIn"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;