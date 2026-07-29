import React, { Fragment, useContext, useState } from 'react'
import { portfolioItems, skillsData } from "../Data/Data"; // Update the path if needed
import { hover, motion } from "framer-motion";
import { ThemeContext } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
function Work() {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [hoveredIndex, setHoverIndex] = useState(null)
  return (
    <Fragment>
      <section className={`${darkMode ? "bg-gray-900" : ""} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}>
        <div className={`absolute inset-0 pointer-events-none ${darkMode ? "bg-linear-to-br from-blue-950/10 via-transparent to-gray-900" : "bg-linear-to-br from-blue-50/50 via-transparent to-blue-100/20"}`}></div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 `}>
          <div className='text-center mb-16'>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              <span className={`bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent `}>
                Projects
              </span>
            </h2>
            <div className={`w-16 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full`}></div>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  `}>
            {portfolioItems.map((project, index) => (
              <div key={index} onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`rounded-2xl border-1 shadow-xl overflow-hidden transition-all duration-500 transform ${hoveredIndex === index ? "scale-105 -translate-y-3 shadow-2xl " : "hover:-translate-y-2"} group relative  ${darkMode ? "bg-gray-900" : ""}`}
              >
                <div className='relative h-56 overflow-hidden bg-linear-to-b from-blue-500/10 to-transparent'>
                  <img src={project.image} alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? "scale-110" : "scale-100"}`
                    }
                  />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"}`}></div>
                </div>

                <div className={`p-6 flex flex-col justify-between h-[280px]`}>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>{project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed text-primary ${darkMode ? "text-white" : ""}`}>{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4`}>
                    {project.technologies.map((tech, index) =>
                      <span key={index} className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${darkMode ? "bg-blue-900/50 text-white" : "text-blue-300 border border-blue-700/50"}`}>
                        {tech}
                      </span>
                    )}
                  </div>

                  <div className={`flex gap-3 mt-4`}>
                    <a href={project.link}
                      target='-blank'
                      rel='noopener noreferrer'
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform ${hoveredIndex === index ? "scale-105" : "scale-100"} ${darkMode ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"}`}
                    >
                      <FaExternalLinkAlt className='text-sm' /> Live
                    </a>
                    <a href={project.git}
                      target='-blank'
                      rel='noopener noreferrer'
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300  ${darkMode ? "border-blue-600 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300" : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 "}`}
                    >
                      <FaGithub className='text-sm' /> Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Fragment>


  );
}


export default Work