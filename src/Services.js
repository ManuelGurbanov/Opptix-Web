import React, { useState } from "react";
import { translate } from "./Translations";

function Services({ language, services }) {
  const [actualService, setActualService] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // Estado para controlar la página actual
  const servicesPerPage = 3; // Número de servicios por página en pantallas pequeñas
  const totalPages = Math.ceil(services.length / servicesPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * servicesPerPage;
  const visibleServices = services.slice(startIndex, startIndex + servicesPerPage);

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen mt-20">
      {/* Menú para pantallas grandes */}
      <div className="hidden sm:flex justify-center items-center p-4 grayGradientVariant text-black gap-4 h-[30px] z-30 min-w-[40vw] w-[90vw] m-0 ring-1 ring-zinc-300 rounded-lg">
        {services.map((service, index) => (
          <button
            onClick={() => setActualService(service.id)}
            key={index}
            className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
              actualService === service.id ? "font-bold" : ""
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>

        {/* Pantallas chicas, ignorar */}
      <div className="absolute top-[10vh] flex sm:hidden justify-end items-center p-4 text-black gap-4 h-[8vh] z-30 min-w-[40vw] w-[96vw] m-0">
        {visibleServices.map((service, index) => (
          <button
            onClick={() => setActualService(service.id)}
            key={index}
            className={`hover:scale-105 text-[10px] text-center w-24 transition ease-in cursor-pointer duration-75 smallGradient h-12 p-2 rounded-2xl ${
              actualService === service.id ? "opacity-100" : "opacity-60"
            }`}
          >
            {service.name}
          </button>
        ))}

        {services.length > servicesPerPage && (
          currentPage < totalPages - 1 ? (
            <button
              onClick={goToNextPage}
              className="hover:scale-105 text-[10px] text-center w-8 transition ease-in cursor-pointer duration-75 smallGradient ring-[1px] ring-zinc-400 h-12 rounded-2xl"
            >
              &gt;
            </button>
          ) : (
            <button
              onClick={goToPreviousPage}
              className="hover:scale-105 text-[10px] text-center w-8 transition ease-in cursor-pointer duration-75 smallGradient h-12 rounded-2xl"
            >
              &lt;
            </button>
          )
        )}
      </div>

      <div className="w-full flex flex-col gap-2 h-full sm:px-24 p-4 mt-5 items-start justify-center">
        <div className="w-full h-full">
          {services[actualService].component}
        </div>
      </div>
    </div>
  );
}

export default Services;
