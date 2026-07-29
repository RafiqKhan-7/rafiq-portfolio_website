import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Fragment, useContext } from "react";

const Contact = () => {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    const contacts = [
        {
            id: 1,
            icon: <FaEnvelope size={28} />,
            title: "Email",
            value: "rk7016029@gmail.com",
            link: "mailto:rk7016029@gmail.com",
            color: "hover:text-red-500",
        },
        {
            id: 2,
            icon: <FaWhatsapp size={28} />,
            title: "WhatsApp",
            value: "+93 788118661",
            link: "https://wa.me/93788118661",
            color: "hover:text-green-500",
        },
        {
            id: 3,
            icon: <FaGithub size={28} />,
            title: "GitHub",
            value: "github.com/Rafiq-khan5533",
            link: "https://github.com/Rafiq-khan5533",
            color: "hover:text-gray-900",
        },
        {
            id: 4,
            icon: <FaLinkedin size={28} />,
            title: "LinkedIn",
            value: "linkedin.com/in/rafiq-khan",
            link: "https://www.linkedin.com/in/rafiq-khan-900092392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            color: "hover:text-blue-600",
        },
        {
            id: 5,
            icon: <FaFacebook size={28} />,
            title: "Facebook",
            value: "facebook.com/Rafiq khan",
            link: "https://www.facebook.com/share/18yUjor1bK/",
            color: "hover:text-blue-500",
        },
        {
            id: 6,
            icon: <FaMapMarkerAlt size={28} />,
            title: "Location",
            value: "Kama, Nangarhar, Afghanistan",
            link: "#",
            color: "hover:text-orange-500",
        },
    ];


    return (
        <Fragment>
            <section id="contact" className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center">
                        <span className={`${darkMode ? "text-white/80" : ""}`}>Get In</span>
                        <span className="text-blue-600">Touch</span>
                    </h2>

                    <p className={`text-center text-gray-500 mt-4 mb-12 ${darkMode ? "text-white/80" : ""}`}>
                        Feel free to contact me through any of the platforms below.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {contacts.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group ${darkMode ? "bg-gray-800 text-white" : "bg-white"} rounded-2xl shadow-lg p-6 flex items-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.color}`}
                            >
                                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className={`text-lg font-semibold `}>
                                        {item.title}
                                    </h3>

                                    <p className={`text-gray-500 text-sm break-all ${darkMode ? "text-white/70" : ""}`}>
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;