import React from "react";
import { HiOutlineCode, HiMusicNote } from "react-icons/hi";
import { MdMovie } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { FaWalking, FaMusic } from "react-icons/fa";

const Hobbies = () => {
  return (
    <>
      <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#a1fc94]">
        <h3 className="text-2xl font-bold text-[#a5fa98]">
          <span className="text-[#e1e8f0] ">Intereses</span> personales
        </h3>
      </div>
      <section className="grid lg:grid-cols-2 grid-cols-1 w-full gap-5 mt-5">
        <div className="bg-[#212121] p-5 flex w-full items-center gap-5 rounded-md">
          <HiOutlineCode className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="text-[#e1e8f0]">Programar</h3>
            <p className="text-[#989898]">
              Realizo distintos cursos de programación en
              distintas plataformas
            </p>
          </div>
        </div>
        <div className="bg-[#212121] p-5 flex w-full items-center gap-5 rounded-md">
          <MdMovie className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="text-[#e1e8f0]">Cine</h3>
            <p className="text-[#989898]">
              Me gusta el cine, el terror y la acción
            </p>
          </div>
        </div>
        <div className="bg-[#212121] p-5 flex w-full items-center gap-5 rounded-md">
          <FaGamepad className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="text-[#e1e8f0]">Jugar video juegos</h3>
            <p className="text-[#989898]">Apasionado de los Video Juegos</p>
          </div>
        </div>
        <div className="bg-[#212121] p-5 flex w-full items-center gap-5 rounded-md">
          <FaWalking className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="text-[#e1e8f0]">Caminar</h3>
            <p className="text-[#989898]">Recorrer lugares escondidos</p>
          </div>
        </div>
        <div className="bg-[#212121] p-5 flex w-full items-center gap-5 rounded-md">
          <HiMusicNote className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="text-[#e1e8f0]">Música</h3>
            <p className="text-[#989898]">Me encanta la música</p>
          </div>
        </div>
        <div className="bg-[#212121] p-5 flex w-full items-center gap-5 rounded-md">
          <HiOutlineCode className="bg-[#181818] w-[50px] h-[50px] rounded-full p-2 border-[5px] border-[#292929] text-[#989898] " />
          <div className="flex flex-col">
            <h3 className="text-[#e1e8f0]">Jugar video juegos</h3>
            <p className="text-[#989898]">Apasionado de los Video Juegos</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
