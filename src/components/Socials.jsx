import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex gap-5 mt-5">
      <p className="flex items-center gap-2 text-[#989898] font-secondary text-[14px] border-r-2 pr-2">
        <BsFillBuildingsFill className="" />
        PRISA Media Chile
      </p>
      <a href="" className="text-[#989898] font-secondary text-[14px] flex items-center gap-2 border-r-2 pr-2">
        <BiLogoGmail /> kevin.pardov26@gmail.com
      </a>
      <a href="" className="text-[#989898] font-secondary text-[14px] flex items-center gap-2 border-r-2 pr-2">
        <FaLinkedinIn /> kevinpardoveas
      </a>
      <a href="" className="text-[#989898] font-secondary text-[14px] flex items-center gap-2">
        <FaGithub />Krpardo27
      </a>
    </div>
  );
};

export default Socials;
