import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const CarModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);
  const [variantOptions, setVariantOptions] = useState({});
  const [activeVariants, setActiveVariants] = useState({});

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const fetchVariants = async () => {
      const modelViewer = modelViewerRef.current;
      if (!modelViewer) return;
    
      await modelViewer.updateComplete;
    
      // Esperar hasta que availableVariants no esté vacío
      let retries = 10;
      while ((!modelViewer.availableVariants || modelViewer.availableVariants.length === 0) && retries > 0) {
        console.log("Esperando variantes...");
        await new Promise((resolve) => setTimeout(resolve, 500)); // Espera 500ms antes de volver a intentarlo
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
    <div className="relative flex sm:flex-row-reverse flex-col items-center justify-center w-full bg-white mt-8 gap-4">
      <model-viewer
        id="model-viewer"
        loading="eager"
        poster="/poster.jpg"
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ 
          width: "100%", 
          height: "70vh", 
          minHeight: "250px",
          borderRadius: "10px",
          border: "1px solid #CFCFCF",
        }}
      />

      <div className="flex flex-col items-center justify-start bg-white p-4 border rounded-xl shadow-md sm:w-1/2 w-screen max-h-[70vh]">
      {Object.entries(variantOptions).map(([group, variants]) => (
        <div key={group} className="flex flex-col items-center my-2 w-full">
          <hr className="w-full bg-black mb-2"></hr>
          <div className="flex gap-2 items-center justify-start w-full">
            <h3 className="text-sm font-bold text-left">{group}</h3>
            {variants.length === 0 ? (
              <p className="text-xs text-gray-500">No hay variantes</p>
            ) : (
              variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => toggleVariant(group, variant)}
                  className={`p-1 text-[8px] border transition-all duration-150 rounded ${activeVariants[group] === variant ? "bg-blue-500 text-white" : "grayGradientVariant"}`}
                >
                  {variant}
                </button>
              ))
            )}
          </div>
        </div>
      ))}

      </div>
    </div>
  );
};

export default CarModelViewer;
