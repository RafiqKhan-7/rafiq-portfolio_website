
import "../App.css"
import React, { Fragment, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaArrowRight, FaCode, FaGraduationCap, FaYoutube } from 'react-icons/fa';
import { journey, skillsData, highlights } from "../Data/Data"
function About() {
  const { darkMode, setDarMode } = useContext(ThemeContext);


  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Redux Toolkit",
      ],
      description:
        "Building responsive, modern, and interactive user interfaces with the latest frontend technologies.",
    },
    {
      category: "Backend",
      items: [
        "PHP",
        "MySql",
        "Laravel",
      ],
      description:
        "Developing scalable server-side applications, APIs, and database-driven solutions.",
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Vite",
        "Figma",
        "npm",
      ],
      description:
        "Using modern development tools for version control, design, testing, and efficient workflows.",
    },
    {
      category: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Java",
        "C++",
      ],
      description:
        "Programming languages used to build web applications and solve software development problems.",
    },
  ];
  return (
    <Fragment>
      <div className={`min-h-screen py-20  transition-colors duration-300 relative overflow-hidden `}>
        <div className={`absolute inset-0 pointer-events-none ${darkMode ? "bg-gray-900" : "bg-linear-to-br from-blue-50/50 via-transparent to-blue-100/20"}`}>
        </div>
        <div className=' relative z-10 text-center mb-16'>
          <h1
            className={` text-5xl md:text-6xl font-bold mb-4 pt-4 ${darkMode ? "text-gray-100" : "text-gray-900"
              }`}
          >
            About
            <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"> Me</span>
          </h1>
          <div className="text-center mb-6">
            <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4"></div>

            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              A passionate developer and learner on a continuous journey of growth and innovation
            </p>
          </div>
          <div className={`rounded-2xl border-teal-900 p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}>
            <h2 className={`text-3xl font-bold mb-6 ${darkMode? "text-white/80":""}`}>welcome to my journey</h2>
            <p className={`text-lg leading-relaxed text-teal-900 mb-4 ${darkMode?"text-white/50":""}`}>I'm { }
              <span className={`${darkMode? "text-orange-600": ""} font-semibold text-blue-500`}>
                Rafiq Khan Kharoty
              </span>
              , a 4th year B.Tec Student in computer Engineering with a passion for building scalable and user-friendly applications. my development journey began during 2025, starting with fundamental Data Structures and Algorithms, which laid a strong Foundation for my technical growth.
            </p>
            <p className={`text-lg leading-relaxed text-teal-900 ${darkMode?"text-white/50":""}`}>
              over time, I transitioned from technical concepts to practical development, mastering web technologies from front-end basic to full stack application development, Today, I combine Academic excellence with hands-on experienc, continuously pushing the boundaries of what I can create.
            </p>
          </div>
          <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>

            <div className={`mb-16 `}>
              <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode? "text-white/80":""}`}>
                My Development
                <span className='text-blue-800' > Path</span>
              </h2>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6`}>
                {journey.map((item, index) => (
                  <div key={index}
                    className={`rounded-xl border border-1 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm ${darkMode? "bg-black/10":"bg-teal-900/5"}`}>
                    <div className={`text-blue-500 mb-4 ${darkMode? "text-blue-90":""}`}>{item.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 ${darkMode?"text-white/100":""}`}>{item.title}</h3>
                    <p className={`text-teal-900 leading-relaxed ${darkMode?"text-white/100":""}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* skills   */}
            <div className={`mb-16`}>
              <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode?"text-white":""}`}>
                Technical
                <span className={`bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent`}> Skills</span>
              </h2>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6`}>
                {skills.map((skillsGroup, index) => (
                  <div key={index} className={`rounded-xl border border-1 p-6 backdrop-blur-sm ${darkMode? "bg-black/20":"bg-teal-900/5"}`}>
                    <h3 className={`text-xl font-bold mb-4 text-blue-700 ${darkMode?"text-orange-200":""}`}>
                      {skillsGroup.category}
                    </h3>
                    <div className={`flex flex-wrap gap-2`}>
                      {skillsGroup.items.map((skill, index) => (
                        <span key={index} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${darkMode ? "bg-blue-900/40 text-blue-300 border border-blue-700/50 hover:bg-blue-900" : "bg-gray-100 text-blue-900 border border-blue-200 hover:bg-blue-200"}`}>{skill}</span>
                      ))}
                    </div>
                    <p className={`text-teal-900 text-justify dark:text-gray-300 leading-7 mb-5 ${darkMode? "text-white/60":""}`}>
                      {skillsGroup.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="highlights" className={`py-20 px-6 bg-gray-50 ${darkMode?"bg-gray-900 shadow-lg":""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className={`text-4xl font-bold ${darkMode?"text-white/50":""}`}>
              Highlights & Achievements
            </h2>

            <p className={`mt-4 text-gray-500 max-w-2xl mx-auto`}>
              A snapshot of my development journey, projects, and technical
              achievements.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.id}
                className={`group  rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${darkMode?"bg-black/20 text-white":"bg-gray-900/5"}`}
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className={` leading-7 ${darkMode?"text-gray-400":"text-gray-600"}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About