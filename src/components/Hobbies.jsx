import React from "react";
import { HiOutlineCode, HiMusicNote } from "react-icons/hi";
import { MdMovie } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { FaWalking, FaMusic } from "react-icons/fa";
import { CgGames } from "react-icons/cg";


const Hobbies = () => {
  return (
    <>
      <div className="relative pl-4 before:content-[''] before:absolute before:lg:left-0 before:lg:top-1/2 before:top-1/4 before:lg:-translate-y-1/2 before:w-1 before:h-6 dark:before:bg-[#a1fc94] before:bg-grisOscuro">
        <h3 className="text-2xl text-grisOscuro font-bold dark:text-[#a5fa98] ml-5 lg:ml-0">
          <span className="">Intereses</span> personales
        </h3>
      </div>
      <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-5 lg:mt-5 mt-2 p-5 pb-20">
        <div className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex w-full items-center gap-5 rounded-md drop-shadow-lg">
          <HiOutlineCode className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="dark:text-[#e1e8f0] text-grisOscuro text-lg font-secondary">Programar</h3>
            <p className="text-[#989898] font-secondary">
              Realizo distintos cursos de programación en
              distintas plataformas
            </p>
          </div>
        </div>
        <div className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex w-full items-center gap-5 rounded-md drop-shadow-lg">
          <MdMovie className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="dark:text-[#e1e8f0] text-grisOscuro text-lg font-secondary">Cine</h3>
            <p className="text-[#989898] font-secondary">
              Me gusta el cine, el terror y la acción
            </p>
          </div>
        </div>
        <div className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex w-full items-center gap-5 rounded-md drop-shadow-lg">
          <FaGamepad className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="dark:text-[#e1e8f0] text-grisOscuro text-lg font-secondaryy">Jugar video juegos</h3>
            <p className="text-[#989898] font-secondary">Apasionado de los Video Juegos</p>
          </div>
        </div>
        <div className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex w-full items-center gap-5 rounded-md drop-shadow-lg">
          <FaWalking className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="dark:text-[#e1e8f0] text-grisOscuro text-lg font-secondary">Caminar</h3>
            <p className="text-[#989898] font-secondary">Recorrer lugares escondidos</p>
          </div>
        </div>
        <div className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex w-full items-center gap-5 rounded-md drop-shadow-lg">
          <HiMusicNote className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="dark:text-[#e1e8f0] text-grisOscuro text-lg font-secondary">Música</h3>
            <p className="text-[#989898] font-secondary">Me encanta la música</p>
          </div>
        </div>
        <div className="dark:bg-[#212121] bg-[#FBFBFB] p-5 flex w-full items-center gap-5 rounded-md drop-shadow-lg">
          <CgGames  className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="dark:text-[#e1e8f0] text-grisOscuro text-lg font-secondary">Jugar video juegos</h3>
            <p className="text-[#989898] font-secondary">Apasionado de los Video Juegos</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
