import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";

import * as THREE from "three";
import { translate } from "./Translations";
import { useRef } from "react";

import ConfigHeader from "./ConfigHeader";

const textureLoader = new TextureLoader();
const textureNames = ["sofa-00", "sofa-01", "sofa-02", "sofa-03", "sofa-04", "sofa-05"];
const textures = textureNames.reduce((acc, name) => {
  acc[name] = textureLoader.load(`/textures/${name}.jpg`);
  return acc;
}, {});
const testTexture = textureLoader.load("/textures/sofa-00.jpg");

const SillonModel = ({
  toggleBedVisibility,
  onLoadComplete,
  groupTextures,
  onSceneReady,
  selectingGroup,
  setPlayAnimation,
  animationStep,
  setAnimationStep
}) => {
  const { scene, animations } = useGLTF("/models/sillon.glb", true);
  const mixer = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [originalMaterials, setOriginalMaterials] = useState(new Map());

  const actionRef = useRef(null);

  const animationStepRef = useRef(0); // este reemplaza animationStep en lectura
  
  let pausedAtTime = 0;
  let isPlaying = false;
  
  const playHalfAnimation = () => {
    console.log("playHalfAnimation");
  
    if (!mixer.current || !animations.length) return;
  
    const clip = animations[0];
  
    if (!actionRef.current) {
      actionRef.current = mixer.current.clipAction(clip);
      actionRef.current.clampWhenFinished = true;
      actionRef.current.setLoop(THREE.LoopOnce, 1);
    }
  
    const action = actionRef.current;
    const currentStep = animationStepRef.current;
  
    if (currentStep === 0) {
      console.log("Starting animation from 0 to 2s");
      action.reset();
      action.time = 0;
      action.paused = false;
      action.play();
      isPlaying = true;
  
      setTimeout(() => {
        pausedAtTime = action.time;
        action.paused = true;
        console.log("Paused at:", pausedAtTime);
        animationStepRef.current = 1;
        setAnimationStep(1);
        isPlaying = false;
      }, 2400);
  
    } else if (currentStep === 1) {
      console.log("Resuming animation from", pausedAtTime, "to end");
  
      action.time = pausedAtTime;
      action.paused = false;
      action.play();
      isPlaying = true;
  
      setTimeout(() => {
        pausedAtTime = action.time;
        action.paused = true;
        console.log("Paused at:", pausedAtTime);
  
        // Acá hacés el reset automático
        action.stop();
        pausedAtTime = 0;
        animationStepRef.current = 0;
        setAnimationStep(0);
        isPlaying = false;
  
        console.log("Animation reset after second part.");
      }, 2400);
    }
  };
  
  useEffect(() => {
    if (scene) {
      onSceneReady(scene);
    }
  }, [scene, onSceneReady]);

  useEffect(() => {
    if (animations.length && scene) {
      mixer.current = new THREE.AnimationMixer(scene);
    }
  }, [animations, scene]);

  const playAnimation = () => {
    if (animations.length && mixer.current) {
      const action = mixer.current.clipAction(animations[0]);
      action.reset().play();
    }
  };

  useEffect(() => {
    if (setPlayAnimation) {
      setPlayAnimation(() => () => playHalfAnimation());
    }
  }, [animations, scene]);
  
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

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
  const group3 = ["pillow"];
  const group4 = [...group0, ...group1, ...group2, ...group3];
  
  const groupMap = {
    group0: group0,
    group1: group1,
    group2: group2,
    group3: group3,
    group4: group4,
  };

  
  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh) {
          Object.keys(groupTextures).forEach((group) => {
            if (groupMap[group]?.includes(object.name.toLowerCase())) {
              const material = object.material;
              material.map = textures["sofa-00"];
              material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
              material.needsUpdate = true;
            }
          });
        }
      });
    }
  }, [scene]);


useEffect(() => {
  if (scene && originalMaterials.size > 0) {
    scene.traverse((object) => {
      if (object.isMesh) {
        // Revisar todos los grupos para ver si este objeto pertenece a alguno
        Object.keys(groupMap).forEach((group) => {
          if (group !== "group4" && groupMap[group]?.some((name) => object.name.toLowerCase().includes(name.toLowerCase()))) {
            const currentTexture = groupTextures[group];
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
    });
  }
}, [groupTextures, scene, originalMaterials]);

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh) {
          const name = object.name.toLowerCase();
          if (name.includes("cama")) {
            object.visible = toggleBedVisibility;
          } else if (name.includes("back001") || name.includes("sides001")) {
            object.visible = !toggleBedVisibility;
          }
        }
      });
    }
  }, [toggleBedVisibility, scene]);

  if (!isLoaded) return null;
  return <primitive object={scene} />;
};




