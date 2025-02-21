import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const VARIANT_COLORS = {
  "EXT-BLANCO": "Blanco",
  "EXT-AZUL": "Azul",
  "EXT-NEGRO": "Negro",
  "EXT-ROJO": "Rojo",
  "LINEAS-CELESTE": "Celeste",
  "LINEAS-ROJAS": "Rojo",
  "LINEAS-AMARILLAS": "Amarillo",
  "LINEAS-BLANCAS": "Blanco",
  "CUERO-NEGRO": "Negro",
  "CUERO-ROJO": "Rojo",
  "CUERO-CAMEL": "Camel",
  "CUERO-BLANCO": "Blanco",
  "CUERO-AMARILLO": "Amarillo",
};

const VARIANT_COLORS_EN = {
  "EXT-BLANCO": "White",
  "EXT-AZUL": "Blue",
  "EXT-NEGRO": "Black",
  "EXT-ROJO": "Red",
  "LINEAS-CELESTE": "Lightblue",
  "LINEAS-ROJAS": "Red",
  "LINEAS-AMARILLAS": "Yellow",
  "LINEAS-BLANCAS": "White",
  "CUERO-NEGRO": "Black",
  "CUERO-ROJO": "Red",
  "CUERO-CAMEL": "Camel",
  "CUERO-BLANCO": "White",
  "CUERO-AMARILLO": "Yellow",
};

const VARIANT_PRICES = {
  "EXT-BLANCO": 500,
  "EXT-AZUL": 600,
  "EXT-NEGRO": 700,
  "EXT-ROJO": 800,
  "LINEAS-CELESTE": 200,
  "LINEAS-ROJAS": 250,
  "LINEAS-AMARILLAS": 300,
  "LINEAS-BLANCAS": 350,
  "CUERO-NEGRO": 1000,
  "CUERO-ROJO": 1200,
  "CUERO-CAMEL": 1500,
  "CUERO-BLANCO": 1300,
  "CUERO-AMARILLO": 1400,
};

const groupNames = {
  "EXT": "Exterior",
  "LINEAS" : "Lineas",
  "CUERO" : "Cuero"
}

const groupNamesEn = {
  "EXT": "Exterior",
  "LINEAS" : "Lines",
  "CUERO" : "Leather"
}

const BASE_PRICE = 20000;

