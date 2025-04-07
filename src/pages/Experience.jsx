import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { FaCubes } from "react-icons/fa";
import experience from "../data/experience.json";

const Experience = () => {
  return (
    <PageWrapper>
      <div
        id="about"
        className="relative flex flex-col dark:bg-[#1a1a1a] bg-[#fafafa] lg:p-12 p-2 overflow-y-auto scrollbar-custom max-w-[1300px] overflow-auto mx-auto lg:rounded-lg rounded-lg h-full lg:m-5 shadow-lg drop-shadow-lg"
      >
        <div className="absolute w-16 h-16 border-t-[3px] border-l-[3px] border-dashed border-[#a5fa98] lg:top-12 lg:left-12 top-2 left-2"></div>
        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex items-center gap-3 mt-10">
            <FaCubes className="text-[#989898] text-[30px]" />
            <h2 className="font-primary text-3xl text-center text-[#6a7178] font-bold ">
              Resumen de mí
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <h3 className="font-primary flex gap-5 lg:text-5xl text-3xl font-bold lg:text-[#e1e8f0] text-[#a5fa98] tracking-widest mt-0 lg:mt-5">
              Experiencia
              <span className="text-[#a5fa98] hidden lg:flex">laboral</span>
            </h3>
          </div>
        </div>

        <div className="lg:mt-20 mt-10">
          <div className="flex flex-col w-full gap-10 items-center relative px-5 pb-20">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex w-full gap-5 items-start relative h-full"
              >
                {/* Imagen + línea */}
                <div className="lg:w-1/6 flex flex-col items-center relative z-10">
                  <div className="relative">
                    <div className="lg:relative absolute lg:w-full lg:h-full w-[45px] h-[45px] transform -translate-x-1/2 translate-y-0 z-0 -top-3 left-3">
                      <img
                        src={`/experience/${exp.img}`}
                        alt={exp.company}
                        className="lg:w-[100px] lg:h-[100px] rounded-full object-cover lg:border-[5px] border-[2px] border-[#252525]"
                      />
                      {/* Línea vertical (solo si no es el último item) */}
                      {index !== experience.length - 1 && (
                        <div className="hidden lg:flex absolute left-[32px] lg:top-21 lg:left-1/2 lg:w-1 w-[1px] bg-[#252525] lg:h-[650px] transform -translate-x-1/2 translate-y-0 z-0"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenido de la experiencia */}
                <div className="lg:w-5/6 lg:px-8 px-5 py-5 bg-[#212121] rounded-xl ">
                  <div className="flex justify-between items-center space-y-5">
                    <h3 className="text-[#e1e8f0] text-xl">{exp.office}</h3>
                    <span className="bg-[#181818] text-[#e1e8f0] lg:px-5 lg:py-3 rounded-md py-2 px-2 w-max text-[14px]">
                      {exp.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="text-[#e1e8f0]">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col gap-6 mt-4">
                    <h4 className="text-[#e1e8f0] lg:text-[18px] text-[14px]">
                      {exp.description}
                    </h4>
                    <ul className="list-disc ml-5">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-[#989898] lg:text-[16px] text-[14px]"
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-6 mt-4">
                    <ul className="list-disc flex gap-2 items-center flex-wrap">
                      {exp.technologies.map((techs, idx) => (
                        <li
                          key={idx}
                          className="text-center text-[#e1e8f0] text-[12px] lg:p-3 bg-[#181818] rounded-md list-none p-1"
                        >
                          {techs}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
