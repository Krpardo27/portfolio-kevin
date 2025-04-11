import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Personal from "./Personal";
import { HiMiniIdentification } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { DarkModeToggle } from "./DarkModeToggle ";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="lg:block hidden dark:bg-[#1a1a1a] bg-[#FBFBFB] w-72  fixed top-0 left-0 z-50 lg:m-10 lg:rounded-lg drop-shadow-lg">
        <Personal />
        <nav>
          <ul className="w-full flex flex-col items-start">
            <li className="relative w-full px-5 py-3 lg:text-left text-center dark:hover:bg-[#242527] hover:bg-[#b0b0b0] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "dark:text-[#99f68b] text-grisOscuro  before:content-[''] before:absolute before:right-0 before:inset-y-0 before:my-auto before:h-12 before:w-1 dark:before:bg-[#99f68b] before:bg-[#242527]"
                    : "text-[#757575 ] dark:text-[#e1e8f0]"
                } flex items-center gap-5 transition duration-300`}
              >
                <HiMiniIdentification className="group-hover:scale-125 transition duration-300 text-[24px]" />
                Sobre mí
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center dark:hover:bg-[#242527] hover:bg-[#b0b0b0] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/educacion"
                className={`${
                  location.pathname === "/educacion"
                    ? "dark:text-[#99f68b] text-grisOscuro  before:content-[''] before:absolute before:right-0 before:inset-y-0 before:my-auto before:h-12 before:w-1 dark:before:bg-[#99f68b] before:bg-[#242527]"
                    : "text-[#757575 ] dark:text-[#e1e8f0]"
                } flex items-center gap-5 transition duration-300`}
              >
                <FaUserGraduate className="group-hover:scale-125 transition duration-300 text-[24px]" />
                Educación
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center dark:hover:bg-[#242527] hover:bg-[#b0b0b0] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/experiencia"
                className={`${
                  location.pathname === "/experiencia"
                    ? "dark:text-[#99f68b] text-grisOscuro  before:content-[''] before:absolute before:right-0 before:inset-y-0 before:my-auto before:h-12 before:w-1 dark:before:bg-[#99f68b] before:bg-[#242527]"
                    : "text-[#757575 ] dark:text-[#e1e8f0]"
                } flex items-center gap-5 transition duration-300`}
              >
                <MdWork className="group-hover:scale-125 transition duration-300 text-[24px]" />
                Experiencia
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center dark:hover:bg-[#242527] hover:bg-[#b0b0b0] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/proyectos"
                className={`${
                  location.pathname === "/proyectos"
                    ? "dark:text-[#99f68b] text-grisOscuro  before:content-[''] before:absolute before:right-0 before:inset-y-0 before:my-auto before:h-12 before:w-1 dark:before:bg-[#99f68b] before:bg-[#242527]"
                    : "text-[#757575 ] dark:text-[#e1e8f0]"
                } flex items-center gap-5 transition duration-300`}
              >
                <GoFileDirectoryFill className="group-hover:scale-125 transition duration-300 text-[24px]" />
                Proyectos
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center dark:hover:bg-[#242527] hover:bg-[#b0b0b0] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/contacto"
                className={`${
                  location.pathname === "/contacto"
                    ? "dark:text-[#99f68b] text-grisOscuro  before:content-[''] before:absolute before:right-0 before:inset-y-0 before:my-auto before:h-12 before:w-1 dark:before:bg-[#99f68b] before:bg-[#242527]"
                    : "text-[#757575 ] dark:text-[#e1e8f0]"
                } flex items-center gap-5 transition duration-300`}
              >
                <IoMdCall className="group-hover:scale-125 transition duration-300 text-[24px]" />
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
