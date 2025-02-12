import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const VARIANT_COLORS = {
  "EXT-BLANCO": "#FFFFFF",
  "EXT-AZUL": "#0000FF",
  "EXT-NEGRO": "#000000",
  "EXT-ROJO": "#FF0000",
  "LINEAS-CELESTE": "#00BFFF",
  "LINEAS-ROJAS": "#DC143C",
  "LINEAS-AMARILLAS": "#FFD700",
  "LINEAS-BLANCAS": "#FFFFFF",
  "CUERO-NEGRO": "#000000",
  "CUERO-ROJO": "#8B0000",
  "CUERO-CAMEL": "#C19A6B",
  "CUERO-BLANCO": "#FFFFFF",
  "CUERO-AMARILLO": "#FFD700",
};

const CarModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);
  const [variantOptions, setVariantOptions] = useState({});
  const [activeVariants, setActiveVariants] = useState({});
  const [selectingGroup, setSelectingGroup] = useState("EXT");

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

    setActiveVariants((prev) => ({
      ...prev,
      [category]: variant,
    }));
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white mt-4 gap-2">
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
          width: "60vw",
          height: "60vh",
          minHeight: "250px",
          borderRadius: "10px",
          border: "1px solid #CFCFCF",
        }}
      />

      <div className="flex flex-col items-center justify-start bg-white p-2 sm:w-1/2 w-screen max-h-[70vh]">
        <section className="flex flex-row items-center justify-center w-full gap-2">
          {["EXT", "LINEAS", "CUERO"].map((group) => (
            <button
              key={group}
              className={`${
                selectingGroup === group ? "font-bold underline" : "font-normal"
              } p-2 text-black`}
              onClick={() => setSelectingGroup(group)}
            >
              {group}
            </button>
          ))}
        </section>

        <div className="flex flex-row items-center justify-center gap-4 p-2 w-full">
          {variantOptions[selectingGroup]?.map((variant) => (
            <button
              key={variant}
              className="w-10 h-10 rounded-full border-2 transition-all"
              style={{
                backgroundColor: VARIANT_COLORS[variant] || "gray",
                borderColor: activeVariants[selectingGroup] === variant ? "black" : "gray",
              }}
              onClick={() => toggleVariant(selectingGroup, variant)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarModelViewer;
