import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="h-[90px] bg-black">
      <div className="flex justify-between items-center h-full px-10">
        <h1 className="text-4xl uppercase text-white">Kdev</h1>
        <img src="/logo.svg" alt="logotipo FMDOS" />
        <Navbar />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
