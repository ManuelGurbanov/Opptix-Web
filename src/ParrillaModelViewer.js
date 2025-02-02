import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const ParrillaModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);
  const [activeVariants, setActiveVariants] = useState({
    RUEDAS: "OFF-RUEDAS",    
    ESTANTE: "ESTANTE-METAL",
    ESTANTE_IZQ: "OFF-ESTANTE-IZQ",
    ESTANTE_DER: "OFF-ESTANTE-DER",
    PUERTAS: "OFF-PUERTAS", 
    TAPA: "OFF-TAPA",
  });

  const variantNames = {
    "ON-RUEDA": "Con Ruedas",
    "OFF-RUEDAS": "Sin Ruedas",
    "ESTANTE-METAL": "Estante Metálico",
    "ESTANTE-MADERA": "Estante de Madera",
    "ON-ESTANTE-IZQ": "Con Estante Izquierdo",
    "OFF-ESTANTE-IZQ": "Sin Estante Izquierdo",
    "ON-ESTANTE-DER": "Con Estante Derecho",
    "OFF-ESTANTE-DER": "Sin Estante Derecho",
    "ON-PUERTAS": "Con Puertas",
    "OFF-PUERTAS": "Sin Puertas",
    "ON-TAPA": "Con Tapa",
    "OFF-TAPA": "Sin Tapa",
  };

  const groupNames = {
    RUEDAS: "Ruedas",
    ESTANTE: "Estante",
    ESTANTE_IZQ: "Estante Izquierdo",
    ESTANTE_DER: "Estante Derecho",
    PUERTAS: "Puertas",
    TAPA: "Tapa",
  }

  const toggleVariant = async (category, variant) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    modelViewer.variantName = variant;
    await modelViewer.model.updateComplete;

    setActiveVariants((prev) => ({
      ...prev,
      [category]: variant,
    }));
  };

  // Clases generales de botones
  const buttonBaseClass = "px-2 py-1 text-xs border transition-all duration-150 rounded";
  const buttonActiveClass = "bg-blue-500 text-white";
  const buttonInactiveClass = "grayGradientVariant";

  return (
    <div className="relative flex sm:flex-row flex-col items-center justify-center w-full sm:h-full min-h-200vh bg-white mt-6">
      <model-viewer
        id="model-viewer"
        loading="eager"
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "100%", height: "100%", minHeight: "250px" }}
      />

      <div className="flex flex-col items-center justify-center bg-white p-4 border rounded-xl shadow-md sm:w-1/2 w-screen">
        {Object.entries({
          RUEDAS: ["ON-RUEDA", "OFF-RUEDAS"],
          ESTANTE: ["ESTANTE-METAL", "ESTANTE-MADERA"],
          ESTANTE_IZQ: ["ON-ESTANTE-IZQ", "OFF-ESTANTE-IZQ"],
          ESTANTE_DER: ["ON-ESTANTE-DER", "OFF-ESTANTE-DER"],
          PUERTAS: ["ON-PUERTAS", "OFF-PUERTAS"],
          TAPA: ["ON-TAPA", "OFF-TAPA"],
        }).map(([group, variants]) => (
          <div key={group} className="flex flex-col items-center my-2 w-full">
            <hr className="w-full bg-black mb-2"></hr>
            <h3 className="text-sm font-bold text-left w-full mb-1">{groupNames[group]}</h3>
            <div className="flex gap-2 items-center justify-start w-full">
              {variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => toggleVariant(group, variant)}
                  className={`${buttonBaseClass} ${
                    activeVariants[group] === variant ? buttonActiveClass : buttonInactiveClass
                  }`}
                >
                  {variantNames[variant] || variant}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParrillaModelViewer;
