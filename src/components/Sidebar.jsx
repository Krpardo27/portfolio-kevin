import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Personal from "./Personal";
import { HiMiniIdentification } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoMdCall } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el sidebar
  const location = useLocation();

  // Función para cambiar el estado del sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Cerrar el sidebar cuando se haga click en un enlace
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="flex">
      {/* Botón de hamburguesa */}
      {/* <button
        className="lg:hidden text-white p-4 absolute z-20 right-0"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <RiMenu3Fill className="text-2xl" />
        )}
      </button> */}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "hidden" : "hidden"
        } lg:block hidden bg-[#1a1a1a] w-64 h-screen max-h-screen p-4 transition-all duration-300 fixed top-0 left-0 z-50`}
      >
        <Personal />

        <nav>
          <ul className="w-full flex flex-col items-start">
            <li className="relative w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/"
                onClick={handleLinkClick} // Cerrar el sidebar al hacer clic
                className={`${
                  location.pathname === "/"
                    ? "text-[#99f68b] before:content-[''] before:absolute before:left-0 before:inset-y-0 before:my-auto before:h-10 before:w-1 before:bg-[#99f68b] before:transition-all before:duration-300"
                    : "text-white"
                } flex items-center gap-5 `}
              >
                <HiMiniIdentification className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
                Sobre mí
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/experiencia"
                onClick={handleLinkClick} // Cerrar el sidebar al hacer clic
                className={`${
                  location.pathname === "/experiencia"
                    ? "text-[#99f68b] before:content-[''] before:absolute before:left-0 before:inset-y-0 before:my-auto before:h-10 before:w-1 before:bg-[#99f68b] before:transition-all before:duration-300"
                    : "text-white"
                } flex items-center gap-5 `}
              >
                <MdWork className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
                Experiencia
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/proyectos"
                onClick={handleLinkClick} // Cerrar el sidebar al hacer clic
                className={`${
                  location.pathname === "/proyectos"
                    ? "text-[#99f68b] before:content-[''] before:absolute before:left-0 before:inset-y-0 before:my-auto before:h-10 before:w-1 before:bg-[#99f68b] before:transition-all before:duration-300"
                    : "text-white"
                } flex items-center gap-5 `}
              >
                <GoFileDirectoryFill className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
                Proyectos
              </Link>
            </li>
            <li className="relative w-full px-5 py-3 lg:text-left text-center hover:bg-[#242527] cursor-pointer group border-b border-[#1f2022]">
              <Link
                to="/contacto"
                onClick={handleLinkClick} // Cerrar el sidebar al hacer clic
                className={`${
                  location.pathname === "/contacto"
                    ? "text-[#99f68b] before:content-[''] before:absolute before:left-0 before:inset-y-0 before:my-auto before:h-10 before:w-1 before:bg-[#99f68b] before:transition-all before:duration-300"
                    : "text-white"
                } flex items-center gap-5 `}
              >
                <IoMdCall  className="group-hover:scale-125 transition-all duration-300 text-[24px]" />
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
