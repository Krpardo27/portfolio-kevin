import React from "react";
import { FaCubes } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PageWrapper } from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="relative flex flex-col dark:bg-[#1a1a1a] bg-[#fafafa] lg:p-12 p-2 overflow-y-auto scrollbar-custom max-w-[1300px] overflow-auto mx-auto lg:rounded-lg  h-full lg:m-5 shadow-lg drop-shadow-lg">
        <div className="absolute w-16 h-16 border-t-[3px] border-l-[3px] border-dashed dark:border-[#a5fa98] border-grisOscuro lg:top-12 lg:left-12 top-2 left-2"></div>
        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex items-center gap-3 mt-10">
            <FaCubes className="text-[#989898] text-[30px]" />
            <h2 className="text-3xl text-center text-[#6a7178] font-bold ">
              No dudes
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <h3 className="font-primary flex gap-5 lg:text-5xl text-3xl font-bold text-grisOscuro dark:text-[#6a7178] tracking-widest mt-0 lg:mt-5">
              En
              <span className="text-[#a5fa98]">Contactarme</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col space-y-10 mt-10 lg:mt-20 h-full">
          <div className="relative pl-4 before:content-[''] before:absolute before:lg:left-0 before:lg:top-1/2 before:top-1/4 before:lg:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#a1fc94]">
            <h3 className="text-2xl font-bold text-[#a5fa98] font-secondary ml-5 lg:ml-0">
              <span className="text-[#e1e8f0]">Un poco</span> sobre mí...
            </h3>
          </div>
          <form className="w-full rounded-2xl">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-5">
              <div className="flex flex-col lg:gap-5">
                <div className="relative mb-4 group">
                  {/* Ícono */}
                  <span className="absolute w-[80px] group-hover:bg-[#a5fa98] group-hover:transition-all duration-300  inset-y-0 left-0 flex items-center pointer-events-none bg-[#242527] rounded-l-xl ">
                    <MdOutlineDriveFileRenameOutline className="text-white w-[70px] group-hover:text-[#121212]" />
                  </span>

                  {/* Input */}
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Tu nombre"
                    className="w-full h-[65px] pl-24 pr-3 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5fa98] bg-[#121212] text-white"
                  />
                </div>
                <div className="relative mb-4 group">
                  {/* Ícono */}
                  <span className="absolute w-[80px] group-hover:bg-[#a5fa98] group-hover:transition-all duration-300 inset-y-0 left-0 flex items-center pointer-events-none bg-[#242527] rounded-l-xl ">
                    <FaPhoneAlt className="text-white w-[70px] group-hover:text-[#121212]" />
                  </span>

                  {/* Input */}
                  <input
                    type="text"
                    id="phone"
                    placeholder="Tu teléfono"
                    className="w-full h-[65px] pl-24 pr-3 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5fa98] bg-[#121212] text-white"
                  />
                </div>
                <div className="relative mb-4 group">
                  {/* Ícono */}
                  <span className="absolute w-[80px] group-hover:bg-[#a5fa98] group-hover:transition-all duration-300  inset-y-0 left-0 flex items-center pointer-events-none bg-[#242527] rounded-l-xl ">
                    <MdEmail className="text-white w-[70px] group-hover:text-[#121212]" />
                  </span>

                  {/* Input */}
                  <input
                    type="text"
                    id="email"
                    placeholder="Tu email"
                    className="w-full h-[65px] pl-24 pr-3 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5fa98] bg-[#121212] text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  id="mensaje"
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                  className="w-full h-full p-3  rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5fa98] bg-[#121212] text-white"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center items-center lg:mt-5 my-2">
              <button
                type="submit"
                className="w-[200px] py-3 rounded-xl font-semibold transition-colors duration-300"
                style={{
                  backgroundColor: "#a5fa98",
                  color: "#333",
                  border: "none",
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
