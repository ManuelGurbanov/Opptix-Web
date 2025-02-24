import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Cargar el modelo GLTF
const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const UploaderViewer = () => {
  const [modelUrl, setModelUrl] = useState(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".glb")) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
    } else {
      alert("Por favor sube un archivo .glb");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Input de archivo fuera del Canvas */}
      <input
        type="file"
        accept=".glb"
        onChange={handleFileUpload}
        className="mb-4 p-2 border rounded-lg bg-white shadow-sm"
      />

      {modelUrl ? (
        <div style={{ width: "80vw", height: "60vh", minHeight: "250px", borderRadius: "10px", border: "1px solid #CFCFCF" }}>
          {/* Aquí se renderiza el Canvas para Three.js */}
          <Canvas>
                <ambientLight intensity={0.9} />
                <directionalLight position={[5, 5, 5]} intensity={6} />
              <OrbitControls />
              <Model url={modelUrl} />
          </Canvas>
        </div>
      ) : (
        <p className="text-gray-500">Sube un archivo .glb para visualizarlo.</p>
      )}
    </div>
  );
};

export default UploaderViewer;
