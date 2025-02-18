import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const SillonModel = ({ toggleBedVisibility, onLoadComplete }) => {
  const { scene } = useGLTF("/models/sillon.glb", true); // Cargar el modelo
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (scene) {
      setIsLoaded(true); // El modelo ha sido cargado
      onLoadComplete(); // Llamamos a la función pasada como prop
    }
  }, [scene, onLoadComplete]);

  useEffect(() => {
    if (scene) {
      // Si se actualiza el estado de la visibilidad, recorremos la escena
      scene.traverse((object) => {
        if (object.isMesh) {
          if (object.name.toLowerCase().includes("cama")) {
            object.visible = toggleBedVisibility;
          }
        }
      });
    }
  }, [toggleBedVisibility, scene]);

  if (!isLoaded) {
    return null; // Mientras carga, no renderizamos nada
  }

  return <primitive object={scene} />;
};

const SillonViewer = () => {
  const [showBed, setShowBed] = useState(true); // Estado que alterna la visibilidad
  const [loading, setLoading] = useState(true); // Estado de carga del modelo

  const toggleBed = () => {
    setShowBed((prevShowBed) => !prevShowBed); // Alterna entre mostrar y ocultar
  };

  const handleModelLoad = () => {
    setLoading(false); // El modelo ha sido cargado
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center relative mt-2 gap-4">
      <Canvas className="cursor-grab"
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{
          width: "80vw",
          minWidth: "450px",
          height: "60vh",
          minHeight: "250px",
          borderRadius: "10px",
          border: "1px solid #CFCFCF",
          "@media (max-width: 700px)": {
            width: "100vw",
          },
        }}
      >
      <ambientLight intensity={0.9} />  {/* Luz ambiental suave */}
      <directionalLight position={[5, 5, 5]} intensity={8} />  {/* Luz direccional desde arriba */}

        
        {/* Añadimos OrbitControls para permitir rotación y zoom */}
        <OrbitControls />
        
        <SillonModel toggleBedVisibility={showBed} onLoadComplete={handleModelLoad} />
      </Canvas>

      {/* Mostramos el loading gif mientras el modelo carga */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <img src="/loading.gif" alt="Loading..." className="w-1/2" />
        </div>
      )}

      <button
        onClick={toggleBed}
        className="px-4 py-3 text-black bg-lightblue6 border-2 border-lightblue rounded-full flex items-center justify-center
                            hover:bg-lightblue2 hover:text-white transition-all"
      >
        {showBed ? "Ocultar cama" : "Mostrar cama"} {/* Cambia el texto del botón */}
      </button>

    </div>
  );
};

export default SillonViewer;
