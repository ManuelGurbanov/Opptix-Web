import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const ARModelViewer = ({ modelSrc, controlsContainerId, textures }) => {
  const modelViewerRef = useRef(null);
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = async () => {
      if (!modelViewer.model) {
        console.error("No se pudo cargar el modelo.");
        return;
      }

      const materials = modelViewer.model.materials;
      if (!materials.length) {
        console.error("No se encontraron materiales en el modelo.");
        return;
      }

      const loadTexture = async (url) => {
        const image = new Image();
        image.src = url;
        await image.decode();
        return modelViewer.createTexture(image);
      };

      for (const material of materials) {
        material.name = material.name.trim();
        console.log(`Material: ${material.name}`);

        if (textures && textures[material.name]) {
          const textureUrl = textures[material.name];
          const texture = await loadTexture(textureUrl);

          material.pbrMetallicRoughness.setBaseColorTexture(texture);
        }
      }

      const controlsContainer = document.getElementById(controlsContainerId);
      if (!controlsContainer) {
        console.error("No se encontró el contenedor para los controles.");
        return;
      }

      controlsContainer.innerHTML = "";

      const groupMaterials = (suffix) =>
        materials.filter(
          (material) =>
            material.name.endsWith(suffix) || material.name.includes(suffix)
        );

      const group2 = [
        ...groupMaterials("2"),
        ...materials.filter(
          (material) => material.name === "02-madera base grande"
        ),
      ];

      const group3 = [
        ...groupMaterials("3"),
        ...materials.filter(
          (material) => material.name === "03-madera base grande"
        ),
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

      // Botón de Ampliar/Reducir
      const button = document.createElement("button");
      button.className = "text-white bg-blue-500 rounded px-4 py-2 m-2";

      const updateButtonText = (nextIndex) => {
        if (nextIndex === 2) {
          button.textContent = "Reducir";
          button.className = "text-white bg-red-500 rounded px-4 py-2 m-2";
        } else {
          button.textContent = "Ampliar";
          button.className = "text-white bg-blue-500 rounded px-4 py-2 m-2";
        }
      };

      updateButtonText(groupIndex);

      button.addEventListener("click", () => {
        setGroupIndex((prevIndex) => {
          const nextIndex = prevIndex === 3 ? 1 : prevIndex + 1;
          changeGroupState(nextIndex);
          updateButtonText(nextIndex);
          return nextIndex;
        });
      });

      controlsContainer.appendChild(button);

      // Botón de cambio de textura
      const textureButton = document.createElement("button");
      textureButton.className = "text-white bg-gray-500 rounded px-4 py-2 m-2";
      textureButton.textContent = "Cambiar Textura";

      let textureKeys = Object.keys(textures);
      let currentTextureIndex = 0;

      textureButton.addEventListener("click", async () => {
        try {
          // Ciclo entre las claves de texturas
          currentTextureIndex = (currentTextureIndex + 1) % textureKeys.length; 
          const selectedTextureKey = textureKeys[currentTextureIndex];
      
          if (!textures[selectedTextureKey]) {
            console.error("Textura no encontrada para la clave:", selectedTextureKey);
            return;
          }
      
          const textureUrl = textures[selectedTextureKey];
          console.log(`Cargando textura: ${textureUrl}`);
      
          // Cargar la nueva textura
          const texture = await loadTexture(textureUrl);
      
          // Aplicar la textura a todos los materiales
          materials.forEach((material) => {
            material.pbrMetallicRoughness.setBaseColorTexture(texture);
          });
      
          console.log(`Textura aplicada: ${selectedTextureKey}`);
        } catch (error) {
          console.error("Error al cambiar la textura:", error.message || error);
        }
      });
      
      

      controlsContainer.appendChild(textureButton);
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, [controlsContainerId, groupIndex, textures]);

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
