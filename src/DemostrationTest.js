import { useRef, useEffect, useState } from "react";
import "@google/model-viewer";
import { translate } from "./Translations";
import ContractButton from "./ContractButton";

export default function Demonstration({ language }) {
    const modelRef = useRef(null);
    const [activeVariants, setActiveVariants] = useState({});
    const variantOptions = {
        color: ["ESTANTES-PLATA", "ESTANTES-ANTARTICA", "NEGRO", "MADERA", "BLANCO", "GRIS"],
    };
    const [selectingGroup, setSelectingGroup] = useState("ESTANTES");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        modelRef.current = document.querySelector("#model-viewer");
        reloadModel();
    }, []);

    const toggleVariant = async (category, variant) => {
        if (!modelRef.current) return;
        modelRef.current.variantName = variant;
        await modelRef.current.updateComplete;
        setActiveVariants((prev) => ({ ...prev, [category]: variant }));
    };

    const handleAnimation = () => {
      if (modelRef.current) {
          if (isOpen) {
              modelRef.current.timeScale = -1;
          } else {
              modelRef.current.timeScale = 1;
          }
  
          modelRef.current.play();
  
          setTimeout(() => {
            setIsOpen((prev) => !prev);
            modelRef.current.pause();
          }, 1800);
      }
  };
  

    const variantsByGroup = {
      ESTANTES: ["ESTANTES-PLATA", "ESTANTES-ANTARTICA"],
      PUERTAS: ["NEGRO", "MADERA", "BLANCO", "GRIS"]
    };

    const groupNames = {
      ESTANTES : "Estantes",
      PUERTAS: "Puertas"
    }

    const groupNamesEn = {
      ESTANTES : "Shelves",
      PUERTAS: "Doors"
    }

    const variantNames = {
      "ESTANTES-PLATA" : "Plata",
      "ESTANTES-ANTARTICA": "Antártica",
      "NEGRO" : "Negras",
      "MADERA" : "Madera",
      "BLANCO" : "Blanco",
      "GRIS" : "Gris"
    }

    const variantNamesEn = {
      "ESTANTES-PLATA": "Silver",
      "ESTANTES-ANTARTICA": "Antarctic",
      "NEGRO": "Black",
      "MADERA": "Wood",
      "BLANCO": "White",
      "GRIS": "Gray"
  };

  const variantImages = {
    "ESTANTES-PLATA": "silver.webp",
    "ESTANTES-ANTARTICA": "antartica.webp",
    "NEGRO": "black.webp",
    "MADERA": "wood.webp",
    "BLANCO": "white.webp",
    "GRIS": "gray.webp",
};


const reloadModel = async () => {
  await toggleVariant("ESTANTES", "ESTANTES-PLATA");
  await toggleVariant("PUERTAS", "NEGRO");
}
  

    return (
      
        <div className="flex flex-col items-center p-4 min-h-[150vh] w-screen mt-12">

                      <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-white sm:p-10 rounded-lg relative">
                          <div className="text-left w-full">
                              <h1 className="text-3xl">Muestra kesseboehmer</h1>
                          </div>
                          <div className='flex items-start justify-end w-full h-14 sm:relative absolute top-0 right-2'>
                              <ContractButton language={language}/>
                          </div>
                      </div>

            <model-viewer 
                ref={modelRef}
                tone-mapping="neutral" 
                shadow-intensity="1" 
                id="model-viewer" 
                src="/models/visagra.glb" 
                ar
                camera-controls 
                style={{ width: "80vw", height: "60vh", minWidth: "450px", minHeight: "250px", position: "relative" }}
            ></model-viewer>

            <button
                onClick={handleAnimation}
                className="z-10 w-24 p-2 font-bold text-center text-white transition-all rounded-full bg-lightblue2 "
                id="open-button"
            >
                {isOpen ? translate("close", language) : translate("open", language)}
            </button>


            <section className="flex flex-row items-center justify-center w-full gap-0 overflow-x-auto whitespace-nowrap sm:text-base text-[10px]">
            {Object.keys(variantsByGroup).map((group) => (
              <button
                key={group}
                className="p-2 font-normal text-black"
                onClick={() => setSelectingGroup(group)}
              >
                {selectingGroup === group && <span className="font-normal">• </span>}
                <span className={selectingGroup === group ? "font-bold underline" : "font-normal"}>
                  {language === "en" ? groupNamesEn[group] : groupNames[group]}
                </span>
              </button>
            ))}
          </section>

            <div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 sm:p-2">
                <button 
                    className="flex items-center justify-center sm:px-2 px-1 py-1 aspect-square ring-[2px] ring-zinc-500 text-black transition-all rounded-full hover:bg-gray-300 hover:white"
                    onClick={() => reloadModel()}
                >
                    <img src="/reload.svg" className="sm:w-full w-1/2" alt="Reload" />
                </button>
                {variantsByGroup[selectingGroup]?.map((variant) => (
                    <button
                        key={variant}
                        className={`flex items-center justify-center rounded-full ring-[2px] ring-zinc-500 transition-all ${
                            activeVariants[selectingGroup] === variant
                                ? "px-4 py-2 sm:w-auto sm:min-w-32 w-16 bg-white text-black font-bold"
                                : "w-10 h-10"
                        }`}
                        onClick={() => toggleVariant(selectingGroup, variant)}
                    >
                        <img className="w-10 h-10 rounded-full ring-[1px] ring-black" src={variantImages[variant]} alt={variant} />
                        {activeVariants[selectingGroup] === variant && (
                            <span className="ml-2 text-base">{language === "en" ? variantNamesEn[variant] : variantNames[variant]}</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}