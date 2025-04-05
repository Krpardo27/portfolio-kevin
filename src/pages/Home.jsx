import React from "react";
import Navbar from "../components/Navbar";
import Personal from "../components/Personal";
import About from "../components/About";

const Home = () => {
  return (
    <div className=" w-full lg:flex sm:flex-col md:flex-row lg:bg-portfolio bg-black bg-cover bg-no-repeat bg-center gap-5">
      <div className="lg:w-1/6 flex-none text-[#e1e8f0] w-full rounded-md lg:sticky lg:top-0 lg:mt-5">
        <div className="flex flex-col text-center gap-5">
          <div className="flex flex-col gap-2 mt-2 lg:mt-0">
            <Personal />
            <Navbar />
          </div>
        </div>
      </div>
      <div className="lg:w-5/6 lg:p-4 flex flex-col items-center justify-center w-full lg:h-screen h-full mt-1 max-w-[1450px] px-3">
        <About />
      </div>
    </div>
  );
};

export default Home;
