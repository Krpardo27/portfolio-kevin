import React from "react";
import { FaCubes } from "react-icons/fa";
import { PageWrapper } from "../components/PageWrapper";
import { FaUniversity } from "react-icons/fa";

import educaction from "../data/education.json";

const Education = () => {
  return (
    <PageWrapper>
      <div
        id="education"
        className="relative flex flex-col dark:bg-[#1a1a1a] bg-[#fafafa] lg:p-12 p-2 overflow-y-auto scrollbar-custom max-w-[1300px] overflow-auto mx-auto lg:rounded-lg h-full lg:m-5 drop-shadow-lg"
      >
        <div className="absolute w-16 h-16 border-t-[3px] border-l-[3px] border-dashed dark:border-[#a5fa98] border-grisOscuro lg:top-12 lg:left-12 top-2 left-2"></div>
        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex items-center gap-3 mt-10">
            <FaCubes className="text-[#989898] text-[30px]" />
            <h2 className="font-primary text-3xl text-center text-[#6a7178] font-bold ">
              Esta es mi
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <h3 className="font-primary flex gap-5 lg:text-5xl text-3xl font-bold text-grisOscuro dark:text-[#6a7178] tracking-widest mt-0 lg:mt-5">
              Formación
              <span className="text-[#a5fa98] hidden lg:flex">Educativa</span>
            </h3>
          </div>
        </div>

        <div className="lg:mt-20 mt-10">
          <div className="flex flex-col w-full gap-10 items-center relative px-5 pb-20">
            {educaction.map((edu, index) => (
              <div
                key={index}
                className="flex w-full gap-5 items-start relative h-full"
              >
                {/* Imagen + línea */}
                <div className="lg:w-1/6 flex flex-col items-center relative z-10">
                  <div className="relative">
                    <div className="lg:relative absolute lg:w-full lg:h-full w-[45px] h-[45px] transform -translate-x-1/2 translate-y-0 z-0 -top-3 left-3">
                      <img
                        src={`/education/${edu.img}`}
                        alt={edu.company}
                        className="lg:w-[100px] lg:h-[100px] h-full rounded-full object-contain lg:border-[3px] dark:border-[#252525] border-black bg-white"
                      />
                      {/* Línea vertical (solo si no es el último item) */}
                      {index !== educaction.length - 1 && (
                        <div className="hidden lg:flex absolute left-[32px] lg:top-21 lg:left-1/2 lg:w-[2px] w-[1px] bg-[#252525] lg:h-[340px] transform -translate-x-1/2 translate-y-0 z-0"></div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:w-5/6 w-full lg:px-[50px] lg:py-[50px] px-5 py-5 dark:bg-[#212121] bg-[#FBFBFB] rounded-xl shadow-lg">
                  <div className="flex lg:flex-row flex-col w-full justify-between lg:items-center space-y-2">
                    <h3 className="dark:text-[#e1e8f0] lg:text-xl">
                      {edu.title}
                    </h3>
                    <span className="bg-[#181818] text-[#e1e8f0] lg:px-5 lg:py-3 rounded-md py-2 px-2 w-max text-[14px]">
                      {edu.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="dark:text-[#e1e8f0]">{edu.institution}</h3>
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

export default Education;
