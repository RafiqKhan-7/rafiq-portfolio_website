import React, { Fragment, useContext, useEffect, useState } from 'react'
import { CiDark, CiLight, CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5"
import logo from "../assets/RK1.png"
import "../App.css"
import { ThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {


  const [activeSection, setActiveSection] = useState("home");


  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  const [menuOpen, setMenuOpen] = useState(false);



  const navLinks = [
    { id: "home", name: "Home", path: "/" },
    { id: "about", name: "About", path: "/about" },
    { id: "skills", name: "Skills", path: "/skills" },
    { id: "work", name: "Work", path: "/work" },
    { id: "contact", name: "Contact", path: "/contact" }
  ]

  useEffect(() => {
    const handlScrolll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    }

    window.addEventListener("scroll", handlScrolll);
    return () => window.removeEventListener("scroll", handlScrolll);
  }, [])

  return (
    <Fragment>
      <nav className={`fixe top-0 w-full ${menuOpen ? "mb-30 md:mb-5" : ""} py-2 z-50 shadow-md backdrop-blur-sm border-b border-white/20 px-3 transition-all ${darkMode ? "bg-gray-700" : ""} `}>
        <div className='container mx-auto flex items-center justify-between'>
          <div><img className='w-20' src={logo} alt="" /></div>
          {/* <ul className={`hidden md:flex space-x-8  text-sm font-light uppercase `}>
            {
              navLinks.map((link) => {
                return <li className={` ${darkMode?"text-white":""} hover:text-teal-500 cursor-pointer  transition-colors `} key={link.id}>
                  <NavLink to={link.path} className={({isActive})=>
                  isActive? "text-teal-500 font-bold": "text-gray-700 hover:text-teal-500" 
                  }>
                    {link.name}
                  </NavLink>
                </li>
              })
            }
          </ul> */}

          <ul className="hidden md:flex space-x-8 text-sm font-light uppercase">
            {navLinks.map((link) => (
              <li className='hover:text-teal-500 cursor-pointer  transition-colors' key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
          transition-colors
          ${isActive
                      ? "text-teal-500 font-bold"
                      : darkMode
                        ? "text-white hover:text-teal-400"
                        : "text-gray-700 hover:text-teal-500"
                    }
          `
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button onClick={toggleDarkMode}>
            {darkMode ? <CiLight className='bg-white/50 text-black rounded-full' size={35} /> : <CiDark className='bg-gray-700 text-white rounded-full' size={35} />}
          </button>

          <Link to='/contact' className='ml-4 px-5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal trasition-all '>Hire Me</Link>
          {/*  */}


          {menuOpen && (
            <ul
              className={`absolute top-full left-0 w-full md:hidden flex flex-wrap items-center justify-center gap-5    ${darkMode ? "bg-blue-700/30 text-white py-12" : "bg-white text-black py-0"
                }`}
            >
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`cursor-pointer text-lg hover:text-teal-500 transition-colors ${activeSection === link.id ? "text-teal-500" : ""
                    }`}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMenuOpen(false);
                  }}
                >
                  <NavLink to={link.path}
                    className={({ isActive }) =>
                      `
              ${isActive
                        ? "text-teal-500 font-bold"
                        : darkMode
                          ? "text-white hover:text-teal-400"
                          : "text-gray-700 hover:text-teal-500"
                      }
              `
                    }>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden`}

          >
            {menuOpen ? <IoClose size={30} /> : <CiMenuBurger size={28} />}
          </button>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
