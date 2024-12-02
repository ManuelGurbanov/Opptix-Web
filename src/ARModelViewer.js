import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const ARModelViewer = ({ modelSrc, controlsContainerId }) => {
  const modelViewerRef = useRef(null);
  const [materialGroups, setMaterialGroups] = useState({});
  const [currentGroup, setCurrentGroup] = useState(2);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    const controlsContainer = document.getElementById(controlsContainerId);

    if (!modelViewer || !controlsContainer) {
      console.error("No se pudo encontrar el modelo o el contenedor de controles.");
      return;
    }

    const handleLoad = async () => {
      await modelViewer.model.updateComplete;
      const materials = modelViewer.model.materials;
      if (!materials.length) {
        console.error("No se encontraron materiales en el modelo.");
        return;
      }

      const groups = {};
      for (const material of materials) {
        await material.ensureLoaded();
        const prefix = material.name.slice(0, 2);
        if (!groups[prefix]) {
          groups[prefix] = [];
        }
        groups[prefix].push(material);
      }

      setMaterialGroups(groups);

      const names = modelViewer.availableVariants;

      const variantSelect = document.createElement("select");
      variantSelect.id = "variant";
      names.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        variantSelect.appendChild(option);
      });

      const defaultOption = document.createElement("option");
      defaultOption.value = "default";
      defaultOption.textContent = "Default";
      variantSelect.appendChild(defaultOption);

      variantSelect.addEventListener("input", async (event) => {
        const selectedVariant = event.target.value === "default" ? null : event.target.value;
        modelViewer.variantName = selectedVariant;
        for (const [groupKey, materials] of Object.entries(groups)) {
          const groupIndex = parseInt(groupKey, 10);
          const isActive = groupIndex <= currentGroup;
          for (const material of materials) {
            await material.ensureLoaded();
            material.setAlphaMode("BLEND");
            const pbr = material.pbrMetallicRoughness;
            const baseColor = pbr.baseColorFactor;
            baseColor[3] = isActive ? 1 : 0;
            pbr.setBaseColorFactor(baseColor);
          }
        }
      });

      controlsContainer.appendChild(variantSelect);

      const reduceButton = document.createElement("button");
      reduceButton.textContent = "Reducir";
      reduceButton.className = "text-white bg-red-500 rounded px-4 py-2 m-2";
      reduceButton.addEventListener("click", () => {
        setCurrentGroup((prev) => Math.max(prev - 1, 0));
      });

      const expandButton = document.createElement("button");
      expandButton.textContent = "Ampliar";
      expandButton.className = "text-white bg-green-500 rounded px-4 py-2 m-2";
      expandButton.addEventListener("click", () => {
        setCurrentGroup((prev) => Math.min(prev + 1, 6));
      });

      controlsContainer.appendChild(reduceButton);
      controlsContainer.appendChild(expandButton);
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, [controlsContainerId]);

  useEffect(() => {
    const updateGroups = async () => {
      for (const [groupKey, materials] of Object.entries(materialGroups)) {
        const groupIndex = parseInt(groupKey, 10);
        const isActive = groupIndex <= currentGroup;
        for (const material of materials) {
          await material.ensureLoaded();
          material.setAlphaMode("BLEND");
          const pbr = material.pbrMetallicRoughness;
          const baseColor = pbr.baseColorFactor;
          baseColor[3] = isActive ? 1 : 0;
          pbr.setBaseColorFactor(baseColor);
        }
      }
    };

    updateGroups();
  }, [currentGroup, materialGroups]);

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