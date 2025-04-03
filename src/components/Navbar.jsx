import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" ">
      <ul className="flex flex-col justify-end items-center gap-4">
        <li className="w-full">
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="group relative flex items-center px-4 py-2 cursor-pointer transition-all duration-300 "
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-8  bg-[#384558] group-hover:bg-[#d0d7e0] transition-all duration-300 group-hover:w-14"></span>

            <span className="transition-all duration-300 pl-8 group-hover:pl-16 uppercase text-[#d0d7e0]">
              Inicio
            </span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="group relative flex items-center px-4 py-2 cursor-pointer transition-all duration-300 hover:text-blue-400"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-8  bg-[#384558] group-hover:bg-[#d0d7e0] transition-all duration-300 group-hover:w-14"></span>

            <span className="transition-all duration-300 pl-8 group-hover:pl-16 uppercase text-[#d0d7e0]">
              Experiencia
            </span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group relative flex items-center px-4 py-2 cursor-pointer transition-all duration-300 hover:text-blue-400"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-8  bg-[#384558] group-hover:bg-[#d0d7e0] transition-all duration-300 group-hover:w-14"></span>

            <span className="transition-all duration-300 pl-8 group-hover:pl-16 uppercase text-[#d0d7e0]">
              Proyectos
            </span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="group relative flex items-center px-4 py-2 cursor-pointer transition-all duration-300 hover:text-blue-400"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-8  bg-[#384558] group-hover:bg-[#d0d7e0] transition-all duration-300 group-hover:w-14"></span>

            <span className="transition-all duration-300 pl-8 group-hover:pl-16 uppercase text-[#d0d7e0]">
              Inicio
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
