import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ModelLink = () => {
  const modelRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [searchParams] = useSearchParams();
  const modelUrl = searchParams.get("model");

  useEffect(() => {
    const modelViewer = modelRef.current;

    const handleModelLoad = () => {
      console.log("Modelo cargado. Intentando activar AR...");
      setIsModelLoaded(true);

      setTimeout(() => {
        if (modelViewer?.canActivateAR) {
          modelViewer.activateAR();
        } else {
          console.warn("AR no está disponible automáticamente.");
        }
      }, 1);
    };

    if (modelViewer) {
      modelViewer.addEventListener("load", handleModelLoad);
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener("load", handleModelLoad);
      }
    };
  }, []);

  if (!modelUrl) {
    return <div className="text-center text-red-500">No se encontró el modelo.</div>;
  }

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-100">
      <model-viewer
        ref={modelRef}
        id="hotspot-camera-view-demo"
        loading="eager"
        src={modelUrl}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        className="w-full h-full object-contain rounded-xl"
        style={{
          width: "400px",
          height: "400px",
          display: "block",
        }}
      />
    </div>
  );
};

export default ModelLink;
