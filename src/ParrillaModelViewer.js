import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";
import { translate } from "./Translations";

const ParrillaModelViewer = ({ modelSrc, setTotalPriceParrilla, language}) => {
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

  const VARIANT_PRICES = {
    "ON-RUEDA": 100,
    "OFF-RUEDAS": 0,
    "ESTANTE-METAL": 200,
    "ESTANTE-MADERA": 300,
    "ON-ESTANTE-IZQ": 100,
    "OFF-ESTANTE-IZQ": 0,
    "ON-ESTANTE-IZQ-CLARO": 200,
    "ON-ESTANTE-DER": 100,
    "OFF-ESTANTE-DER": 0,
    "ON-ESTANTE-DER-CLARO": 200,
    "ON-PUERTAS": 100,
    "OFF-PUERTAS": 0,
    "ON-TAPA-NEGRA": 100,
    "ON-TAPA-PLATEADA": 200,
    "OFF-TAPA": 0,
    "BASE-NEGRA": 100,
    "BASE-PLATEADA": 200,
  };

  const variantNames = {
    "ON-RUEDA": "Con Ruedas",
    "OFF-RUEDAS": "Sin Ruedas",
    "ESTANTE-METAL": "Estante Metálico",
    "ESTANTE-MADERA": "Estante de Madera",
    "ON-ESTANTE-IZQ": "Oscuro",
    "OFF-ESTANTE-IZQ": "Desactivado",
    "ON-ESTANTE-IZQ-CLARO": "Claro",
    "ON-ESTANTE-DER": "Oscuro",
    "OFF-ESTANTE-DER": "Desactivado",
    "ON-ESTANTE-DER-CLARO": "Claro",
    "ON-PUERTAS": "Madera",
    "OFF-PUERTAS": "Desactivadas",
    "ON-TAPA-NEGRA": "Negra",
    "ON-TAPA-PLATEADA": "Plateada",
    "OFF-TAPA": "Desactivada",
    "BASE-NEGRA": "Negra",
    "BASE-PLATEADA": "Plateada",
  };

  const variantNamesEn = {
    "ON-RUEDA": "Enabled",
    "OFF-RUEDAS": "Disabled",
    "ESTANTE-METAL": "Metal Shelf",
    "ESTANTE-MADERA": "Wooden Shelf",
    "ON-ESTANTE-IZQ": "Dark",
    "OFF-ESTANTE-IZQ": "Disabled",
    "ON-ESTANTE-IZQ-CLARO": "Light",
    "ON-ESTANTE-DER": "Dark",
    "OFF-ESTANTE-DER": "Disabled",
    "ON-ESTANTE-DER-CLARO": "Light",
    "ON-PUERTAS": "Dark Wood",
    "ON-PUERTAS-CLARA": "Light Wood",
    "OFF-PUERTAS": "Disabled",
    "ON-TAPA-NEGRA": "Black",
    "ON-TAPA-PLATEADA": "Silver",
    "OFF-TAPA": "Disabled",
    "BASE-NEGRA": "Black",
    "BASE-PLATEADA": "Silver"
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

  const groupNamesEn = {
    RUEDAS: "Wheels",
    ESTANTE: "Shelf",
    ESTANTE_IZQ: "Left Shelf",
    ESTANTE_DER: "Right Shelf",
    PUERTAS: "Doors",
    TAPA: "Cover",
    BASE: "Base"
  };

  const variantsByGroup = {
    TAPA: ["ON-TAPA-PLATEADA","ON-TAPA-NEGRA", "OFF-TAPA"],
    PUERTAS: ["ON-PUERTAS","ON-PUERTAS-CLARA", "OFF-PUERTAS"],
    RUEDAS: ["ON-RUEDA", "OFF-RUEDAS"],
    ESTANTE: ["ESTANTE-METAL", "ESTANTE-MADERA"],
    ESTANTE_IZQ: ["ON-ESTANTE-IZQ", "ON-ESTANTE-IZQ-CLARO", "OFF-ESTANTE-IZQ"],
    ESTANTE_DER: ["ON-ESTANTE-DER", "ON-ESTANTE-DER-CLARO", "OFF-ESTANTE-DER"],
    BASE: ["BASE-NEGRA", "BASE-PLATEADA"],
  };

  const toggleVariant = async (category, variant) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    modelViewer.variantName = variant;
    await modelViewer.model.updateComplete;

    setActiveVariants((prev) => {
      const newVariants = { ...prev, [category]: variant };
      updateTotalPrice(newVariants, prev[category]);
      return newVariants;
    });

    updateTotalPrice({ ...activeVariants, [category]: variant });
  };

  const [priceChange, setPriceChange] = useState(null);
  const BASE_PRICE = 1500;

  const updateTotalPrice = (variants, prevVariant) => {
    const additionalCost = Object.values(variants).reduce((sum, variant) => sum + (VARIANT_PRICES[variant] || 0), 0);
    const newTotal = BASE_PRICE + additionalCost;
    
    if (prevVariant) {
      const priceDiff = (VARIANT_PRICES[variants[selectingGroup]] || 0) - (VARIANT_PRICES[prevVariant] || 0);
      setPriceChange(priceDiff);
      setTimeout(() => setPriceChange(null), 1000);
    }

    setTotalPriceParrilla(newTotal);
  };

  const reloadModel = async () => {
    await toggleVariant("RUEDAS", "OFF-RUEDAS");
    await toggleVariant("ESTANTE", "ESTANTE-METAL");
    await toggleVariant("ESTANTE_IZQ", "OFF-ESTANTE-IZQ");
    await toggleVariant("ESTANTE_DER", "OFF-ESTANTE-DER");
    await toggleVariant("PUERTAS", "OFF-PUERTAS");
    await toggleVariant("TAPA", "OFF-TAPA");
    await toggleVariant("BASE", "BASE-NEGRA");
  }

  const [isOpen, setIsOpen] = useState(false);

  
  const handleAnimation = () => {
    const button = document.querySelector("#open-button");
    const modelViewer = document.querySelector("#model-viewer");
    if (modelViewer) {
      modelViewer.play();
      button.disabled = true;
      setTimeout(() => {
        modelViewer.pause();
        button.disabled = false;
        setIsOpen((prev) => !prev);
      }, 2000);
    }
  };



  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white mt-4 gap-4">
      {priceChange !== null && (
        <div className="absolute top-0 bottom-0 right-32 h-12 px-3 mt-2 text-lg font-base text-zinc-400 border border-zinc-400 animate-up z-50 bg-zinc-200 rounded-full flex items-center justify-center">
          {priceChange >= 0 ? `+ $${priceChange}` : `- $${Math.abs(priceChange)}`}
        </div>
      )}
    <model-viewer
      id="model-viewer"
      loading="eager"
      poster="/loading.gif"
      ref={modelViewerRef}
      src={modelSrc}
      alt="Modelo 3D"
      camera-controls
      ar
      ar-modes="webxr scene-viewer quick-look"
      style={{
        width: "80vw",
        minWidth: "450px",
        height: "60vh",
        minHeight: "250px",
        "@media (max-width: 700px)": {
          width: "100vw",
        },
      }}
      onLoad={() => {
        const modelViewer = document.querySelector("#model-viewer");
        modelViewer.availableAnimations = modelViewer.availableAnimations || modelViewer.getAnimations();
      }}
    >
      {activeVariants.TAPA != "OFF-TAPA" && (
        <button
          onClick={handleAnimation}
          className="p-2 border-2 rounded-full transition-all w-24 text-center 
                    border-lightblue text-white bg-lightblue2 font-bold 
                    absolute z-10 bottom-3 left-1/2 -translate-x-1/2"
          id="open-button"
        >
          {isOpen ? translate("close", language) : translate("open", language)}
        </button>

        )}

    </model-viewer>

      <div className="flex flex-col items-center justify-start bg-white p-2 sm:w-3/4 w-screen max-h-[70vh]">
      <section className="flex flex-row items-center justify-center w-full gap-0 overflow-x-auto whitespace-nowrap">
        {Object.keys(variantsByGroup).map((group) => (
          <button
            key={group}
            className="p-2 text-black font-normal"
            onClick={() => setSelectingGroup(group)}
          >
            {selectingGroup === group && <span className="font-normal">• </span>}
            <span className={selectingGroup === group ? "font-bold underline" : "font-normal"}>
              {language === "en" ? groupNamesEn[group] : groupNames[group]}
            </span>
          </button>
        ))}
      </section>


        <div className="flex flex-row items-center justify-center gap-2 p-2 w-full overflow-x-auto whitespace-nowrap">
        <button className="px-2 py-1 text-black bg-lightblue6 border-2 border-lightblue rounded-full flex items-center justify-center
                            hover:bg-lightblue2 hover:text-white transition-all"
                            onClick={() => reloadModel()}>
              <img src="/reload.svg"></img>
          </button>
          {variantsByGroup[selectingGroup].map((variant) => (
            <button
              key={variant}
              className={`p-2 border-2 rounded-full transition-all min-w-24 text-center border-lightblue ${
                activeVariants[selectingGroup] === variant ? "text-white bg-lightblue2 font-bold" : "text-zinc-700 bg-lightblue6"
              }`}
              onClick={() => toggleVariant(selectingGroup, variant)}
            >
              {language === "en" ? variantNamesEn[variant] : variantNames[variant]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParrillaModelViewer;