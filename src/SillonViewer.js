import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";

import * as THREE from "three";

const textureLoader = new TextureLoader();
const textureNames = ["sofa-00", "sofa-01", "sofa-02", "sofa-03", "sofa-04", "sofa-05", "sofa-06"];
const textures = textureNames.reduce((acc, name) => {
  acc[name] = textureLoader.load(`/textures/${name}.jpg`);
  return acc;
}, {});
const testTexture = textureLoader.load("/textures/prueba.png");

const SillonModel = ({ toggleBedVisibility, onLoadComplete, groupTextures, onSceneReady, selectingGroup }) => {
  const { scene } = useGLTF("/models/sillon.glb", true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [originalMaterials, setOriginalMaterials] = useState(new Map());

  useEffect(() => {
    if (scene) {
      onSceneReady(scene);
    }
  }, [scene, onSceneReady]);

  useEffect(() => {
    if (scene) {
      setIsLoaded(true);
      onLoadComplete();

      if (originalMaterials.size === 0) {
        const materialsMap = new Map();
        scene.traverse((object) => {
          if (object.isMesh) {
            materialsMap.set(object, object.material.clone());
          }
        });
        setOriginalMaterials(materialsMap);
      }
    }
  }, [scene, onLoadComplete]);

  const group0 = ["seat", "cama-frente", "cama-manija"];
  const group1 = ["sides-001", "cama-apoyabrazos"];
  const group2 = ["back-001", "cama-respaldo"];
  
  const groupMap = {
    group0: group0,
    group1: group1,
    group2: group2,
  };

  // Lógica para cambiar la textura solo cuando se selecciona un botón de textura
  useEffect(() => {
    if (scene && originalMaterials.size > 0) {
      scene.traverse((object) => {
        if (object.isMesh && groupMap[selectingGroup]?.includes(object.name.toLowerCase())) {
          const currentTexture = groupTextures[selectingGroup];
          if (currentTexture) {
            const material = object.material;
            material.map = currentTexture === "test" ? testTexture : textures[currentTexture];
            material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
            material.needsUpdate = true;

            const newTexture = currentTexture === "test" ? testTexture : textures[currentTexture];
            newTexture.wrapS = newTexture.wrapT = THREE.RepeatWrapping;
            newTexture.repeat.set(4, 4);
          } else {
            object.material = originalMaterials.get(object).clone();
          }
        }
      });
    }
  }, [groupTextures, scene, originalMaterials, selectingGroup]);

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh) {
          const name = object.name.toLowerCase();
          if (name.includes("cama")) {
            object.visible = toggleBedVisibility;
          } else if (name.includes("back-001") || name.includes("sides-001")) {
            object.visible = !toggleBedVisibility;
          }
        }
      });
    }
  }, [toggleBedVisibility, scene]);

  if (!isLoaded) return null;
  return <primitive object={scene} />;
};

const SillonViewer = () => {
  const [scene, setScene] = useState(null);
  const [showBed, setShowBed] = useState(true);
  const [loading, setLoading] = useState(true);
  const [groupTextures, setGroupTextures] = useState({
    group0: null,
    group1: null,
    group2: null,
  });

  const [selectingGroup, setSelectingGroup] = useState("group1");

  const toggleBed = () => setShowBed((prev) => !prev);
  const handleModelLoad = () => setLoading(false);

  const handleTextureChange = (group, texture) => {
    setGroupTextures((prevTextures) => ({
      ...prevTextures,
      [group]: texture,
    }));
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center relative mt-2">
      <Canvas
        className="cursor-grab"
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{
          width: "80vw",
          minWidth: "450px",
          height: "60vh",
          minHeight: "250px",
          "@media (max-width: 700px)": { width: "100vw" },
        }}
      >
        <directionalLight position={[5, 5, 5]} intensity={8} />
        <OrbitControls />
        <SillonModel
          toggleBedVisibility={showBed}
          onLoadComplete={handleModelLoad}
          groupTextures={groupTextures}
          onSceneReady={setScene}
          selectingGroup={selectingGroup}
        />
      </Canvas>

      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-70 flex justify-center items-center z-10">
          <img src="/loading.gif" alt="Loading..." className="w-1/2" />
        </div>
      )}

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setSelectingGroup("group0")}
          className={`px-4 py-2 ${
            selectingGroup === "group0" ? "font-bold" : "font-normal"
          } hover:scale-105 transition-all`}
        >
          Seats
        </button>
        <button
          onClick={() => setSelectingGroup("group1")}
          className={`px-4 py-2 ${
            selectingGroup === "group1" ? "font-bold" : "font-normal"
          } hover:scale-105 transition-all`}
        >
          Sides
        </button>

        <button
          onClick={() => setSelectingGroup("group2")}
          className={`px-4 py-2 ${
            selectingGroup === "group2" ? "font-bold" : "font-normal"
          } hover:scale-105 transition-all`}
        >
          Back
        </button>
      </div>
      <hr className="h-[2px] w-64 bg-black"></hr>

      <div className="flex gap-2 mt-4">
        <button
          onClick={toggleBed}
          className="px-4 py-3 text-black bg-lightblue6 border-2 border-lightblue rounded-full 
                    hover:bg-lightblue2 hover:text-white transition-all"
        >
          {showBed ? "Ocultar cama" : "Mostrar cama"}
        </button>
        
        {textureNames.map((texture) => (
          <button
            key={texture}
            onClick={() => handleTextureChange(selectingGroup, texture)}
            className={`w-16 h-16 border-2 rounded-full ${
              groupTextures[selectingGroup] === texture ? "border-blue-500 border-3" : "border-gray-300"
            } hover:border-blue-400 transition-all`}
          >
            <img src={`/textures/${texture}.jpg`} alt={texture} className="w-full h-full object-cover rounded-full" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SillonViewer;
