import React, { useEffect, useRef } from "react";
import "@google/model-viewer";

const Viewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = () => {
      if (!modelViewer.model) {
        console.error("Error al cargar el modelo.");
        return;
      }

      console.log("Modelo cargado con éxito");
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <model-viewer
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        className="w-full h-full object-contain"
        style={{ width: "100%", height: "100%", display: "block" }}
      ></model-viewer>
    </div>
  );
};

export default Viewer;
