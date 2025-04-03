import React from "react";
import personal from "../data/personal.json";
import Socials from "../components/Socials";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
console.log(personal);

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex-none text-[#e1e8f0] max-w-xl mx-auto p-4">
          <div className="flex flex-col items-center h-full text-center lg:p-20 space-y-10">
            <div className="text-left flex flex-col justify-around gap-4">
              <h1 className="font-primary text-[#e1e8f0] text-4xl">
                {personal.name}
              </h1>
              <h3 className="text-[#e1e8f0] text-[20px]">
                {personal.profession}
              </h3>
              <p className="text-[#8d99ad]">{personal.shortBio}</p>
            </div>
            <div className="w-full flex">
              <Navbar />
            </div>
            <div className="w-full flex">
              <Socials />
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 overflow-auto text-[#e1e8f0] lg:p-20">
          <div className="h-screen flex gap-4">
            <p className="whitespace-pre-line">{personal.fullBio}</p>
          </div>
          <div>
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
