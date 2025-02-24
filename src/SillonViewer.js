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

const SillonModel = ({ selectedTexture, onLoadComplete }) => {
  const { scene } = useGLTF("/models/sillon.glb", true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [originalMaterials, setOriginalMaterials] = useState(new Map());

  useEffect(() => {
    if (scene) {
      setIsLoaded(true);
      onLoadComplete();

      // Guardar materiales originales la primera vez
      if (originalMaterials.size === 0) {
        const materialsMap = new Map();
        scene.traverse((object) => {
          if (object.isMesh) {
            materialsMap.set(object, object.material);
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
            object.material.map = textures[selectedTexture];
            object.material.needsUpdate = true;
          } else {
            object.material = originalMaterials.get(object); // Restaurar material original
          }
        }
      });
    }
  }, [selectedTexture, scene, originalMaterials]);

  if (!isLoaded) return null;
  return <primitive object={scene} />;
};

const SillonViewer = () => {
  const [loading, setLoading] = useState(true);
  const [selectedTexture, setSelectedTexture] = useState(null);

  const handleModelLoad = () => setLoading(false);
  const handleTextureChange = (texture) => setSelectedTexture(texture);

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
        <SillonModel selectedTexture={selectedTexture} onLoadComplete={handleModelLoad} />
      </Canvas>

      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-70 flex justify-center items-center z-10">
          <img src="/loading.gif" alt="Loading..." className="w-1/2" />
        </div>
      )}

      <div className="flex gap-2 mt-4">
        {textureNames.map((texture) => (
          <button
            key={texture}
            onClick={() => handleTextureChange(texture)}
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
