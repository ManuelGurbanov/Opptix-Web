import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";
import { Shadow } from "@react-three/drei";

const ParrillaModelViewer = ({ modelSrc }) => {

  const modelViewerRef = useRef(null);
  const [activeVariants, setActiveVariants] = useState({
    RUEDAS: "OFF-RUEDAS",    
    ESTANTE: "ESTANTE-METAL",
    ESTANTE_IZQ: "OFF-ESTANTE-IZQ",
    ESTANTE_DER: "OFF-ESTANTE-DER",
    PUERTAS: "OFF-PUERTAS", 
    TAPA: "OFF-TAPA",
    BASE: "BASE-NEGRA"
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
    "ON-TAPA-NEGRA": "Negra",
    "ON-TAPA-PLATEADA": "Plateada",
    "BASE-NEGRA": "Negra",
    "BASE-PLATEADA": "Plateada",
  };

  const groupNames = {
    RUEDAS: "Ruedas",
    ESTANTE: "Estante",
    ESTANTE_IZQ: "Estante Izquierdo",
    ESTANTE_DER: "Estante Derecho",
    PUERTAS: "Puertas",
    TAPA: "Tapa",
    BASE: "Base"
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
  const buttonBaseClass = "p-1 text-[8px] border transition-all duration-150 rounded";
  const buttonActiveClass = "bg-blue-500 text-white";
  const buttonInactiveClass = "grayGradientVariant";

  return (
    <div className="relative flex sm:flex-row flex-col items-center justify-center w-full bg-white mt-8 gap-4">
      <model-viewer
        id="model-viewer"
        loading="eager"
        poster="loading.gif"
        poster-size="300px"
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ 
          width: "70%", 
          height: "70vh", 
          minHeight: "250px",
          borderRadius: "10px",
          border: "1px solid #CFCFCF",
        }}
      />

      <div className="flex flex-col items-center justify-start bg-white p-4 border rounded-xl shadow-md sm:w-1/2 w-screen max-h-[70vh]">
        {Object.entries({
          RUEDAS: ["ON-RUEDA", "OFF-RUEDAS"],
          ESTANTE: ["ESTANTE-METAL", "ESTANTE-MADERA"],
          ESTANTE_IZQ: ["ON-ESTANTE-IZQ", "OFF-ESTANTE-IZQ"],
          ESTANTE_DER: ["ON-ESTANTE-DER", "OFF-ESTANTE-DER"],
          PUERTAS: ["ON-PUERTAS", "OFF-PUERTAS"],
          TAPA: ["ON-TAPA-NEGRA","ON-TAPA-PLATEADA", "OFF-TAPA"],
          BASE: ["BASE-NEGRA", "BASE-PLATEADA"],
        }).map(([group, variants]) => (
          <div key={group} className="flex flex-col items-center my-2 w-full">
            <hr className="w-full bg-black mb-1"></hr>
            <div className="flex gap-2 items-center justify-start w-full mt-4">
              <h3 className="text-sm font-bold text-left">{groupNames[group]}</h3>
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