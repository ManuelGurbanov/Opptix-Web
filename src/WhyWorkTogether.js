import React, { useState, useEffect } from "react";
import { translate } from "./Translations";

function WhyWorkTogether({ language }) {
  const reasons = [
    { id: 0, reason: "Reducción de devoluciones", percentage: "+66%" },
    { id: 1, reason: "Reducción de costos de atención al cliente", percentage: "+30%" },
    { id: 2, reason: "Potencia tus ventas", percentage: "+40%" },
    { id: 4, reason: "Incremento del ticket promedio con configuradores 3D", percentage: "+20%" },
  ];

  return (
    <div className="w-screen text-black flex flex-col items-center justify-center relative">
      <div className="flex sm:flex-col items-center w-full px-6 sm:mb-6 mb-4">
        <img src="img/icon.webp" className="sm:w-12 w-8" alt="Icon" />
        <h1 className="font-bold text-xl w-full text-center sm:mt-3">
          {translate("workTogether", language)}
        </h1>
      </div>
      <div 
        className="flex flex-row gap-4 overflow-x-scroll sm:overflow-auto w-full min-w-max items-center justify-start sm:justify-start h-48 pl-4 pr-4"
      >
        <div className="flex flex-row w-screen items-center justify-start sm:justify-center h-48 pl-4 pr-4">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="text-center relative mr-4 ml-4 bg-lightblue workTogetherBackground shadow-sm group shadow-lightblue text-lightblue3 hover:text-lightblue2 italic rounded-lg p-5 sm:h-[168px] sm:w-[20vw] h-[153px] w-[258px] flex-shrink-0 flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-150"
          >
            <div className="flex flex-col items-center justify-center h-full w-full text-white sm:text-lightblue5 text-right">
              <h1 className="text-6xl w-full">{reason.percentage}</h1>
              <h1 className="text-xs">{reason.reason}</h1>
            </div>
          </div>
        ))}


        </div>

      </div>
    </div>
  );
}

export default WhyWorkTogether;
