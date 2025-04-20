import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { translate } from "./Translations";

import ConfigHeader from "./ConfigHeader";
import * as THREE from "three";
function RackModel({ showingMeshes, onMeshesLoaded, selectedTextures }) {
  const { scene } = useGLTF("/models/rack.glb");

  const originalMaterials = useRef(new Map());
  const [groupTextures, setGroupTextures] = useState({});

  useEffect(() => {
    const meshNames = [];
    const materials = new Set();
    scene.traverse((child) => {
      if (child.isMesh) {
        meshNames.push(child.name);
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => materials.add(mat));
          } else {
            materials.add(child.material);
          }
        }
      }
    });

    console.log("Available Meshes:", meshNames);
    console.log("Available Materials:", [...materials]);
    if (onMeshesLoaded) onMeshesLoaded(meshNames);
  }, [scene, onMeshesLoaded]);

  // Aplicar visibilidad a los meshes
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const meshName = child.name;
        const isVisible = showingMeshes && showingMeshes.some((key) => meshName.startsWith(key));
        child.visible = isVisible;
      }
    });
  }, [scene, showingMeshes]);

  // Guardar materiales originales solo una vez
  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh && !originalMaterials.current.has(object)) {
          originalMaterials.current.set(object, object.material.clone());
        }
      });
    }
  }, [scene]);

  // Aplicar texturas seleccionadas
  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh) {
          const objectName = object.name.toLowerCase();

          if (objectName.includes("caños") && selectedTextures.caño) {
            object.material.map = selectedTextures.caño;
            object.material.needsUpdate = true; 
          } else if (objectName.includes("tabla") && selectedTextures.tabla) {
            object.material.map = selectedTextures.tabla;
          } else {
            object.material = originalMaterials.current.get(object)?.clone();
          }

          if (object.material.map) {
            object.material.map.wrapS = object.material.map.wrapT = THREE.RepeatWrapping;
            object.material.map.repeat.set(4, 4);
            object.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene, selectedTextures]);

  return <primitive object={scene} />;
}


export default function App(language) {
  const [showingMeshes, setShowingMeshes] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const tablaTextures = ["/textures/madera.jpg", "/textures/madera-blanca.jpg"];
  const cañoTextures = ["/textures/madera.jpg", "/textures/madera-blanca.jpg"];

  const [selectedTextures, setSelectedTextures] = useState({
    tabla: null,
    caño: null,
  });

  const textureLoader = new THREE.TextureLoader();

  const handleTextureChange = (type, texturePath) => {
    console.log("Selected texture:", texturePath);
    
    textureLoader.load(texturePath, (loadedTexture) => {
      setSelectedTextures((prev) => ({
        ...prev,
        [type]: loadedTexture,
      }));
    });
  };



  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        setIsFullscreen(false);
        document.exitFullscreen();
      } else {
        setIsFullscreen(true);
        containerRef.current.requestFullscreen();
      }
    }
  };

  const setVisibleMeshes = (prefixes) => {
    setShowingMeshes(prefixes);
  };

  useEffect(() => {
    setVisibleMeshes(["03", "02", "01"]);
   }
   , []);

   useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    const handleEscape = (event) => {
      if (event.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const [selectedMenu,setSelectedMenu] = useState("modules");

  const handleTextureChangeForPipes = (texture) => {
    setSelectedTextures((prev) => ({ ...prev, caño: texture }));
  };

  const handleTextureChangeForBoards = (texture) => {
    setSelectedTextures((prev) => ({ ...prev, tabla: texture }));
  };


  return (
    <section className="w-full min-h-[150vh] flex flex-col justify-start items-center rounded-lg gap-4 relative sm:px-12 sm:py-2 p-2"
    ref={containerRef}>
      <Canvas
        camera={{ position: [1, 1, 1], zoom: 1 }}
        style={{
          width: isFullscreen ? "100vw" : "80vw",
          height: isFullscreen ? "100vw" : "80vh",
          minWidth: "450px",
          minHeight: "250px",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <ambientLight intensity={0.5} />
        <RackModel 
          showingMeshes={showingMeshes} 
          selectedTextures={selectedTextures} 
          onMeshesLoaded={(meshes) => console.log("Loaded Meshes:", meshes)} 
        />
        <OrbitControls enableZoom={true} enableRotate={true} />
        <directionalLight position={[-3, 5, -4]} intensity={1.7} />
        <directionalLight position={[3, 5, 10]} intensity={0.8} />
        <directionalLight position={[0, -10, 0]} intensity={0.3} />
      </Canvas>

                <section className="absolute sm:flex flex-col hidden items-center justify-center top-4 right-7 gap-2">

                  <header className="sm:flex hidden items-start justify-end w-full gap-2">
                    <ConfigHeader qrCode="/qrcodes/rack.png" handleFullscreen={handleFullscreen} isFullscreen={isFullscreen} language={language}/>
                  </header>


                <button className={"" + selectedMenu === "modules" ? "font-bold underline" : ""} onClick={() => setSelectedMenu("modules")}>
                  Módulos
                </button>
                <div className={`grid grid-cols-2 gap-3 px-4 ${selectedMenu === "modules" ? "block" : "hidden"}`}>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["01"]) }>
                    <img src="/buttons/01.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["02", "01"]) }>
                  <img src="/buttons/01-02.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["03", "02", "01"]) }>
                  <img src="/buttons/01-02-03.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["04"]) }>
                  <img src="/buttons/04.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["04", "05"]) }>
                  <img src="/buttons/04-05.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["04", "05", "03"]) }>
                  <img src="/buttons/03-04-05.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["04", "02", "03"]) }>
                  <img src="/buttons/02-03-04.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["02", "04"]) }>
                  <img src="/buttons/02-04.png" className="w-16 h-16"></img>
                  </button>
                  <button className="w-16 h-16 hover:bg-lightblue transition-all duration-75 bg-lightblue6 rounded-full flex items-center justify-center" onClick={() => setVisibleMeshes(["06","05", "04"]) }>
                  <img src="/buttons/04-05-06.png" className="w-16 h-16"></img>
                  </button>
                 </div>

                <button className={"" + selectedMenu === "tables" ? "font-bold underline" : ""} onClick={() => setSelectedMenu("tables")}>
                  Tablas
                </button>
                <div className={`flex gap-2 ${selectedMenu === "tables" ? "block" : "hidden"}`}>
                {tablaTextures.map((texture, index) => (
                  <button key={index} onClick={() => handleTextureChange("tabla", texture)} className="flex flex-col items-center justify-center">
                  <h1 className={`${selectedTextures.tabla === texture ? "block" : "hidden"}`}>"Hola"</h1>
                  <img src={texture} alt={`tabla-${index}`} className="w-12 h-12 rounded-full border-2" />
                </button>
                ))}
                </div>

                <button className={"" + selectedMenu === "caño" ? "font-bold underline" : ""} onClick={() => setSelectedMenu("caño")}>
                  Caños
                </button>
                <div className={`flex gap-2 ${selectedMenu === "caño" ? "block" : "hidden"}`}>
                {cañoTextures.map((texture, index) => (
                  <button key={index} onClick={() => handleTextureChange("caño", texture)}>
                    <img src={texture} alt={`caño-${index}`} className="w-12 h-12 rounded-full border-2" />
                  </button>
                ))}
                </div>
      
    </section>


    </section>
  );
}
