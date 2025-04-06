import React from "react";
import PC from "/pc.svg";
import { FaCubes } from "react-icons/fa";
import Socials from "../components/Socials";
import Hobbies from "../components/Hobbies";
import { PageWrapper } from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div
        id="about"
        className="relative flex flex-col bg-[#1a1a1a] lg:p-12 p-2 overflow-y-auto scrollbar-custom max-w-[1350px] overflow-auto mx-auto lg:rounded-lg rounded-lg h-full lg:m-5"
      >
        <div className="absolute w-16 h-16 border-t-[3px] border-l-[3px] border-dashed border-[#a5fa98] lg:top-12 lg:left-12 top-2 left-2"></div>
        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex items-center gap-3 mt-10">
            <FaCubes className="text-[#989898] text-[30px]" />
            <h2 className="text-3xl text-center text-[#6a7178] font-bold ">
              Hola
            </h2>
          </div>
          <h3 className="text-4xl font-bold text-[#e1e8f0] mt-5">
            Soy <span className="text-[#a5fa98]">Kevin Pardo</span>
          </h3>
          <Socials />
          <div className="w-full lg:mt-10 h-full">
            <div className="relative pl-4 before:content-[''] before:absolute before:lg:left-0 before:lg:top-1/2 before:top-1/4 before:lg:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#a1fc94]">
              <h3 className="text-2xl font-bold text-[#a5fa98] ml-5 lg:ml-0">
                <span className="text-[#e1e8f0]">Un poco</span> sobre mí...
              </h3>
            </div>
            <div className="flex lg:flex-row flex-col gap-12 space-y-5 items-center mt-2">
              <img
                src={PC}
                alt=""
                className="lg:w-[220px] lg:h-[220px] w-[120px] h-[120px] hidden lg:block"
              />
              <div className="text-[#e1e8f0] flex flex-col gap-4 text-[16px] p-5">
                <p className="whitespace-pre-line leading-relaxed">
                  Soy un desarrollador frontend con experiencia en la creación
                  de SPA y aplicaciones interactivas usando React JS,
                  TypeScript, Tailwind CSS y el stack MERN. Me especializo en
                  construir interfaces modernas, optimizadas y accesibles,
                  asegurando una experiencia fluida para los usuarios.
                </p>
                <p>
                  Con 5 años de experiencia, he trabajado en diversos proyectos
                  que incluyen plataformas web, sistemas de gestión y
                  aplicaciones dinámicas.
                </p>
                <p>
                  Siempre estoy en constante aprendizaje, explorando nuevas
                  tecnologías y mejores prácticas en desarrollo frontend.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:mt-20 h-full mt-10">
            <Hobbies />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
