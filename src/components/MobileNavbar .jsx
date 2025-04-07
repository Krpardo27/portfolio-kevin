import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMiniIdentification } from "react-icons/hi2";
import { MdWork, MdContactPhone } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Menú en la parte inferior (solo en móvil) */}
      <div className=" lg:hidden fixed bottom-0 left-0 w-full dark:bg-[#1a1a1a] bg-[#FBFBFB] lg:p-4 p-2 z-50 shadow-xl">
        <ul className="flex justify-between">
          <li className="w-full text-center">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-[#99f68b] lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:inset-y-0 lg:before:my-auto lg:before:h-10 lg:before:w-1 lg:before:bg-[#99f68b]"
                  : "text-grisOscuro dark:text-white"
              } flex flex-col lg:flex-row items-center justify-center gap-1 text-[14px]`}
            >
              <HiMiniIdentification className="lg:text-[16px] text-[16px] text-grisOscuro dark:text-white" />
              Sobre mí
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/experiencia"
              className={`${
                location.pathname === "/experiencia"
                  ? "text-[#99f68b] lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:inset-y-0 lg:before:my-auto lg:before:h-10 lg:before:w-1 lg:before:bg-[#99f68b]"
                  : "text-grisOscuro dark:text-white"
              } flex flex-col lg:flex-row items-center justify-center gap-1 text-[14px]`}
            >
              <MdWork className="lg:text-[16px] text-[16px] text-grisOscuro dark:text-white" />
              Experiencia
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/proyectos"
              className={`${
                location.pathname === "/proyectos"
                  ? "text-[#99f68b] lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:inset-y-0 lg:before:my-auto lg:before:h-10 lg:before:w-1 lg:before:bg-[#99f68b]"
                  : "text-grisOscuro dark:text-white"
              } flex flex-col lg:flex-row items-center justify-center gap-1 text-[14px]`}
            >
              <GoFileDirectoryFill className="lg:text-[16px] text-[16px] text-grisOscuro  dark:text-white" />
              Proyectos
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/contacto"
              className={`${
                location.pathname === "/contacto"
                  ? "text-[#99f68b] lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:inset-y-0 lg:before:my-auto lg:before:h-10 lg:before:w-1 lg:before:bg-[#99f68b]"
                  : "text-grisOscuro dark:text-white"
              } flex flex-col lg:flex-row items-center justify-center gap-1 text-[14px] `}
            >
              <MdContactPhone className="lg:text-[16px] text-[16px] text-grisOscuro  dark:text-white" />
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
