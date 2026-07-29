import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
function Footer() {
   const {darkMode, toggleDarkMode} = useContext(ThemeContext);

  return (
    <footer
      className={`${darkMode ? "bg-gray-900 border-blue-900/40" : "bg-white border-blue-100"} border-t transition-colors duration-300`}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8`}>
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4`}>
          <h3 className={`text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent`}>
            Rafiq Khan Kharoty
          </h3>
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <Link
              to ="https://github.com/Rafiq-khan5533"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "bg-white text-black hover:bg-black/40 hover:text-white" : "bg-gray-900 text-white hover:bg-black/70 hover:text-white"} p-3 rounded-full transition-colors duration-300 flex items-center justify-center`}
              title="GitHub Profile"
            >
              <FaGithub size={20} />
            </Link>

            {/* Facebook */}
            <Link
              to ="https://www.facebook.com/share/18yUjor1bK/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "bg-white text-black  hover:bg-black/40 hover:text-white" : "bg-blue-600 text-white  hover:bg-black/70 hover:text-white"} p-3 rounded-full transition-colors duration-300 flex items-center justify-center`}
              title="Facebook Profile"
            >
              <FaFacebook size={20} />
            </Link>

            {/* Instagram */}
            <Link
              to ="https://www.instagram.com/rk_kharoty?igsh=anhlOTNuazJpeWd2"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "bg-white text-black  hover:bg-black/40 hover:text-white" : "bg-pink-600 text-white hover:bg-black/70 hover:text-white"} p-3 rounded-full transition-colors duration-300 flex items-center justify-center`}
              title="Instagram Profile"
            >
              <FaInstagram size={20} />
            </Link>

            {/* LinkedIn */}
            <Link
              to ="https://www.linkedin.com/in/rafiq-khan-900092392?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "bg-white text-black  hover:bg-black/40 hover:text-white" : "bg-blue-700 text-white hover:bg-black/70 hover:text-white"} p-3 rounded-full transition-colors duration-300 flex items-center justify-center`}
              title="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer