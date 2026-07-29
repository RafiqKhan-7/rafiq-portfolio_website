import React from "react";
// import { FaHtml5, FaCss3Alt, FaJs, BsTypescript, FaReact, FaBootstrap, RiTailwindCssFill, FaPhp, DiMysql, FaLaravel, TbBrandCpp, FaJava, PiFileCSharp, FaGitAl, FaGithub, VscVscode, IoLogoVercel} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaArrowRight,
  FaCode, 
  FaGraduationCap,
  FaYoutube,
   FaPalette,
  FaMobileAlt,
  FaDatabase,
  FaRocket,
  FaLightbulb,
  FaLaptopCode,
    FaProjectDiagram,
    FaCertificate,
    FaGithub,
    FaAward
} from "react-icons/fa";

import { BsType } from "react-icons/bs"; // Bootstrap Icons
import { RiTailwindCssFill } from "react-icons/ri"; // Remix Icons
import { DiMysql } from "react-icons/di"; // Devicons
import { SiLaravel } from "react-icons/si"; // Simple Icons
import { TbBrandCpp } from "react-icons/tb"; // Tabler Icons
import { PiFileCSharp } from "react-icons/pi"; // Phosphor Icons
import { VscVscode } from "react-icons/vsc"; // VS Code Icons
import { IoLogoVercel } from "react-icons/io5"; // Ionicons 5
import { SiTypescript } from "react-icons/si";

import todo from "../assets/Todo.png"

export const skillsData = [
    {

        title: "Frontend",
        skills: [
            {name: "HTML", icon: <FaHtml5 className = "text-orange-500"/>},
            {name: "CSS", icon: <FaCss3Alt className = "text-blue-500"/>},
            {name: "JavaScript", icon: <FaJs className = "text-yellow-500"/>},
            {name: "TypeScript", icon: <SiTypescript className = "text-pink-400" />},
            {name: "React Js", icon: <FaReact className = "text-cyan-400" />},
            {name: "Bootstrap", icon: <FaBootstrap className = "text-purple-600" />},
            {name: "Tailwind css", icon: <RiTailwindCssFill className = "text-teal-400" />},

        ],
    },
    {
        title : "Beckend",
        skills: [
            {name: "PHP", icon: <FaPhp className = "text-yellow-300" /> },
            {name: "MySql", icon : <DiMysql className = "text-blue-500" />},
            {name: "Laravel", icon : <SiLaravel className = "text-blue-500" />}
        ]
    },
    {
       title : "Languages",
       skills : [
        {name: "C++", icon :<TbBrandCpp className = "text-blue-500" />},
        {name: "Java", icon :<FaJava className = "text-red-600" />},
        {name: "JavaScript", icon: <FaJs className = "text-yellow-500"/>},
        {name: "PHP", icon : <FaPhp className = "text-yellow-300" />},
        {name: "TypeScript", icon :<SiTypescript className = "text-pink-400" />},
        {name: "C#", icon : <PiFileCSharp className = "text-pink-300" />},
       ]
    },
    {
        title : "Tools",
       skills : [
        {name: "Git", icon :<FaGitAlt  className = "text-orange-500" />},
        {name: "Git Hub", icon :<FaGithub className = "text-black" />},
        {name: "vs Code", icon: <VscVscode className = "text-blue-500"/>},
        {name: "vercel", icon : <IoLogoVercel className = "text-black" />},
       ]
    }

];


export const portfolioItems = [
  {
    title: "Products Website",
    category: "Frontend Development",
    description:
      "A responsive online store built with React, Tailwind CSS, and API integration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby3Twv08dVpI4W7P1LKsnledunm3lckKQ5Y3RYyllZQ&s=10",
    technologies: ["React", "Tailwind CSS", "API"],
    link: "https://example.com",
    git:"https://example.com"
  },
  {
    title: " Todo Management App",
    category: "Web Application",
    description:
      "A responsive Todo application for managing daily tasks with add, edit, delete, and local storage functionality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDua-QZyPxLKQVO4nj8prwQLC472bCrTzhk_2CpZn_hQ&s=10",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://todo-app-psi-khaki-90.vercel.app/",
    git:"https://github.com/Rafiq-khan5533/Todo-App"
  },
  {
    title: "Weather Application",
    category: "API Project",
    description:
      "A weather app that displays real-time weather information using an external API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    technologies: ["HTML","CSS","JavaScript", "API"],
    link: "https://weather-app-jade-ten-37.vercel.app/",
    git:"https://github.com/Rafiq-khan5533/weather-app"
  },
  {
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A modern portfolio website to showcase skills, projects, and professional experience.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://rafiq-portfolio-website.vercel.app/",
    git:"https://example.comhttps://github.com/Rafiq-khan5533/rafiq-portfolio-website"
  },
    {
    title: "Decodlabs Company Website",
    category: "Frontend Development",
    description:
      "A modern static business website designed to showcase company services, team members, and professional solutions.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    technologies: ["HTML", "CSS"],
    link: "https://static-website-decodelabs.vercel.app/",
    git: "https://github.com/Rafiq-khan5533/static-web-page",
  },
  {
  title: "Quiz Application",
  category: "Frontend Development",
  description:
    "An interactive quiz application where users can answer questions, view scores, and test their knowledge with a modern user interface.",
  image:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
  ],
  link: "https://quiz-app-two-kappa-84.vercel.app/",
  git: "https://github.com/Rafiq-khan5533/Quiz-app"
}
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Syntecxhub",
    duration: "2026 - Present",
    location: "Remote",
    description:
      "Developed responsive web interfaces using React, JavaScript, and Tailwind CSS. Worked on reusable components, API integration, and improving user experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
  },
  {
    role: "Frontend Developer Intern",
    company: "CodeAlpah",
    duration: "2026 - Present",
    location: "Remote",
    description:
      "Built modern websites and web applications for clients using frontend technologies. Created responsive layouts and integrated APIs.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    role: "Computer Science Student",
    company: "Kunar University",
    duration: "2023 - Present",
    location: "Afghanistan",
    description:
      "Studying computer science with a focus on software development, web technologies, data structures, and algorithms.",
    technologies: ["Programming", "Data Structures", "Software Engineering"],
  },
];

export const journey = [
    {
      icon: <FaGraduationCap className='text-2xl' />,
      title: "Academic Foundation",
      description: "4th year B.Tech in Computer Engineering, building strong fundamentals in computer science",

    },
    {
      icon: <FaCode className='text-2xl' />,
      title: "Development Mastery",
      description: "Building responsive, scalable, and high-performance web applications using modern technologies like React, JavaScript, and Tailwind CSS."
    },
    {
      icon: <FaArrowRight className='text-2xl' />,
      title: "Real-World Projects",
      description: "Developed and deployed 10+ real-world web applications using React, JavaScript, Tailwind CSS, and modern frontend technologies."
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: "UI/UX Design",
      description: "Designing modern, intuitive, and user-friendly interfaces that provide seamless user experiences across all devices."
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Responsive Design",
      description: "Building fully responsive websites that deliver an optimal experience on desktops, tablets, and mobile devices."
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "API Integration",
      description: "Connecting frontend applications with REST APIs to display dynamic, real-time data and improve functionality."
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Performance Optimization",
      description: "Optimizing web applications for faster loading, smooth interactions, and improved overall performance."
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Problem Solving",
      description: "Analyzing complex challenges and developing clean, efficient, and scalable solutions using modern web technologies."
    }
  ];

export const highlights = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Built responsive and interactive web applications using React, JavaScript, Tailwind CSS, and Bootstrap.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram />,
    title: "Projects Completed",
    description:
      "Developed 10+ personal and academic projects including portfolio websites, dashboards, and eCommerce applications.",
  },
  {
    id: 3,
    icon: <FaGithub />,
    title: "Git & GitHub",
    description:
      "Version controlled projects with Git and GitHub while following modern development workflows.",
  },
  {
    id: 4,
    icon: <FaCode />,
    title: "Continuous Learning",
    description:
      "Continuously improving React, TypeScript, backend development, and modern web technologies.",
  },
  {
    id: 5,
    icon: <FaCertificate />,
    title: "Certifications",
    description:
      "Completed online courses in web development, JavaScript, React, and responsive design.",
  },
  {
    id: 6,
    icon: <FaAward />,
    title: "Problem Solving",
    description:
      "Built clean, reusable UI components and solved real-world frontend challenges with modern best practices.",
  },
];
