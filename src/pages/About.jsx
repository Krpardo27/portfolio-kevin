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
        className="relative flex flex-col dark:bg-[#1a1a1a] bg-[#fafafa] lg:p-12 p-2 overflow-y-auto scrollbar-custom max-w-[1300px] overflow-auto mx-auto lg:rounded-lg h-full lg:m-5 shadow-lg drop-shadow-lg"
      >
        <div className="absolute w-16 h-16 border-t-[3px] border-l-[3px] border-dashed dark:border-[#a5fa98] border-grisOscuro lg:top-12 lg:left-12 top-2 left-2"></div>
        <div className="flex items-center justify-center w-full flex-col ">
          <div className="flex items-center gap-3 mt-10">
            <FaCubes className="text-[#989898] text-[30px]" />
            <h2 className="font-primary text-3xl text-center text-[#6a7178] font-bold ">
              Hola
            </h2>
          </div>
          <h3 className="font-primary flex gap-5 lg:text-5xl text-3xl font-bold dark:text-[#e1e8f0] text-grisOscuro tracking-widest mt-0 lg:mt-5">
            Soy{" "}
            <span className="dark:lg:text-[#a5fa98] text-grisOscuro">
              Kevin Pardo
            </span>
          </h3>
          <Socials />
          <div className="w-full lg:mt-10 h-full">
            <div className="relative pl-4 before:content-[''] before:absolute before:lg:left-0 before:lg:top-1/2 before:top-1/4 before:lg:-translate-y-1/2 before:w-1 before:h-6 dark:before:bg-[#a1fc94] before:bg-grisOscuro">
              <h3 className="text-2xl font-bold dark:text-[#a5fa98] text-grisOscuro font-secondary ml-5 lg:ml-0">
                <span className="darl:text-[#e1e8f0] ">Un poco</span> sobre
                mí...
              </h3>
            </div>
            <div className="flex lg:flex-row flex-col gap-12 space-y-5 items-center mt-2">
              <img
                src={PC}
                alt=""
                className="lg:w-[220px] lg:h-[220px] w-[120px] h-[120px] hidden lg:block"
              />
              <div className="text-grisOscuro dark:text-white flex flex-col gap-4 text-[16px] p-5">
                <p className="whitespace-pre-line leading-relaxed font-secondary">
                  Soy un desarrollador frontend con experiencia en la creación
                  de SPA y aplicaciones interactivas usando React JS,
                  TypeScript, Tailwind CSS y el stack MERN. Me especializo en
                  construir interfaces modernas, optimizadas y accesibles,
                  asegurando una experiencia fluida para los usuarios.
                </p>
                <p className="whitespace-pre-line leading-relaxed font-secondary">
                  Con 5 años de experiencia, he trabajado en diversos proyectos
                  que incluyen plataformas web, sistemas de gestión y
                  aplicaciones dinámicas.
                </p>
                <p className="whitespace-pre-line leading-relaxed font-secondary">
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
