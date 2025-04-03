import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Socials = () => {
  return (
    <div className="flex gap-5">
      <a href="" className="text-white font-secondary text-[24px]">
        <FaWhatsapp />
      </a>
      <a href="" className="text-white font-secondary text-[24px]">
        <BiLogoGmail />
      </a>
      <a href="" className="text-white font-secondary text-[24px]">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Socials;
