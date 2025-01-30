import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const variantNamesMap = {
  "ON_PUERTAS": "Con Puertas",
  "OFF_PUERTAS": "Sin Puertas",
  "ESTANTE-IZQ_METAL": "Estante Izquierdo de Metal",
  "ESTANTE-IZQ_MADERA": "Estante Izquierdo de Madera",
  "ESTANTE-DER_METAL": "Estante Derecho de Metal",
  "ESTANTE-DER_MADERA": "Estante Derecho de Madera",
  "RUEDA_GRANDE": "Rueda Grande",
  "RUEDA_PEQUENA": "Rueda Pequeña",
  "TAPA_METAL": "Tapa de Metal",
  "TAPA_MADERA": "Tapa de Madera",
  "PUERTAS_DOBLES": "Puertas Dobles",
  "PUERTAS_SIMPLE": "Puerta Simple",
};

const ParrillaModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);
  const [availableVariants, setAvailableVariants] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    const controlsContainer = document.getElementById("material-controls");
    controlsContainer.className = "flex items-center justify-center bg-transparent p-4 rounded gap-2 w-full";

    if (!modelViewer || !controlsContainer) return;

    const handleLoad = async () => {
      await modelViewer.model.updateComplete;
      setAvailableVariants(modelViewer.availableVariants || []);
    };

    modelViewer.addEventListener("load", handleLoad);
    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };
  }, []);

  const changeVariant = async (event) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const selectedVariant = event.target.value === "default" ? null : event.target.value;
    modelViewer.variantName = selectedVariant;
    await modelViewer.model.updateComplete;
  };

  const showMenuForPart = (part) => {
    const controlsContainer = document.getElementById("material-controls");
    controlsContainer.innerHTML = "";

    if (selectedPart === part) {
      setSelectedPart(null);
      return;
    }

    setSelectedPart(part);

    const filteredVariants = availableVariants.filter((variant) => variant.toUpperCase().includes(part.toUpperCase()));

    if (filteredVariants.length === 0) return;

    const select = document.createElement("select");
    select.className = "text-zinc-700 bg-zinc-200 px-4 py-2 rounded-xl ring-1 ring-black hover:scale-105 transition-all duration-75 hover:ring-blue-500";
    select.innerHTML = `
      ${filteredVariants
        .map((variant) => {
          const variantKey = variant.toUpperCase();
          const displayName = variantNamesMap[variantKey] || variant;
          return `<option value="${variant}">${displayName}</option>`;
        })
        .join("")}
    `;
    select.addEventListener("change", changeVariant);

    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.className = "text-zinc-700 bg-red-200 px-4 py-2 rounded-3xl ring-1 ring-zinc-300 hover:scale-105 transition-all duration-75 hover:ring-blue-500 bg-zinc-200";
    closeButton.addEventListener("click", () => {
      setSelectedPart(null);
      controlsContainer.innerHTML = "";
    });

    controlsContainer.appendChild(select);
    controlsContainer.appendChild(closeButton);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-white">
      <model-viewer
        id="model-viewer"
        loading="eager"
        poster="/poster.jpg"
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Hotspots para seleccionar partes */}
        <button onClick={() => showMenuForPart("ESTANTE")} className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg text-[7px]" slot="hotspot-estante" data-position="0m 0m 0m">
          ESTANTE
        </button>

        <button onClick={() => showMenuForPart("ESTANTE-IZQ")} className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg text-[7px]" slot="hotspot-estante-izq" data-position="-1m 1m 0m">
          ESTANTE IZQ
        </button>

        <button onClick={() => showMenuForPart("ESTANTE-DER")} className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg text-[7px]" slot="hotspot-estante-der" data-position="1m 1m 0m">
          ESTANTE DER
        </button>

        <button onClick={() => showMenuForPart("RUEDA")} className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg text-[7px]" slot="hotspot-rueda" data-position="0m 0m 0.5m">
          RUEDA
        </button>

        <button onClick={() => showMenuForPart("TAPA")} className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg text-[7px]" slot="hotspot-tapa" data-position="0.3m 1.6m 0m">
          TAPA
        </button>

        <button onClick={() => showMenuForPart("PUERTAS")} className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg text-[7px]" slot="hotspot-puertas" data-position="-0.3m 0.5m 0m">
          PUERTAS
        </button>
      </model-viewer>
    </div>
  );
};

export default ParrillaModelViewer;
