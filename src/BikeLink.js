import React, { useEffect } from 'react';

const BikeLink = () => {
  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");
    setTimeout(() => {
      if (modelViewer.canActivateAR) {
        modelViewer.activateAR();
      }
    }, 500);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white">
      <model-viewer
        id="bike-model"
        src="/models/bicicleta.glb"
        loading="eager"
        poster="loading.gif"
        alt="Modelo 3D en AR/VR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        xr-mode="immersive-vr"
        className="w-full h-full object-contain rounded-lg"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BikeLink;