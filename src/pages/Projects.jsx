import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { FaCubes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import projects from "../data/projects.json";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="relative flex flex-col dark:bg-[#1a1a1a] bg-[#fafafa] lg:p-12 p-2 overflow-y-auto scrollbar-custom max-w-[1300px] overflow-auto mx-auto lg:rounded-lg h-full lg:m-5 shadow-lg drop-shadow-lg">
        <div className="absolute w-16 h-16 border-t-[3px] border-l-[3px] border-dashed dark:border-[#a5fa98] border-grisOscuro lg:top-12 lg:left-12 top-2 left-2"></div>
        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex items-center gap-3 mt-10">
            <FaCubes className="text-[#989898] text-[30px]" />
            <h2 className="text-3xl text-center text-[#6a7178] font-bold ">
              Explora
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <h3 className=" font-primary flex gap-5 lg:text-5xl text-3xl font-bold text-grisOscuro dark:text-[#6a7178] tracking-widest mt-0 lg:mt-5">
              Mi
              <span className="text-[#a5fa98]">Portafolio</span>
            </h3>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 p-5 pb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex flex-col gap-5 rounded-xl relative shadow-lg h-full justify-between"
            >
              <div className="relative rounded-full">
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  className="absolute object-cover rounded-full -right-5 -top-12 w-[80px] h-[80px] z-20  bg-[#212121] p-1 shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-3">
                <h3 className="text-[#a5fa98] font-primary text-xl ">
                  {project.name}
                </h3>
                <ul className="flex gap-2 items-center flex-wrap list-none">
                  {project.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="text-[#989898] lg:text-[16px] text-[14px] bg-[#181818] p-1 rounded-[5px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="text-[#989898] font-secondary text-[14px] lg:text-[16px]">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <a href={project.githubUrl} target="_blank" className="p-2">
                    <FaGithub className="text-[#eeeeee] bg-[#1a1a1a] rounded-full p-2 text-[40px]" />
                  </a>
                </div>
                <div>
                  <a href={project.liveUrl} target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </PageWrapper>
  );
};

export default Projects;
