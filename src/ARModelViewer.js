import React, { useState } from "react";
import "@google/model-viewer";

const ARViewer = () => {

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

        <model-viewer
          src="/models/furniture.glb"
          alt="Modelo 3D"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        ></model-viewer>
    </div>
  );
};

export default ARViewer;
