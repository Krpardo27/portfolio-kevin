import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-full px-10">
      <Link className="text-white text-2xl font-bold" to="/">
        Inicio
      </Link>
      <Link className="text-white text-2xl font-bold" to="/">
        Inicio
      </Link>
      <Link className="text-white text-2xl font-bold" to="/">
        Inicio
      </Link>
      <Link className="text-white text-2xl font-bold" to="/">
        Inicio
      </Link>
      <Link className="text-white text-2xl font-bold" to="/">
        Inicio
      </Link>
    </nav>
  );
};

export default Navbar;
