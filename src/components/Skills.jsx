
import React, { Fragment, useContext, useState } from 'react'
import { skillsData } from "../Data/Data"; // Update the path if needed
import { hover, motion } from "framer-motion";
import { ThemeContext } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaGithub, FaBookOpen, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

import { Link } from 'react-router-dom';
function Skills() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode? "bg-gray-900":""}`}>
      <section id="skills" className={`py-20 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>

          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center"
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-10">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                className={` ${darkMode ? "bg-gray-800 text-white" : "bg-teal-900/10 text-black "} rounded-xl p-6
                  hover:-translate-y-2 transition duration-300  `}
              >
                <h3 className="text-xl font-bold text-center mb-2">
                  {category.title}
                </h3>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center gap-5 items-center py-5  ${darkMode ? "bg-gray-800 text-white" : " text-black"}`}>
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1
                      }}
                      viewport={{ once: true }}
                      className={`flex flex-col flex-wrap items-center justify-center
                        gap-2 p-1 rounded-lg
                         ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
                    >
                      <div className="text-3xl">
                        {skill.icon}
                      </div>
                      <p>
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className={`mt-16 max-w-6xl mx-auto animate-fade-in rounded-2xl p-8 md:p-12 ${darkMode ? "bg-blue-950/50 border-2 border-blue-900/40" : "bg-blue-100/50 border border-blue-200"} `} style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}>
        <h2 className={`text-4xl flex gap-2 font-bold mb-6 ${darkMode ? "text-white" : "text-gray-700"}`}>
          <FaBookOpen className="text-4xl text-blue-500" />
          Continuous Learning
        </h2>
        <p>
          Technology evolves repidly, and so do I,  I'm constantly learning new frameworks, exploring emerging technologies, and refining my existing skills. My journey in tech is just beginning, and I'm excited about what lies ahead.
        </p>
        {/* <div className={`flex gap-4 flex-wrap`}>
        <div className={`${darkMode? "border-blue-800":"border-blue-300"} border-2 px-6 py-3 rounded-full font-semibold text-sm text-teal-400`}>Currently Learning: PHP </div>
      </div> */}
        <div className="flex flex-wrap gap-4">
          <div
            className={`px-6 py-3 flex gap-2 justify-center items-center rounded-full border font-semibold text-sm ${darkMode
                ? "border-blue-800 bg-blue-900/40 text-blue-300"
                : "border-blue-300 bg-white text-blue-700"
              }`}
          >
            <FaCode />
            Currently Learning: Laravel & Advanced React
          </div>

          <div
            className={`px-6 py-3 rounded-full flex gap-2 justify-center items-center border font-semibold text-sm ${darkMode
                ? "border-teal-800 bg-teal-900/40 text-teal-300"
                : "border-teal-300 bg-white text-teal-700"
              }`}
          >
            <FaRocket />
            Exploring: TypeScript
          </div>

          <div
            className={`px-6 py-3 rounded-full flex gap-2 justify-center items-center border font-semibold text-sm ${darkMode
                ? "border-purple-800 bg-purple-900/40 text-purple-300"
                : "border-purple-300 bg-white text-purple-700"
              }`}
          >
            <FaLightbulb />
            Goal: Full-Stack Development
          </div>
        </div>
      </section>
      <section className={`text-center mt-16 py-10 animate-fade-in`} style={{animationDelay:"2.8s", animationFillMode:"forwards"}}>
        <div className={`flex gap-4 justify-center flex-wrap`}>
          <Link to ="/work">
              <button className={`bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform `}>Wiev My Projects </button>
          </Link> 
          <Link to="/contact">
              <button className={`px-8 py-4 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${darkMode?"border-2 border-blue-400 text-blue-400 hover:bg-blue-950":"border-2 border-blue-600 text-blue-600 hover:bg-blue-50"}`}>Let's Collaborate</button>
          </Link>
        </div>
      </section>
    </div>

  )
}

export default Skills