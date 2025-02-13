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
    BASE: "BASE-NEGRA"
  });
  const [selectingGroup, setSelectingGroup] = useState("RUEDAS");

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
  };

  const variantsByGroup = {
    RUEDAS: ["ON-RUEDA", "OFF-RUEDAS"],
    ESTANTE: ["ESTANTE-METAL", "ESTANTE-MADERA"],
    ESTANTE_IZQ: ["ON-ESTANTE-IZQ", "OFF-ESTANTE-IZQ"],
    ESTANTE_DER: ["ON-ESTANTE-DER", "OFF-ESTANTE-DER"],
    PUERTAS: ["ON-PUERTAS", "OFF-PUERTAS"],
    TAPA: ["ON-TAPA", "OFF-TAPA"],
    BASE: ["BASE-NEGRA", "BASE-PLATEADA"],
  };

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

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white mt-8 gap-4">
      <model-viewer
        id="model-viewer"
        loading="eager"
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D"
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "70%", height: "70vh", borderRadius: "10px", border: "1px solid #CFCFCF" }}
      />

      <div className="flex flex-col items-center justify-start bg-white p-2 sm:w-1/2 w-screen max-h-[70vh]">
        <section className="flex flex-row items-center justify-center w-full gap-2">
          {Object.keys(variantsByGroup).map((group) => (
            <button
              key={group}
              className={`${selectingGroup === group ? "font-bold underline" : "font-normal"} p-2 text-black`}
              onClick={() => setSelectingGroup(group)}
            >
              {groupNames[group]}
            </button>
          ))}
        </section>

        <div className="flex flex-row flex-wrap items-center justify-center gap-2 p-2 w-full">
          {variantsByGroup[selectingGroup].map((variant) => (
            <button
              key={variant}
              className={`p-2 border-2 rounded-full transition-all w-24 text-center border-lightblue ${
                activeVariants[selectingGroup] === variant ? "text-white bg-lightblue2 font-bold" : "text-zinc-700 bg-lightblue6"
              }`}
              onClick={() => toggleVariant(selectingGroup, variant)}
            >
              {variantNames[variant] || variant}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParrillaModelViewer;
