import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";

const textureLoader = new TextureLoader();
const textureNames = ["sofa-01", "sofa-02", "sofa-03", "sofa-04", "sofa-05", "sofa-06"];
const textures = textureNames.reduce((acc, name) => {
  acc[name] = textureLoader.load(`/textures/${name}.jpg`);
  return acc;
}, {});
const testTexture = textureLoader.load("/textures/prueba.png");

const SillonModel = ({ toggleBedVisibility, onLoadComplete, selectedTexture }) => {
  const { scene } = useGLTF("/models/sillon.glb", true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [originalMaterials, setOriginalMaterials] = useState(new Map());

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        console.log(`Mesh: ${object.name}, UVs:`, object.geometry.attributes.uv);
      }else{
        console.log(`Object: ${object.name}`);
      }
    });
  }, [scene]);
  

  useEffect(() => {
    if (scene) {
      setIsLoaded(true);
      onLoadComplete();

      if (originalMaterials.size === 0) {
        const materialsMap = new Map();
        scene.traverse((object) => {
          if (object.isMesh) {
            materialsMap.set(object, object.material.clone()); // Clonar materiales originales
          }
        });
        setOriginalMaterials(materialsMap);
      }
    }
  }, [scene, onLoadComplete]);

  useEffect(() => {
    if (scene && originalMaterials.size > 0) {
      scene.traverse((object) => {
        if (object.isMesh) {
          if (selectedTexture) {
            object.material.map = selectedTexture === "test" ? testTexture : textures[selectedTexture];
            object.material.map.needsUpdate = true;
          } else {
            object.material = originalMaterials.get(object).clone();
          }
        }
      });
    }
  }, [selectedTexture, scene, originalMaterials]);

useEffect(() => {
  if (scene) {
    scene.traverse((object) => {
      if (object.isMesh) {
        const name = object.name.toLowerCase();
        
        if (name.includes("cama")) {
          object.visible = toggleBedVisibility; // Se muestra si toggleBedVisibility es true
        } else if (name.includes("back001") || name.includes("sides001")) {
          object.visible = !toggleBedVisibility; // Se oculta si toggleBedVisibility es true
        }
      }
    });
  }
}, [toggleBedVisibility, scene]);


  if (!isLoaded) return null;
  return <primitive object={scene} />;
};

const SillonViewer = () => {
  const [showBed, setShowBed] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedTexture, setSelectedTexture] = useState(null);

  const toggleBed = () => setShowBed((prev) => !prev);
  const handleModelLoad = () => setLoading(false);

  return (
    <div className="w-screen flex flex-col items-center justify-center relative mt-2 gap-4">
      <Canvas
        className="cursor-grab"
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{
          width: "80vw",
          minWidth: "450px",
          height: "60vh",
          minHeight: "250px",
          borderRadius: "10px",
          border: "1px solid #CFCFCF",
          "@media (max-width: 700px)": { width: "100vw" },
        }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={8} />
        <OrbitControls />
        <SillonModel
          toggleBedVisibility={showBed}
          onLoadComplete={handleModelLoad}
          selectedTexture={selectedTexture}
        />
      </Canvas>

      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-70 flex justify-center items-center z-10">
          <img src="/loading.gif" alt="Loading..." className="w-1/2" />
        </div>
      )}

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
            onClick={() => setSelectedTexture(texture)}
            className={`w-16 h-16 border-2 rounded-lg ${
              selectedTexture === texture ? "border-blue-500" : "border-gray-300"
            } hover:border-blue-400 transition-all`}
          >
            <img src={`/textures/${texture}.jpg`} alt={texture} className="w-full h-full object-cover rounded-md" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SillonViewer;
