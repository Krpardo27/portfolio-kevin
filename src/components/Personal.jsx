import React from "react";
import personal from "../data/personal.json";
import PC from "/pc.svg";

const Personal = () => {
  const { name, perfil } = personal;

  return (
    <div className="flex text-left flex-col justify-around lg:p-5 p-2 dark:bg-[#1a1a1a] bg-[#fafafa] py-10 w-full">
      <div className="flex justify-center items-center">
        <img
          src={`${perfil}`}
          alt={`${name}`}
          className="rounded-lg min-w-[150px] h-[150px] border-[5px] border-[#292929] text-[24px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex justify-center items-center gap-4">
          <img src={PC} alt="PC" className="w-[32px] h-full" />
          <h1 className="font-primary dark:text-[#e1e8f0] text-grisOscuro text-lg text-center font-bold">
            {personal.name}
          </h1>
        </div>
        <h3 className="text-[#989898] text-[16px] font-semibold">
          {personal.profession}
        </h3>
      </div>
    </div>
  );
};

export default Personal;
