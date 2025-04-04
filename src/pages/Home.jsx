import React from "react";
import Navbar from "../components/Navbar";
import Personal from "../components/Personal";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-portfolio bg-cover bg-no-repeat bg-center">
        <div className="w-1/6 flex-none text-[#e1e8f0] max-w-2xl bg-[#1a1a1a] m-3">
          <div className="flex flex-col text-center gap-2 h-full">
            <Personal />
            <Navbar />
          </div>
        </div>
        <div className="w-5/6 overflow-y-auto p-4 flex flex-col items-center justify-center">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
