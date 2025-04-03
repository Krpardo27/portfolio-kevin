import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="h-[80px] bg-black">
      <div className=" max-w-6xl mx-auto w-full h-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="font-primary text-4xl uppercase text-white">Kdev</h1>
          <img src="/logo.svg" alt="logotipo FMDOS" />
        </div>
        <Navbar />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
