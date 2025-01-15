import React, { useState, useEffect } from "react";
import { translate } from "./Translations";

function WhyWorkTogether({ language }) {
  const reasons = [
    { id: 0, reason: "Reducción de devoluciones", percentage: "+66%" },
    { id: 1, reason: "Reducción de costos de atención al cliente", percentage: "+30%" },
    { id: 2, reason: "Potencia tus ventas", percentage: "+40%" },
    { id: 3, reason: "Mejora el contenido visual", percentage: "+75%" },
    { id: 4, reason: "Incremento del ticket promedio con configuradores 3D", percentage: "+20%" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reasonsPerPage, setReasonsPerPage] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 640) {
        setReasonsPerPage(reasons.length);
        setIsSmallScreen(true);
      } else {
        setReasonsPerPage(3);
        setIsSmallScreen(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const goToNextPage = () => {
    if (currentIndex + reasonsPerPage < reasons.length) {
      setCurrentIndex(currentIndex + reasonsPerPage);
    }
  };

  const goToPreviousPage = () => {
    if (currentIndex - reasonsPerPage >= 0) {
      setCurrentIndex(currentIndex - reasonsPerPage);
    }
  };

  return (
    <div className="w-screen text-black flex flex-col items-center justify-center relative">
      <div className="flex sm:flex-col items-center w-full px-6">
        <img src="img/icon.webp" className="sm:w-12 w-8" alt="Icon" />
        <h1 className="font-bold text-xl w-full text-center sm:mt-3 sm:mb-6">
          {translate("workTogether", language)}
        </h1>
      </div>
      <div 
        className="flex flex-row gap-4 overflow-x-scroll w-full min-w-max items-center justify-start sm:justify-start h-48 pl-4 pr-4"
      >
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="text-center relative lightblueGradient shadow-sm group shadow-lightblue text-lightblue3 hover:text-lightblue2 italic rounded-lg p-5 w-[250px] h-[160px] sm:w-[550px] flex-shrink-0 flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-150"
          >
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h1 className="text-center">{reason.reason}</h1>
            </div>
            {reason.percentage && (
              <div
                className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-[100px] bg-lightblue3 ring-lightblue4 ring-[1px] bg-opacity-40 group-hover:bg-lightblue2 p-2 rounded-full flex items-center justify-center z-30 transition-all duration-150"
              >
                <span className="text-2xl sm:text-3xl text-lightblue4 group-hover:text-white font-bold">
                  {reason.percentage}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyWorkTogether;
