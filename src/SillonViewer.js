import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";

import * as THREE from "three";
import { translate } from "./Translations";
import { useRef } from "react";
const textureLoader = new TextureLoader();
const textureNames = ["sofa-00", "sofa-01", "sofa-02", "sofa-03", "sofa-04", "sofa-05", "sofa-06"];
const textures = textureNames.reduce((acc, name) => {
  acc[name] = textureLoader.load(`/textures/${name}.jpg`);
  return acc;
}, {});
const testTexture = textureLoader.load("/textures/sofa-00.jpg");

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
  const group3 = ["pillow"];
  
  const groupMap = {
    group0: group0,
    group1: group1,
    group2: group2,
    group3: group3,
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
        if (
          object.isMesh &&
          groupMap[selectingGroup]?.some((name) => object.name.toLowerCase().includes(name.toLowerCase()))
        ) {
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
    "sofa-00": "Dark Blue",
    "sofa-01": "Black",
    "sofa-02": "Red",
    "sofa-03": "Teal",
    "sofa-04": "Magenta",
    "sofa-05": "Light Gray",
    "sofa-06": "Green",
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center w-screen mt-2 ">
      <div className="relative min-h-[60vh] bg-white" ref={containerRef}>
          <Canvas
              className="bg-white cursor-grab"
              camera={{ position: [0, 3, 5], fov: 15 }}
              style={{
                width: isFullscreen ? "100vw" : "80vw",
                height: isFullscreen ? "100vh" : "50vh",
                minWidth: "450px",
                minHeight: "250px",
                "@media (max-width: 700px)": { width: "100vw" },
                position: "relative",
              }}
            >
            <directionalLight position={[-3, 5, -10]} intensity={3} />
            <directionalLight position={[3, 5, 10]} intensity={3} />
            <OrbitControls />
            <SillonModel
              toggleBedVisibility={showBed}
              onLoadComplete={handleModelLoad}
              groupTextures={groupTextures}
              onSceneReady={setScene}
              selectingGroup={selectingGroup}
            />
          </Canvas>



          <button
            onClick={handleFullscreen}
            className="absolute flex items-center justify-center px-4 py-3 transition-all border-2 rounded-full top-7 right-7 bg-lightblue6 border-lightblue hover:bg-lightblue2 hover:scale-105"
          >
            {!isFullscreen ? (
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="M4,15 C4.55228,15 5,15.4477 5,16 L5,19 L8,19 C8.55228,19 9,19.4477 9,20 C9,20.5523 8.55228,21 8,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,16 C3,15.4477 3.44772,15 4,15 Z M20,15 C20.51285,15 20.9355092,15.386027 20.9932725,15.8833761 L21,16 L21,19 C21,20.0543909 20.18415,20.9181678 19.1492661,20.9945144 L19,21 L16,21 C15.4477,21 15,20.5523 15,20 C15,19.48715 15.386027,19.0644908 15.8833761,19.0067275 L16,19 L19,19 L19,16 C19,15.4477 19.4477,15 20,15 Z M19,3 C20.0543909,3 20.9181678,3.81587733 20.9945144,4.85073759 L21,5 L21,8 C21,8.55228 20.5523,9 20,9 C19.48715,9 19.0644908,8.61395571 19.0067275,8.11662025 L19,8 L19,5 L16,5 C15.4477,5 15,4.55228 15,4 C15,3.48716857 15.386027,3.06449347 15.8833761,3.0067278 L16,3 L19,3 Z M8,3 C8.55228,3 9,3.44772 9,4 C9,4.51283143 8.61395571,4.93550653 8.11662025,4.9932722 L8,5 L5,5 L5,8 C5,8.55228 4.55228,9 4,9 C3.48716857,9 3.06449347,8.61395571 3.0067278,8.11662025 L3,8 L3,5 C3,3.94563773 3.81587733,3.08183483 4.85073759,3.00548573 L5,3 L8,3 Z"
                      fill="#000000"
                    ></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>fullscreen_exit_line</title>
                <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Media" transform="translate(-432.000000, 0.000000)">
                    <g id="fullscreen_exit_line" transform="translate(432.000000, 0.000000)">
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fillRule="nonzero"
                      />
                      <path
                        d="M20,7 L17,7 L17,4 C17,3.44772 16.5523,3 16,3 C15.4477,3 15,3.44772 15,4 L15,7 C15,8.10457 15.8954,9 17,9 L20,9 C20.5523,9 21,8.55229 21,8 C21,7.44772 20.5523,7 20,7 Z M7,9 C8.10457,9 9,8.10457 9,7 L9,4 C9,3.44772 8.55229,3 8,3 C7.44772,3 7,3.44772 7,4 L7,7 L4,7 C3.44772,7 3,7.44771 3,8 C3,8.55228 3.44772,9 4,9 L7,9 Z M7,17 L4,17 C3.44772,17 3,16.5523 3,16 C3,15.4477 3.44772,15 4,15 L7,15 C8.10457,15 9,15.8954 9,17 L9,20 C9,20.5523 8.55228,21 8,21 C7.44771,21 7,20.5523 7,20 L7,17 Z M17,15 C15.8954,15 15,15.8954 15,17 L15,20 C15,20.5523 15.4477,21 16,21 C16.5523,21 17,20.5523 17,20 L17,17 L20,17 C20.5523,17 21,16.5523 21,16 C21,15.4477 20.5523,15 20,15 L17,15 Z"
                        id="形状"
                        fill="#000000"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            )}
          </button>


          <section className={"absolute left-0 right-0 flex flex-col items-center justify-center w-full gap-1 mt-4" + (isFullscreen ? "bottom-12" : "-bottom-4")}>
          <button
            onClick={toggleBed}
            className="px-4 py-3 text-black transition-all border-2 rounded-full bg-lightblue6 border-lightblue hover:bg-lightblue2 hover:text-white"
          >
            {showBed ? translate("hideBed", language) : translate("showBed", language)}
          </button>
          <div className="flex items-center justify-center gap-6 mt-4">
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
            <button
              onClick={() => setSelectingGroup("group3")}
              className={`px-4 py-2 ${
                selectingGroup === "group3" ? "font-bold" : "font-normal"
              } hover:scale-105 transition-all`}
            >
              Pillows
            </button>
          </div>

          <hr className="h-[2px] w-64 bg-black" />

          <div className="flex items-center justify-center gap-6 mt-4">
            {textureNames.map((texture) => (
              <button
                key={texture}
                onClick={() => handleTextureChange(selectingGroup, texture)}
                className={`h-16 border rounded-full flex flex-row items-center justify-center gap-4 ${
                  groupTextures[selectingGroup] === texture
                    ? "border-gray-800 w-auto p-4"
                    : "border-gray-300 w-16"
                } hover:border-blue-400 transition-all`}
              >
                {groupTextures[selectingGroup] === texture && (
                  <p className="flex items-center justify-center w-1/2 h-full text-nowrap">
                    {textureColors[texture]}
                  </p>
                )}
                <img
                  src={`/textures/${texture}.jpg`}
                  alt={texture}
                  className="object-cover w-12 rounded-full"
                />
              </button>
            ))}
          </div>
          </section>

            
      </div>

      {loading && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-white bg-opacity-70">
          <img src="/loading.gif" alt="Loading..." className="w-1/4" />
        </div>
      )}


    </div>
  );
};

export default SillonViewer;
