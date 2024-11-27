import React, { useEffect, useRef } from "react";
import "@google/model-viewer";

const ARModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);

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

      console.log("Materiales disponibles:", materials.map((mat) => mat.name));

      const controlsContainer = document.querySelector("#material-controls");
      controlsContainer.innerHTML = "";

      const groupMaterials = (suffix) =>
        materials.filter((material) => material.name.endsWith(suffix));

      const group2 = groupMaterials("2");
      const group3 = groupMaterials("3");

      console.log("Materiales en el grupo 2:", group2.map((mat) => mat.name));
      console.log("Materiales en el grupo 3:", group3.map((mat) => mat.name));

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

      deactivateGroup(group2);
      deactivateGroup(group3);

      const createGroupButton = (group, groupName) => {
        const button = document.createElement("button");
        button.textContent = `${groupName}`;
        button.className = "text-white bg-blue-500 rounded px-4 py-2 m-2";

        let isGroupVisible = false;

        const updateButtonStyle = () => {
          button.className = `rounded px-4 py-2 m-2 ${
            isGroupVisible ? "bg-green-500" : "bg-red-500"
          } text-white`;
        };

        updateButtonStyle();

        button.addEventListener("click", () => {
          const animationDuration = 1000;
          const startTimestamp = performance.now();

          const animateGroup = (currentTimestamp) => {
            const elapsed = currentTimestamp - startTimestamp;
            const delta = elapsed / animationDuration;
            const alpha = isGroupVisible ? 1 - delta : delta;

            group.forEach((material) => updateAlphaValue(material, alpha));

            if (elapsed < animationDuration) {
              requestAnimationFrame(animateGroup);
            } else {
              const finalAlpha = isGroupVisible ? 0 : 1;
              group.forEach((material) => updateAlphaValue(material, finalAlpha));
              isGroupVisible = !isGroupVisible;
              updateButtonStyle();
            }
          };

          requestAnimationFrame(animateGroup);
        });

        controlsContainer.appendChild(button);
      };

      createGroupButton(group2, "Estanteria del Medio");
      createGroupButton(group3, "Estanteria de Arriba");
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-zinc-700 rounded-xl ring-1 ring-black">
      <model-viewer
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "60vw", height: "60vh" }}
        className="border-4 border-blue-500 rounded-lg shadow-lg"
      ></model-viewer>

      <div id="material-controls" className="mt-4 bg-white p-4 rounded shadow-lg"></div>
    </div>
  );
};

export default ARModelViewer;