const SillonViewer = ({language}) => {
  const [scene, setScene] = useState(null);
  const [showBed, setShowBed] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [groupTextures, setGroupTextures] = useState({
    group0 : "sofa-00",
    group1: "sofa-00",
    group2: "sofa-00",
    group3: "sofa-00",
    group4: "sofa-00",
  });

  const [selectingGroup, setSelectingGroup] = useState("group1");

  const [playAnimationFn, setPlayAnimationFn] = useState(null);

  const [animationStep, setAnimationStep] = useState(0);

  const toggleBed = () => setShowBed((prev) => !prev);
  const handleModelLoad = () => setLoading(false);

  const handleTextureChange = (group, texture) => {
      if (group === "group4") {
      setGroupTextures((prevTextures) => ({
        ...prevTextures,
        group0: texture,
        group1: texture,
        group2: texture,
        group3: texture,
        group4: texture,
      }));
  } else {
    setGroupTextures((prevTextures) => ({
      ...prevTextures,
      [group]: texture,
    }));
  }
  };

  const containerRef = useRef(null);

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


  const textureColors = {
    "sofa-00": "Light Gray",
    "sofa-01": "White",
    "sofa-02": "Dark Brown",
    "sofa-03": "Beige",
    "sofa-04": "Brown",
    "sofa-05": "Gray",
  };
  
  const textureColorsEs = {
    "sofa-00": "Gris Claro",
    "sofa-01": "Blanco",
    "sofa-02": "Marrón Oscuro",
    "sofa-03": "Beige",
    "sofa-04": "Marrón",
    "sofa-05": "Gris",
  };
  
  

  return (
    <div className="relative flex flex-col items-center justify-center w-screen">
      <div className="relative min-h-[60vh] bg-white flex items-center justify-center flex-col w-[80vw]" ref={containerRef}>
          <Canvas
              className="bg-white cursor-grab"
              camera={{ position: [0, 4, 5], fov: 15 }}
              style={{
                width: isFullscreen ? "100vw" : "80vw",
                height: isFullscreen ? "100vh" : "50vh",
                minWidth: "450px",
                minHeight: "250}}px",
                "@media (max-width: 700px)": { width: "100vw" },
                position: "relative",
              }}
            >
            <directionalLight position={[-3, 5, -4]} intensity={1.7} />
            <directionalLight position={[3, 5, 10]} intensity={0.8} />
            <directionalLight position={[0, -10, 0]} intensity={0.3} />
            <OrbitControls />
            <SillonModel
              toggleBedVisibility={showBed}
              onLoadComplete={handleModelLoad}
              groupTextures={groupTextures}
              onSceneReady={setScene}
              selectingGroup={selectingGroup}
              setPlayAnimation={setPlayAnimationFn}
              setAnimationStep={setAnimationStep}
              animationStep={animationStep}
            />
          </Canvas>


          <header className="absolute sm:flex hidden items-start justify-end top-2 right-7 w-full gap-2">
            <ConfigHeader qrCode="/qrcodes/sillon.png" handleFullscreen={handleFullscreen} isFullscreen={isFullscreen} language={language}/>
          </header>

          {/* {loading && (
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center bg-white bg-opacity-70 w-screen h-full">
                <img src="/loading.gif" alt="Loading..." className="w-1/4" />
              </div>
            )} */}
          <section className={`flex flex-col items-center justify-center w-full gap-1 mt-4 relative ${
            isFullscreen ? "absolute left-0 right-0 bottom-6" : "w-screen"
          }`}>


            <div className="flex w-full items-center justify-center gap-3">

            <button
              onClick={toggleBed}
              className="px-4 py-3 text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white self-center"
            >
              {showBed ? translate("hideBed", language) : translate("showBed", language)}
            </button>
          
            <button
              onClick={() => playAnimationFn?.()}
              className="px-4 py-3 text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white self-center disabled:bg-opacity-25 disabled:hover:bg-opacity-25 disabled:hover:text-black disabled:hover:bg-lightblue6 disabled:text-opacity-25 disabled:hover:text-opacity-25"
              disabled={!showBed}
            >
              {language === "en"
                ? animationStep === 0
                  ? "Open Bed"
                  : animationStep === 1
                  ? "Close Bed"
                  : "Reset"
                : animationStep === 0
                ? "Sacar Cama"
                : animationStep === 1
                ? "Guardar Cama"
                : "Reiniciar"}
            </button>



            <button className="sm:hidden px-2 py-1 text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white flex items-center justify-center h-12" onClick={() => window.location.href = "https://opptix.com.ar/model?model=/models/sillon.glb"
            }>
              
                <img className="w-8 mr-2 ml-2" src="/ARsvg.svg" alt="QR Code"></img>
            </button>
            
            </div>

              <div className="flex items-center justify-center gap-6 mt-4 sm:text-base text-xs">
                <button
                  onClick={() => setSelectingGroup("group4")}
                  className={`px-4 py-2 ${
                    selectingGroup === "group4" ? "font-bold" : "font-normal"
                  } hover:scale-105 transition-all`}
                >
                  {language === "en" ? "Full Color" : "Full Color"}  
                </button>
                <button
                  onClick={() => setSelectingGroup("group0")}
                  className={`px-4 py-2 ${
                    selectingGroup === "group0" ? "font-bold" : "font-normal"
                  } hover:scale-105 transition-all`}
                >
                 {language === "en" ? "Seats" : "Asientos"}
                </button>
                <button
                  onClick={() => setSelectingGroup("group1")}
                  className={`px-4 py-2 ${
                    selectingGroup === "group1" ? "font-bold" : "font-normal"
                  } hover:scale-105 transition-all`}
                >
                  {language === "en" ? "Sides" : "Costados"}
                </button>
                <button
                  onClick={() => setSelectingGroup("group2")}
                  className={`px-4 py-2 ${
                    selectingGroup === "group2" ? "font-bold" : "font-normal"
                  } hover:scale-105 transition-all`}
                >
                  {language === "en" ? "Back" : "Respaldo"} 
                </button>
                <button
                  onClick={() => setSelectingGroup("group3")}
                  className={`px-4 py-2 ${
                    selectingGroup === "group3" ? "font-bold" : "font-normal"
                  } hover:scale-105 transition-all`}
                >
                  {language === "en" ? "Pillows" : "Almohadones"}  
                </button>
              </div>

              <hr className="h-[2px] w-64 bg-black justify-self-center"/>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                {/* Primera fila con 4 elementos */}
                <div className="grid grid-cols-4 gap-6 justify-center sm:flex">
                  {textureNames.slice(0,4).map((texture) => (
                    <button
                    key={texture}
                    onClick={() => handleTextureChange(selectingGroup, texture)}
                    className={`ring-[2px] rounded-full flex items-center justify-center sm:h-12 sm:w-auto sm:min-w-12 w-8 h-8 ${
                      groupTextures[selectingGroup] === texture
                        ? "ring-gray-300 sm:min-w-32 justify-end"
                        : "ring-gray-300"
                    } hover:border-blue-400 transition-all`}
                  >
                    {groupTextures[selectingGroup] === texture && (
                                            <p className={`hidden sm:flex items-center justify-center w-auto min-w-1/2 h-full text-nowrap 
                                              ${
                                                groupTextures[selectingGroup] === texture
                                                  ? "ring-gray-300 mr-2 ml-2"
                                                  : "ring-gray-300"
                                              }
                                              `}>
                                              {language === "en" ? textureColors[texture] : textureColorsEs[texture]}
                                            </p>
                      )}

                    <img
                      src={`/textures/${texture}.jpg`}
                      alt={texture}
                      className={`object-cover sm:w-12 sm:h-12 w-8 h-8 rounded-full ${
                        groupTextures[selectingGroup] === texture ? "justify-end sm:p-1" : ""
                      }`}
                    />
                  </button>
                  ))}
                </div>

                {/* Segunda fila con 3 elementos, centrada */}
                <div className="grid grid-cols-3 gap-6 justify-center sm:flex">
                  {textureNames.slice(4).map((texture) => (
                    <button
                    key={texture}
                    onClick={() => handleTextureChange(selectingGroup, texture)}
                    className={`ring-[2px] rounded-full flex items-center justify-center sm:h-12 sm:w-auto sm:min-w-12 w-8 h-8 ${
                      groupTextures[selectingGroup] === texture
                        ? "ring-gray-300 sm:min-w-32 justify-end"
                        : "ring-gray-300"
                    } hover:border-blue-400 transition-all`}
                  >
                    {groupTextures[selectingGroup] === texture && (
                                            <p className={`hidden sm:flex items-center justify-center w-auto min-w-1/2 h-full text-nowrap 
                                              ${
                                                groupTextures[selectingGroup] === texture
                                                  ? "ring-gray-300 mr-2 ml-2"
                                                  : "ring-gray-300"
                                              }
                                              `}>
                                              {language === "en" ? textureColors[texture] : textureColorsEs[texture]}
                                            </p>
                      )}

                    <img
                      src={`/textures/${texture}.jpg`}
                      alt={texture}
                      className={`object-cover sm:w-12 sm:h-12 w-8 h-8 rounded-full ${
                        groupTextures[selectingGroup] === texture ? "justify-end sm:p-1" : ""
                      }`}
                    />
                  </button>
                  ))}
                </div>
              </div>


          </section>
      </div>




    </div>
  );
};

export default SillonViewer;