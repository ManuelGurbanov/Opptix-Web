import React, { useState, useRef } from "react";

const UploaderViewer = () => {
  const [modelUrl, setModelUrl] = useState(null);
  const modelRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
      setModelUrl(url);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <input
        type="file"
        accept=".glb"
        onChange={handleFileUpload}
        className="mb-4 p-2 border rounded-lg bg-white shadow-sm"
      />

      {modelUrl ? (
        <model-viewer
          ref={modelRef}
          src={modelUrl}
          alt="Modelo 3D"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          loading="eager"
          poster="/loading.gif"
          style={{
            width: "60vw",
            height: "60vh",
            minHeight: "250px",
            borderRadius: "10px",
            border: "1px solid #CFCFCF",
          }}
        />
      ) : (
        <p className="text-gray-500">Sube un archivo .glb para visualizarlo.</p>
      )}
    </div>
  );
};

export default UploaderViewer;
