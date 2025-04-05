import React, { useState } from "react";
import { HiMiniIdentification } from "react-icons/hi2";
import { IoMdSchool } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { MdWork, MdContactPhone } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { GiAchievement } from "react-icons/gi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="hidden lg:block bg-[#1a1a1a]">
      <ul className="w-full flex flex-col items-start">
        <li
          className={`${
            activeLink === "about" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group`}
        >
          <a
            href="#about"
            onClick={() => handleClick("about")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <HiMiniIdentification className="group-hover:scale-125 transition-all duration-300 text-[24px] " />
            Sobre mí
          </a>
        </li>
        <li
          className={`${
            activeLink === "education" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group`}
        >
          <a
            href="#education"
            onClick={() => handleClick("education")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <IoMdSchool className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Educación
          </a>
        </li>
        <li
          className={`${
            activeLink === "skills" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group`}
        >
          <a
            href="#skills"
            onClick={() => handleClick("skills")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <FaTools className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Habilidades
          </a>
        </li>
        <li
          className={`${
            activeLink === "experience" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group`}
        >
          <a
            href="#experience"
            onClick={() => handleClick("experience")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <MdWork className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Experiencia
          </a>
        </li>
        <li
          className={`${
            activeLink === "portfolio" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group`}
        >
          <a
            href="#portfolio"
            onClick={() => handleClick("portfolio")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <GoFileDirectoryFill className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Proyectos
          </a>
        </li>
        <li
          className={`${
            activeLink === "logros" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group`}
        >
          <a
            href="#logros"
            onClick={() => handleClick("logros")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <GiAchievement className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Logros
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
