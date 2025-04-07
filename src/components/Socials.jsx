import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-5 mt-5 lg:p-10 p-5">
        <div className="flex w-full justify-center items-center ">
          <p className="flex items-center gap-2 text-[#989898] font-secondary text-[14px] p-2 dark:hover:text-[#e1e8f0] hover:text-grisOscuro hover:transition-all duration-300 cursor-pointer">
            <BsFillBuildingsFill className="" />
            PRISA Media Chile
          </p>
        </div>
        <div className="flex w-full justify-center items-center">
          <a
            href=""
            className="text-[#989898] font-secondary text-[14px] flex items-center gap-2  p-2 dark:hover:text-[#e1e8f0] hover:text-grisOscuro hover:transition-all duration-300"
          >
            <BiLogoGmail /> kevin.pardov26@gmail.com
          </a>
        </div>

        <div className="flex w-full justify-center items-center">
          <a
            href=""
            className="text-[#989898] font-secondary text-[14px] flex items-center gap-2  p-2 dark:hover:text-[#e1e8f0] hover:text-grisOscuro hover:transition-all duration-300"
          >
            <FaLinkedinIn /> kevinpardoveas
          </a>
        </div>
        <div className="flex w-full justify-center items-center">
          <a
            href=""
            className="text-[#989898] font-secondary text-[14px] flex items-center gap-2 p-2 dark:hover:text-[#e1e8f0] hover:text-grisOscuro hover:transition-all duration-300"
          >
            <FaGithub />
            Krpardo27
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
