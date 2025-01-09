import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const CarModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

  const changeCarColor = async (color) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    await modelViewer.model.updateComplete;
    const materials = modelViewer.model.materials;

    if (materials.length) {
      for (const material of materials) {
        material.pbrMetallicRoughness.setBaseColorFactor(color);
      }
    }
  };

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = async () => {
      if (!modelViewer) return;
      await modelViewer.model.updateComplete;

      const materials = modelViewer.model.materials;
      if (!materials.length) {
        console.error("No se encontraron materiales en el modelo.");
      }
    };

    modelViewer?.addEventListener("load", handleLoad);

    return () => {
      modelViewer?.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-white">
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
          height: "100%",
        }}
      />

     <div className="w-full flex gap-4 items-center justify-center">
     {colors.map((color) => (
        <button
          key={color}
          onClick={() => changeCarColor(color)}
          className="text-zinc-700 bg-zinc-200 w-12 h-12 px-2 py-1 m-2 rounded-xl ring-1 ring-black hover:scale-105 transition-all duration-75 hover:ring-blue-500 flex items-center justify-center"
        >
            <div className="w-10 h-10 rounded-full aspect-square" style={{ backgroundColor: color }}>

            </div>
        </button>
      ))}
     </div>

    </div>
  );
};

export default CarModelViewer;
