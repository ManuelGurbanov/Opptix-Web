import React, { useState, useEffect } from "react";
import { translate } from "./Translations";

function WhyWorkTogether({ language }) {
  const reasons = [
    {
      id: 0,
      reason: "Reducción de devoluciones",
      percentage: "+66%",
    },
    {
      id: 1,
      reason: "Reducción de costos de atención al cliente",
      percentage: "+30%",
    },
    {
      id: 2,
      reason: "Potencia tus ventas",
      percentage: "+40%",
    },
    {
      id: 3,
      reason: "Mejora el contenido visual",
      percentage: "+75%",
    },
    {
      id: 4,
      reason:
        "Incremento del ticket promedio, mediante cross-felling con configuradores 3D",
      percentage: "+20%",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reasonsPerPage, setReasonsPerPage] = useState(3);
  const totalPages = Math.ceil(reasons.length / reasonsPerPage);

  useEffect(() => {
    const updateReasonsPerPage = () => {
      if (window.innerWidth <= 640) {
        setReasonsPerPage(1);
      } else {
        setReasonsPerPage(3);
      }
    };

    updateReasonsPerPage();
    window.addEventListener("resize", updateReasonsPerPage);

    return () => window.removeEventListener("resize", updateReasonsPerPage);
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
      <img src="img/icon.webp" className="w-12" alt="Icon" />
      <h1 className="font-bold text-xl w-full text-center mt-3 mb-3">
        {translate("workTogether", language)}
      </h1>
      <section className="relative flex flex-col items-center w-full p-8 gap-8">
        <div className="relative w-full">
          {/* Contenedor principal con posición relativa */}
          <div className="flex justify-center gap-8 w-full">
            {reasons.slice(currentIndex, currentIndex + reasonsPerPage).map((reason) => (
              <div
                key={reason.id}
                className="text-center relative lightblueGradient shadow-sm group shadow-lightblue text-lightblue3 hover:text-lightblue2 italic rounded-lg p-5 w-[410px] h-36 flex items-center justify-center font-bold text-xl transition-all duration-150"
              >
                {reason.reason}

                {reason.percentage && (
                  <div
                    className="absolute top-0 -translate-y-6 left-1/2 transform -translate-x-1/2 w-[120px] bg-lightblue3 ring-lightblue4 ring-[1px] bg-opacity-40 group-hover:bg-lightblue2 p-2 rounded-full flex items-center justify-center z-50 transition-all duration-150"
                  >
                    <span className="text-3xl text-lightblue4 group-hover:text-white font-bold">
                      {reason.percentage}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={goToPreviousPage}
            className="absolute top-1/2 -translate-y-1/2 left-0 sm:translate-x-0 -translate-x-8 text-black p-4 rounded-full bg-white shadow-lg hover:bg-gray-200 transition-all duration-150 z-50"
            disabled={currentIndex === 0}
          >
            &lt;
          </button>

          <button
            onClick={goToNextPage}
            className="absolute top-1/2 -translate-y-1/2 right-0 sm:translate-x-0 translate-x-8 text-black p-4 rounded-full bg-white shadow-lg hover:bg-gray-200 transition-all duration-150 z-50"
            disabled={currentIndex + reasonsPerPage >= reasons.length}
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
}

export default WhyWorkTogether;
