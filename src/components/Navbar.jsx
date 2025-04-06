import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMiniIdentification } from "react-icons/hi2";

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
            activeLink === "/" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]`}
        >
          <Link
            to="/"
            onClick={() => handleClick("/")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            
          </Link>
        </li>
        <li
          onClick={() => handleClick("/about")}
          className={`${
            activeLink === "about" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]`}
        >
          <Link
            to="/about"
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <HiMiniIdentification /> Sobre mí
          </Link>
        </li>
        <li
          onClick={() => handleClick("/experiencia")}
          className={`${
            activeLink === "experiencia" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]`}
        >
          <Link
            to="/experiencia"
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <MdWork className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Experiencia
          </Link>
        </li>

        <li
          className={`${
            activeLink === "about" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]`}
        >
          <Link
            to="/proyectos"
            onClick={() => handleClick("proyectos")}
            className="flex items-center gap-2 group-hover:text-[#99f68b] justify-center lg:justify-start"
          >
            <GoFileDirectoryFill className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
            Proyectos
          </Link>
        </li>
        <li
          className={`${
            activeLink === "about" ? "text-[#99f68b] bg-[#242527] " : ""
          } w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]`}
        >
          <Link
            to="/contacto"
            className={`${
              activeLink === "experiencia" ? "text-[#99f68b] bg-[#242527] " : ""
            } w-full px-5 py-3 text-left hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]`}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
