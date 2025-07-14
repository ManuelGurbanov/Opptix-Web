import React, { useEffect, useRef, useState } from "react";
import "@google/model-viewer";
import { translate } from "./Translations";
import SeeButton from "./SeeInYourSpace";

const ParrillaModelViewer = ({ modelSrc, setTotalPriceParrilla, language}) => {
  const modelViewerRef = useRef(null);
  const ref = useRef(null);

  const [activeVariants, setActiveVariants] = useState({
    RUEDAS: "OFF-RUEDAS",
    ESTANTE: "ESTANTE-METAL",
    ESTANTE_IZQ: "OFF-ESTANTE-IZQ",
    ESTANTE_DER: "OFF-ESTANTE-DER",
    PUERTAS: "ON-PUERTAS",
    TAPA: "OFF-TAPA",
    BASE: "BASE-NEGRA"
  });
  const [selectingGroup, setSelectingGroup] = useState("RUEDAS");

  const [priceChanges, setPriceChanges] = useState([]);
  const VARIANT_PRICES = {
    "ON-RUEDA": 100,
    "OFF-RUEDAS": 0,
    "ESTANTE-METAL": 200,
    "ESTANTE-MADERA": 300,
    "ON-ESTANTE-IZQ": 100,
    "OFF-ESTANTE-IZQ": 0,
    "ON-ESTANTE-IZQ-CLARO": 200,
    "ON-ESTANTE-DER": 100,
    "OFF-ESTANTE-DER": 0,
    "ON-ESTANTE-DER-CLARO": 200,
    "ON-PUERTAS": 100,
    "OFF-PUERTAS": 0,
    "ON-TAPA-NEGRA": 100,
    "ON-TAPA-PLATEADA": 200,
    "OFF-TAPA": 0,
    "BASE-NEGRA": 100,
    "BASE-PLATEADA": 200,
  };
  const variantNames = {
    "ON-RUEDA": "Con Ruedas",
    "OFF-RUEDAS": "Sin Ruedas",
    "ESTANTE-METAL": "Estante Metálico",
    "ESTANTE-MADERA": "Estante de Madera",
    "ON-ESTANTE-IZQ": "Oscuro",
    "OFF-ESTANTE-IZQ": "Desactivado",
    "ON-ESTANTE-IZQ-CLARO": "Claro",
    "ON-ESTANTE-DER": "Oscuro",
    "OFF-ESTANTE-DER": "Desactivado",
    "ON-ESTANTE-DER-CLARO": "Claro",
    "ON-PUERTAS": "Oscuro",
    "ON-PUERTAS-CLARA": "Claro",
    "OFF-PUERTAS": "Desactivadas",
    "ON-TAPA-NEGRA": "Negra",
    "ON-TAPA-PLATEADA": "Plateada",
    "OFF-TAPA": "Desactivada",
    "BASE-NEGRA": "Negra",
    "BASE-PLATEADA": "Plateada",
  };
  const variantNamesEn = {
    "ON-RUEDA": "Enabled",
    "OFF-RUEDAS": "Disabled",
    "ESTANTE-METAL": "Metal Shelf",
    "ESTANTE-MADERA": "Wooden Shelf",
    "ON-ESTANTE-IZQ": "Dark",
    "OFF-ESTANTE-IZQ": "Disabled",
    "ON-ESTANTE-IZQ-CLARO": "Light",
    "ON-ESTANTE-DER": "Dark",
    "OFF-ESTANTE-DER": "Disabled",
    "ON-ESTANTE-DER-CLARO": "Light",
    "ON-PUERTAS": "Dark Wood",
    "ON-PUERTAS-CLARA": "Light Wood",
    "OFF-PUERTAS": "Disabled",
    "ON-TAPA-NEGRA": "Black",
    "ON-TAPA-PLATEADA": "Silver",
    "OFF-TAPA": "Disabled",
    "BASE-NEGRA": "Black",
    "BASE-PLATEADA": "Silver"
  };
  const groupNames = {
    RUEDAS: "Ruedas",
    ESTANTE: "Estante",
    ESTANTE_IZQ: "Estante Izquierdo",
    ESTANTE_DER: "Estante Derecho",
    PUERTAS: "Puertas",
    TAPA: "Tapa",
    BASE: "Base"
  };
  const groupNamesEn = {
    RUEDAS: "Wheels",
    ESTANTE: "Shelf",
    ESTANTE_IZQ: "Left Shelf",
    ESTANTE_DER: "Right Shelf",
    PUERTAS: "Doors",
    TAPA: "Cover",
    BASE: "Base"
  };
  const variantsByGroup = {
    TAPA: ["ON-TAPA-PLATEADA","ON-TAPA-NEGRA", "OFF-TAPA"],
    ESTANTE: ["ESTANTE-METAL", "ESTANTE-MADERA"],
    PUERTAS: ["ON-PUERTAS","ON-PUERTAS-CLARA", "OFF-PUERTAS"],
    RUEDAS: ["ON-RUEDA", "OFF-RUEDAS"],
    ESTANTE_IZQ: ["ON-ESTANTE-IZQ", "ON-ESTANTE-IZQ-CLARO", "OFF-ESTANTE-IZQ"],
    ESTANTE_DER: ["ON-ESTANTE-DER", "ON-ESTANTE-DER-CLARO", "OFF-ESTANTE-DER"],
    BASE: ["BASE-NEGRA", "BASE-PLATEADA"],
  };
  const toggleVariant = async (category, variant) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    modelViewer.variantName = variant;
    await modelViewer.model.updateComplete;

    setActiveVariants((prev) => {
      const newVariants = { ...prev, [category]: variant };
      updateTotalPrice(newVariants, prev[category]);
      return newVariants;
    });

    updateTotalPrice({ ...activeVariants, [category]: variant });
  };

  const [priceChange, setPriceChange] = useState(null);
  const BASE_PRICE = 1500;

  const [isFullscreen, setIsFullscreen] = useState(false);

  const updateTotalPrice = (variants, prevVariant) => {
    const additionalCost = Object.values(variants).reduce((sum, variant) => sum + (VARIANT_PRICES[variant] || 0), 0);
    const newTotal = BASE_PRICE + additionalCost;
    
    if (prevVariant) {
      const priceDiff = (VARIANT_PRICES[variants[selectingGroup]] || 0) - (VARIANT_PRICES[prevVariant] || 0);
      const id = Date.now();
      setPriceChanges((prev) => [...prev, { id, value: priceDiff }]);
      setTimeout(() => {
        setPriceChanges((prev) => prev.filter(change => change.id !== id));
      }, 1000);
    }
    
    setTotalPriceParrilla(newTotal);
  };


  const reloadModel = async () => {
    await toggleVariant("RUEDAS", "OFF-RUEDAS");
    await toggleVariant("ESTANTE", "ESTANTE-METAL");
    await toggleVariant("ESTANTE_IZQ", "OFF-ESTANTE-IZQ");
    await toggleVariant("ESTANTE_DER", "OFF-ESTANTE-DER");
    await toggleVariant("PUERTAS", "ON-PUERTAS");
    await toggleVariant("TAPA", "OFF-TAPA");
    await toggleVariant("BASE", "BASE-NEGRA");
  }

  const [isOpen, setIsOpen] = useState(false);


  const handleAnimation = () => {
    const button = document.querySelector("#open-button");
    const modelViewer = document.querySelector("#model-viewer");
    if (modelViewer) {
      modelViewer.play();
      button.disabled = true;
      setTimeout(() => {
        modelViewer.pause();
        button.disabled = false;
        setIsOpen((prev) => !prev);
      }, 2000);
    }
  };

  const handleFullscreen = () => {
    if (ref.current) {
      if (document.fullscreenElement) {
        setIsFullscreen(false);
        document.exitFullscreen();
      } else {
        setIsFullscreen(true);
        ref.current.requestFullscreen();
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


  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 bg-white">

      <div className="absolute top-0 z-50 gap-2 left-32">
      {priceChanges.map((change) => (
        change.value !== 0 ? (
        <div 
          key={change.id} 
          className="absolute top-0 flex items-center justify-center w-24 h-8 px-3 text-lg font-bold text-black rounded-full left-32 font-base  bg-lightblue6 animate-fade text-nowrap"
          style={{ animation: 'fade-out 1s forwards' }}
        >
          {change.value > 0 ? `+ $${change.value}` : `- $${Math.abs(change.value)}`}
        </div>
        ) : null
      ))}
      </div>

      <section className="relative bg-white" ref={ref}>
          <model-viewer
          id="model-viewer"
          loading="eager"
          poster="/loading.gif"
          ref={modelViewerRef}
          src={modelSrc}
          alt="Modelo 3D"
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          style={{
            width: isFullscreen ? "100vw" : "80vw",
            height: isFullscreen ? "100vh" : "50vh",
            minWidth: "450px",
            minHeight: "250px",
            "@media (max-width: 700px)": { width: "90vw" },
            position: "relative",
          }}
          onLoad={() => {
            const modelViewer = document.querySelector("#model-viewer");
          }}
        >

          <header className="absolute sm:flex hidden items-start justify-end top-2 right-7 w-full gap-2">
          <div className="hidden sm:block">
            <SeeButton language={language} qrCode="/qrcodes/parrilla.png" />
          </div>
          <button
            onClick={handleFullscreen}
            className="sm:flex hidden items-center justify-center px-2 py-1 transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:scale-105 w-12 h-12"
          >
            {!isFullscreen ? (
              <svg
                width="24px"
                height="24px"
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
          </header>

          

        </model-viewer>

          <div className={"flex flex-col items-center justify-start w-full p-2 " + (isFullscreen ? " bottom-2 absolute " : " -bottom-36")}>
          {activeVariants.TAPA != "OFF-TAPA" && (
            <button
              onClick={handleAnimation}
              className="z-10 w-24 p-2 font-bold text-center text-white transition-all rounded-full bg-lightblue2"
              id="open-button"
            >
              {isOpen ? translate("close", language) : translate("open", language)}
            </button>

            )}
            
            <section className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-4 px-1">
              {/* Primera fila: 3 botones */}
              <div className="flex justify-center gap-2 sm:gap-4">
                {Object.keys(variantsByGroup).slice(0, 3).map((group) => (
                  <button
                    key={group}
                    className={`px-2 py-1 sm:px-4 sm:py-2 text-black text-base whitespace-nowrap min-w-fit
                      ${selectingGroup === group ? "font-black" : "font-semibold"}`}
                    onClick={() => setSelectingGroup(group)}
                  >
                    {selectingGroup === group && <span className="font-normal">• </span>}
                    <span className={selectingGroup === group ? "font-bold underline" : "font-normal"}>
                      {language === "en" ? groupNamesEn[group] : groupNames[group]}
                    </span>
                  </button>
                ))}
              </div>

                {/* Segunda fila: 3 botones */}
              <div className="flex justify-center gap-2 sm:gap-4">
                  {Object.keys(variantsByGroup).slice(3, 6).map((group) => (
                    <button
                      key={group}
                      className={`px-2 py-1 sm:px-4 sm:py-2 text-black sm:text-base whitespace-nowrap min-w-fit
                        ${selectingGroup === group ? "font-black" : "font-semibold"}`}
                      onClick={() => setSelectingGroup(group)}
                    >
                    {selectingGroup === group && <span className="font-normal">• </span>}
                    <span className={selectingGroup === group ? "font-bold underline" : "font-normal"}>
                      {language === "en" ? groupNamesEn[group] : groupNames[group]}
                    </span>
                    </button>
                  ))}
                </div>
              </section>





            <div className="flex flex-row items-center justify-center w-full gap-2 p-2 overflow-x-auto whitespace-nowrap">
            <button className="flex items-center justify-center sm:px-2 px-1 py-1 aspect-square text-black transition-all  rounded-full bg-lightblue6  hover:bg-lightblue2 hover:text-white"
                                onClick={() => reloadModel()}>
                   <img src="/reload.svg" className="sm:w-full w-1/2"></img>
              </button>
              {variantsByGroup[selectingGroup].map((variant) => (
                <button
                  key={variant}
                  className={`p-2 rounded-full transition-all sm:min-w-24 text-sm sm:text-base text-center  ${
                    activeVariants[selectingGroup] === variant ? "text-white bg-lightblue2 font-bold" : "text-zinc-700 bg-lightblue6"
                  }`}
                  onClick={() => toggleVariant(selectingGroup, variant)}
                >
                  {language === "en" ? variantNamesEn[variant] : variantNames[variant]}
                </button>
              ))}
            </div>
          </div>
      </section>

    </div>
  );
};

export default ParrillaModelViewer;