const CarModelViewer = ({ modelSrc , setTotalPriceCar, language }) => {
  const modelViewerRef = useRef(null);
  const [variantOptions, setVariantOptions] = useState({});
  const [activeVariants, setActiveVariants] = useState({});
  const [selectingGroup, setSelectingGroup] = useState("EXT");
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

  const [priceChange, setPriceChange] = useState(null);

  const updateTotalPrice = (variants, prevVariant) => {
    const additionalCost = Object.values(variants).reduce((sum, variant) => sum + (VARIANT_PRICES[variant] || 0), 0);
    const newTotal = BASE_PRICE + additionalCost;
    
    if (prevVariant) {
      const priceDiff = (VARIANT_PRICES[variants[selectingGroup]] || 0) - (VARIANT_PRICES[prevVariant] || 0);
      setPriceChange(priceDiff);
      setTimeout(() => setPriceChange(null), 1000);
    }

    setTotalPriceCar(newTotal);
  };

  const CAMERA_COORDINATES = {
    EXT: { orbit: "90deg 75deg 1500px" },
    LINEAS: { orbit: "20deg 10deg 1300px" },
    CUERO: { orbit: "80deg 20deg 1000px" },
  };
  
  const changeSelectingGroup = (group) => {
    const modelViewer = modelViewerRef.current;
    setSelectingGroup(group);
    if (CAMERA_COORDINATES[group]) {
      modelViewer.cameraOrbit = CAMERA_COORDINATES[group].orbit;
      modelViewer.lookAt = "auto";
      modelViewer.jumpCameraToGoal();
    }
  };

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const fetchVariants = async () => {
      await modelViewer.updateComplete;

      let retries = 10;
      while ((!modelViewer.availableVariants || modelViewer.availableVariants.length === 0) && retries > 0) {
        console.log("Esperando variantes...");
        await new Promise((resolve) => setTimeout(resolve, 500));
        retries--;
      }

      const variants = modelViewer.availableVariants || [];
      console.log("Variantes disponibles:", variants);

      const groupedVariants = { CUERO: [], LINEAS: [], EXT: [] };
      variants.forEach((variant) => {
        if (variant.includes("CUERO")) {
          groupedVariants.CUERO.push(variant);
        } else if (variant.includes("LINEAS")) {
          groupedVariants.LINEAS.push(variant);
        } else if (variant.includes("EXT")) {
          groupedVariants.EXT.push(variant);
        } else {
          console.log("Variante no encontrada:", variant);
        }
      });

      setVariantOptions(groupedVariants);
      const defaultVariants = Object.keys(groupedVariants).reduce((acc, key) => {
        acc[key] = groupedVariants[key][0] || "";
        return acc;
      }, {});
      setActiveVariants(defaultVariants);
    };

    fetchVariants();
  }, []);

  const toggleVariant = async (category, variant) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    modelViewer.variantName = variant;
    await modelViewer.model.updateComplete;
  
    if (CAMERA_COORDINATES[category]) {
      modelViewer.cameraOrbit = CAMERA_COORDINATES[category].orbit;
      modelViewer.lookAt = "auto";
      modelViewer.jumpCameraToGoal();
    }
  
    setActiveVariants((prev) => {
      const newVariants = { ...prev, [category]: variant };
      updateTotalPrice(newVariants, prev[category]);
      return newVariants;
    });
  
    updateTotalPrice({ ...activeVariants, [category]: variant });
  };
  

  const reloadModel = async () => {
    await toggleVariant("EXT", "EXT-NEGRO");
    await toggleVariant("LINEAS", "LINEAS-BLANCAS");
    await toggleVariant("CUERO", "CUERO-ROJO");
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white mt-2 gap-2">

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
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{
          width: "80vw",
          height: "60vh",
          minHeight: "250px",
          borderRadius: "10px",
          border: "1px solid #CFCFCF",
          "@media (max-width: 700px)": {
            width: "100vw",
          },
        }}
      />

      <div className="flex flex-col items-center justify-start bg-white p-2 sm:w-1/2 w-screen max-h-[70vh]">
      <section className="flex flex-row items-center justify-center w-full gap-2">
        {["EXT", "LINEAS", "CUERO"].map((group) => (
          <button
            key={group}
            className="p-2 text-black font-normal"
            onClick={() => changeSelectingGroup(group)}
          >
            {selectingGroup === group && <span className="font-normal">• </span>}
            <span className={selectingGroup === group ? "font-bold underline" : "font-normal"}>
              {language === "en" ? groupNamesEn[group] : groupNames[group]}
            </span>
          </button>
        ))}
      </section>


        <div className="flex flex-row flex-wrap items-center justify-center gap-2 p-2 w-full">
          <button className="px-2 py-1 text-black bg-lightblue6 border-2 border-lightblue rounded-full flex items-center justify-center
                            hover:bg-lightblue2 hover:text-white transition-all"
                            onClick={() => reloadModel()}>
              <img src="/reload.svg"></img>
          </button>
          {variantOptions[selectingGroup]?.map((variant) => (
            <button
              key={variant}
              className={`p-2 border-2 rounded-full  transition-all w-24 text-center border-lightblue ${
                activeVariants[selectingGroup] === variant ? "text-white bg-lightblue2 font-bold" : " text-zinc-700 bg-lightblue6"
              }`}
              onClick={() => toggleVariant(selectingGroup, variant)}
            >
              {language === "en" ? VARIANT_COLORS_EN[variant] : VARIANT_COLORS[variant] || variant}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarModelViewer;