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
        console.log(material.name);
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
        await updateGroups(materialGroups, currentGroup);
      });

      controlsContainer.appendChild(variantSelect);

      const reduceButton = document.createElement("button");
      reduceButton.textContent = "Reducir";
      reduceButton.className = "text-white bg-red-500 rounded px-4 py-2 m-2";
      reduceButton.addEventListener("click", async () => {
        setCurrentGroup((prev) => {
          const newGroup = Math.max(prev - 1, 0);
          updateGroups(materialGroups, newGroup);
          return newGroup;
        });
      });

      const expandButton = document.createElement("button");
      expandButton.textContent = "Ampliar";
      expandButton.className = "text-white bg-green-500 rounded px-4 py-2 m-2";
      expandButton.addEventListener("click", async () => {
        setCurrentGroup((prev) => {
          const newGroup = Math.min(prev + 1, 6);
          updateGroups(materialGroups, newGroup);
          return newGroup;
        });
      });

      controlsContainer.appendChild(reduceButton);
      controlsContainer.appendChild(expandButton);
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, [controlsContainerId]);


  const updateGroups = async (groups, currentGroup) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;
  
    // Obtener todos los materiales actuales, incluidos los de la variante activa.
    const allMaterials = modelViewer.model.materials;
  
    for (const material of allMaterials) {
      await material.ensureLoaded();
  
      const prefix = material.name.slice(0, 2);
      const groupIndex = parseInt(prefix, 10);
      const isActive = groupIndex <= currentGroup;
  
      material.setAlphaMode("BLEND");
      const pbr = material.pbrMetallicRoughness;
      const baseColor = pbr.baseColorFactor;
      const newOpacity = isActive ? 1 : 0;
  
      // Actualizar la opacidad del material.
      baseColor[3] = newOpacity;
      pbr.setBaseColorFactor(baseColor);
  
      // Registrar la acción realizada.
      console.log(`Al material "${material.name}" le dejé opacidad ${newOpacity}`);
    }
  };
  
  
  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;
  
    const handleVariantChange = async () => {
      console.log("Cambiando variante...");
      await modelViewer.model.updateComplete;
  
      await updateGroups(materialGroups, currentGroup);
    };
  
    modelViewer.addEventListener("variantchange", handleVariantChange);
  
    return () => {
      modelViewer.removeEventListener("variantchange", handleVariantChange);
    };
  }, [currentGroup, materialGroups]);
  
  
  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;
  
    const handleVariantChange = async () => {
      console.log(modelViewer.model.materials);
      await modelViewer.model.updateComplete;
      await updateGroups(materialGroups, currentGroup);
    };
  
    modelViewer.addEventListener("variantchange", handleVariantChange);
  
    return () => {
      modelViewer.removeEventListener("variantchange", handleVariantChange);
    };
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
