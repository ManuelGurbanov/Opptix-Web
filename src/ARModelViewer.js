import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

const ARModelViewer = ({ modelSrc, controlsContainerId }) => {
  const modelViewerRef = useRef(null);
  const [materialGroups, setMaterialGroups] = useState({});
  const [currentGroup, setCurrentGroup] = useState(6);
  const [menuState, setMenuState] = useState(0);
  const [initialCameraTarget, setInitialCameraTarget] = useState("0m 0m 0m");
  const [initialCameraOrbit, setInitialCameraOrbit] = useState("default");

  const buttonDefaultClass = "grayGradient text-zinc-700 bg-zinc-200 px-4 py-2 rounded-3xl ring-1 ring-zinc-300 hover:scale-105 transition-all duration-75 hover:ring-blue-500";
  const backButtonClass = "text-zinc-700 bg-red-200 px-4 py-2 rounded-3xl ring-1 ring-zinc-300 hover:scale-105 transition-all duration-75 hover:ring-blue-500 bg-zinc-200";
  const resetPivotToDefault = () => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;
  
    modelViewer.cameraTarget = "0m 0.5m 0m";
    console.log(`Reset pivot to ${initialCameraTarget}`);
    modelViewer.cameraOrbit = ("0deg 75deg 105%");
    console.log(`Reset orbit to ${initialCameraOrbit}`);
    modelViewer.updateFraming();
  };

  
  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    const controlsContainer = document.getElementById(controlsContainerId);
    controlsContainer.className = "flex bg-transparent p-4 rounded gap-2 w-full"
    if (!modelViewer || !controlsContainer) {
      console.error("No se pudo encontrar el modelo o el contenedor de controles.");
      return;
    }

    const handleLoad = async () => {
      await modelViewer.model.updateComplete;
      const materials = modelViewer.model.materials;

      setInitialCameraTarget(modelViewer.cameraTarget);
      console.log(`Initial camera target: ${modelViewer.cameraTarget}`);
      setInitialCameraOrbit(modelViewer.cameraOrbit);
      console.log(`Initial camera orbit: ${modelViewer.cameraOrbit}`);

      if (!materials.length) {
        console.error("No se encontraron materiales en el modelo.");
        return;
      }

      const groups = {};
      for (const material of materials) {
        //console.log(material.name);
        await material.ensureLoaded();
        const prefix = material.name.slice(0, 2);
        if (!groups[prefix]) {
          groups[prefix] = [];
        }
        groups[prefix].push(material);
      }

      setMaterialGroups(groups);

      const names = modelViewer.availableVariants;

      const maderaSelect = document.createElement("select");
      maderaSelect.id = "madera";
      maderaSelect.style.display = "none";
      maderaSelect.className = "text-zinc-700 bg-zinc-200 px-4 py-2 m-2 rounded-xl ring-1 ring-black hover:scale-105 transition-all duration-75 hover:ring-blue-500";
      
      const canoSelect = document.createElement("select");
      canoSelect.id = "cano";
      canoSelect.style.display = "none";
      canoSelect.className = "text-zinc-700 bg-zinc-200 px-4 py-2 m-2 rounded-xl ring-1 ring-black hover:scale-105 transition-all duration-75 hover:ring-blue-500";

      names.forEach((name) => {
        if (name.startsWith("madera")) {
          const option = document.createElement("option");
          option.value = name;
          option.textContent = name;
          maderaSelect.appendChild(option);
        }
      });
      
      names.forEach((name) => {
        if (name.startsWith("caño")) {
          const option = document.createElement("option");
          option.value = name;
          option.textContent = name;
          canoSelect.appendChild(option);
        }
      });
      
      document.body.appendChild(maderaSelect);
      document.body.appendChild(canoSelect);

      maderaSelect.addEventListener("input", async (event) => {
        const selectedVariant = event.target.value === "default" ? null : event.target.value;
        modelViewer.variantName = selectedVariant;
        await modelViewer.model.updateComplete;
        const variantChangeEvent = new Event("variantchange");
        modelViewer.dispatchEvent(variantChangeEvent);
        resetPivotToDefault();
      });
      canoSelect.addEventListener("input", async (event) => {
        const selectedVariant = event.target.value === "default" ? null : event.target.value;
        modelViewer.variantName = selectedVariant;
        await modelViewer.model.updateComplete;
        const variantChangeEvent = new Event("variantchange");
        modelViewer.dispatchEvent(variantChangeEvent);
        resetPivotToDefault();
      });
      
      const backButton = document.createElement("button");
      backButton.textContent = "X";
      backButton.style.display = "block";
      backButton.className = backButtonClass;
      backButton.addEventListener("click", () => {
        setMenuState(0);
        controlsContainer.className = "flex bg-transparent p-4 rounded gap-2 w-full"
        canoSelect.style.display = "none";
        backButton.style.display = "none";
        maderaSelect.style.display = "none";
        reduceButton.style.display = "block";
        expandButton.style.display = "block";
      })

      controlsContainer.appendChild(backButton);
      const reduceButton = document.createElement("button");
      reduceButton.textContent = "Reducir";
      reduceButton.className = buttonDefaultClass
      reduceButton.style.display = "block";
      reduceButton.addEventListener("click", () => {
        setCurrentGroup((prev) => {
          const newGroup = Math.max(prev - 1, 0);
          updateGroups(materialGroups, newGroup);
          return newGroup;
        });
      });

      const expandButton = document.createElement("button");
      expandButton.textContent = "Ampliar";
      expandButton.className = buttonDefaultClass
      expandButton.style.display = "block";
      expandButton.addEventListener("click", () => {
        setCurrentGroup((prev) => {
          const newGroup = Math.min(prev + 1, 6);
          updateGroups(materialGroups, newGroup);
          return newGroup;
        });
      });


      controlsContainer.appendChild(maderaSelect);
      controlsContainer.appendChild(canoSelect);
      controlsContainer.appendChild(reduceButton);
      controlsContainer.appendChild(expandButton);
    };

    modelViewer.addEventListener("load", handleLoad);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
    };

    
  }, [controlsContainerId]);

  const showMaderaSelect = () => {
    const maderaSelect = document.getElementById("madera");
    const canoSelect = document.getElementById("cano");
    canoSelect.style.display = "none";
    maderaSelect.style.display = "block";
  }

  const showCanoSelect = () => {
    const maderaSelect = document.getElementById("madera");
    const canoSelect = document.getElementById("cano");
    canoSelect.style.display = "block";
    maderaSelect.style.display = "none";
  }

  const updateGroups = async (groups, currentGroup) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const allMaterials = modelViewer.model.materials;

    for (const material of allMaterials) {
      await material.ensureLoaded();

      const prefix = material.name.slice(0, 2);
      const groupIndex = parseInt(prefix, 10);

      //console.log(`groupIndex es ${groupIndex} y currentGroup ${groupIndex}`);
      let isActive = shouldBeActive(currentGroup, groupIndex);

      material.setAlphaMode("BLEND");
      const pbr = material.pbrMetallicRoughness;
      const baseColor = pbr.baseColorFactor;
      const newOpacity = isActive ? 1 : 0;

      baseColor[3] = newOpacity;
      pbr.setBaseColorFactor(baseColor);

      if (newOpacity > 0)
      console.log(`Al material ${material.name} le dejé opacidad ${newOpacity}`);

    }
  };

  function shouldBeActive(currentGroup, groupIndex) {
    if (currentGroup >= groupIndex) return true;
    return false;                                            
  }

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleVariantChange = async () => {
      console.log("Cambiando variante...");
      await modelViewer.model.updateComplete;
      console.log("Variante cambiada. Llamando a updateGroups...");
      console.log('materialGroups ' + materialGroups);
      console.log('currentGroup ' +  currentGroup);
      updateGroups(materialGroups, currentGroup);
    };

    modelViewer.addEventListener("variantchange", handleVariantChange);

    return () => {
      modelViewer.removeEventListener("variantchange", handleVariantChange);
    };
  }, [currentGroup, materialGroups]);


  const modelViewer2 = document.querySelector("#hotspot-camera-view-demo");
  const annotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewer2.cameraTarget = dataset.target;
    modelViewer2.cameraOrbit = dataset.orbit;
    modelViewer2.fieldOfView = '45deg';
  }

  useEffect(() => {
    const modelViewer2 = document.querySelector("#hotspot-camera-view-demo");
    if (!modelViewer2) {
      console.error("Elemento #hotspot-camera-view-demo no encontrado.");
      return;
    }
  
    const annotationClicked = (annotation) => {
      let dataset = annotation.dataset;
      modelViewer2.cameraTarget = dataset.target;
      modelViewer2.cameraOrbit = dataset.orbit;
      modelViewer2.fieldOfView = '45deg';
    };
  
    modelViewer2.querySelectorAll('button').forEach((hotspot) => {
      hotspot.addEventListener('click', () => annotationClicked(hotspot));
    });
  
    return () => {
      modelViewer2.querySelectorAll('button').forEach((hotspot) => {
        hotspot.removeEventListener('click', () => annotationClicked(hotspot));
      });
    };
  }, []);
  
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-white rounded-4xl">
      <model-viewer
        id="hotspot-camera-view-demo" 
        loading="eager"
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        className="w-full h-full object-contain rounded-4xl"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
      <button onClick = {() => showMaderaSelect() } className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg" slot="hotspot-2" data-position="0.0608m 0.0566m 0.0605m" data-normal="0.2040984m 0.7985359m -0.56629m" data-orbit="42.72974deg 84.74043deg 0.07104211m" data-target="0.0757959m 0.04128428m 0.07109568m">
        Madera
      </button>
      <button onClick = {() => showCanoSelect() } className= "p-1 bg-zinc-200 ring-blue-500 ring-2 text-black rounded-lg" slot="hotspot-3" data-position="0m 0.8m 0.6m" data-normal="0.2040984m 0.7985359m -0.56629m" data-orbit="42.72974deg 84.74043deg 0.07104211m" data-target="0m 0.8m 0.6m">
        Caños
      </button>  

      </model-viewer>
    </div>
  );
};

export default ARModelViewer;