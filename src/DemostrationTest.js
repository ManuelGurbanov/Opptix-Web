import { useRef, useEffect, useState } from "react";
import "@google/model-viewer";
import { translate } from "./Translations";

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
    }, []);

    const toggleVariant = async (category, variant) => {
        if (!modelRef.current) return;
        modelRef.current.variantName = variant;
        await modelRef.current.updateComplete;
        setActiveVariants((prev) => ({ ...prev, [category]: variant }));
    };

    const handleAnimation = () => {
        if (modelRef.current) {
            modelRef.current.play();
            setTimeout(() => {
                modelRef.current.pause();
                setIsOpen((prev) => !prev);
            }, 2000);
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
  

    return (
        <div className="flex flex-col items-center p-4 min-h-screen w-screen mt-12">
            <model-viewer 
                ref={modelRef}
                tone-mapping="neutral" 
                shadow-intensity="1" 
                id="model-viewer" 
                src="/models/visagra.glb" 
                ar 
                auto-rotate 
                camera-controls 
                style={{ width: "80vw", height: "50vh", minWidth: "450px", minHeight: "250px", position: "relative" }}
            ></model-viewer>
            <button
                onClick={handleAnimation}
                className="z-10 w-24 p-2 font-bold text-center text-white transition-all rounded-full bg-lightblue2"
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

            <div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 sm:p-2 mt-4">
                <button 
                    className="flex items-center justify-center sm:px-2 px-1 py-1 aspect-square text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white"
                    onClick={() => window.location.reload()}
                >
                    <img src="/reload.svg" className="sm:w-full w-1/2" alt="Reload" />
                </button>
                {variantsByGroup[selectingGroup]?.map((variant) => (
                    <button
                        key={variant}
                        className={`sm:p-2 px-4 py-2 rounded-full transition-all sm:w-24 w-12 sm:text-base text-[10px] text-center flex items-center justify-center ${
                            activeVariants[selectingGroup] === variant ? "text-white bg-lightblue2 font-bold" : " text-zinc-700 bg-lightblue6"
                        }`}
                        onClick={() => toggleVariant(selectingGroup, variant)}
                    >
                       {language === "en" ? variantNamesEn[variant] : variantNames[variant]}
                    </button>
                ))}
            </div>
        </div>
    );
}