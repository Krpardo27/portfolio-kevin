import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="bg-[#1a1a1a] flex lg:flex-row justify-center items-center flex-col gap-5 mt-5 w-full lg:p-10 p-5">
      <p className="flex items-center gap-2 text-[#989898] font-secondary text-[14px]  p-2">
        <BsFillBuildingsFill className="" />
        PRISA Media Chile
      </p>
      <a
        href=""
        className="text-[#989898] font-secondary text-[14px] flex items-center gap-2  p2-2"
      >
        <BiLogoGmail /> kevin.pardov26@gmail.com
      </a>
      <a
        href=""
        className="text-[#989898] font-secondary text-[14px] flex items-center gap-2  p2-2"
      >
        <FaLinkedinIn /> kevinpardoveas
      </a>
      <a
        href=""
        className="text-[#989898] font-secondary text-[14px] flex items-center gap-2 p-2"
      >
        <FaGithub />
        Krpardo27
      </a>
    </div>
  );
};

export default Socials;
