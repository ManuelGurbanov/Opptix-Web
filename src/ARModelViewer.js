import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const ARModelViewer = ({ modelSrc, controlsContainerId }) => {
  const modelViewerRef = useRef(null);
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = () => {
      if (!modelViewer.model) {
        console.error("No se pudo cargar el modelo.");
        return;
      }

      const materials = modelViewer.model.materials;
      if (!materials.length) {
        console.error("No se encontraron materiales en el modelo.");
        return;
      }

      materials.forEach((material) => {
        material.name = material.name.trim();
      });

      const controlsContainer = document.getElementById(controlsContainerId);
      if (!controlsContainer) {
        console.error("No se encontró el contenedor para los controles.");
        return;
      }

      controlsContainer.innerHTML = "";

      console.log("Materiales del modelo:");
      materials.forEach((material) => {
        console.log(`Material: ${material.name}`);
      });

      const groupMaterials = (suffix) =>
        materials.filter((material) => material.name.endsWith(suffix) || material.name.includes(suffix));

      const group2 = [
        ...groupMaterials("2"),
        ...materials.filter(material => material.name === "02-madera base grande"),
      ];

      const group3 = [
        ...groupMaterials("3"),
        ...materials.filter(material => material.name === "03-madera base grande"),
      ];

      const updateAlphaValue = (material, alpha) => {
        const pbr = material.pbrMetallicRoughness;
        const baseColor = pbr.baseColorFactor;
        baseColor[3] = alpha;
        pbr.setBaseColorFactor(baseColor);
      };

      const deactivateGroup = (group) => {
        group.forEach((mat) => {
          mat.setAlphaMode("BLEND");
          updateAlphaValue(mat, 0);
        });
      };

      const activateGroup = (group) => {
        group.forEach((mat) => {
          mat.setAlphaMode("OPAQUE");
          updateAlphaValue(mat, 1);
        });
      };

      deactivateGroup(group2);
      deactivateGroup(group3);

      const changeGroupState = (currentIndex) => {
        deactivateGroup(group2);
        deactivateGroup(group3);

        if (currentIndex === 1) {
          activateGroup(group2);
        } else if (currentIndex === 2) {
          activateGroup(group2);
          activateGroup(group3);
        }

        setGroupIndex(currentIndex);
      };

      const button = document.createElement("button");
      button.className = "text-white bg-blue-500 rounded px-4 py-2 m-2";

      const updateButtonText = (nextIndex) => {
        button.textContent = nextIndex;

        if (nextIndex === 2) {
          button.textContent = "Reducir";
          button.className = "text-white bg-red-500 rounded px-4 py-2 m-2";
        }else{
          button.textContent = "Ampliar";
          button.className = "text-white bg-blue-500 rounded px-4 py-2 m-2";
        }
      };

      updateButtonText();

      button.addEventListener("click", () => {
        setGroupIndex((prevIndex) => {
          const nextIndex = prevIndex === 3 ? 1 : prevIndex + 1;
          changeGroupState(nextIndex);
          updateButtonText(nextIndex);
          return nextIndex;
        });
      });

      controlsContainer.appendChild(button);
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, [controlsContainerId, groupIndex]);

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
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      ></model-viewer>
    </div>
  );
};

export default ARModelViewer;
