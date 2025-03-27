import { useRef, useEffect, useState } from "react";
import "@google/model-viewer";

export default function Demonstration() {
    const modelRef = useRef(null);
    const [activeVariants, setActiveVariants] = useState({});
    const variantOptions = {
        color: ["ESTANTES-PLATA", "ESTANTES-ANTARTICA", "NEGRO", "MADERA", "BLANCO", "GRIS"],
    };
    const selectingGroup = "color";

    useEffect(() => {
        const modelViewer = document.querySelector("model-viewer");
        if (modelViewer) {
            modelViewer.addEventListener("load", loadModelAnimations);
            modelRef.current = modelViewer;
        }
    }, []);

    function loadModelAnimations() {
        if (!modelRef.current) return;
        modelRef.current.availableAnimations.forEach(animationName => {
            const input = document.createElement("input");
            input.type = "range";
            input.min = "0";
            input.max = "1";
            input.step = "0.01";
            input.value = "1";
            input.id = animationName;
            input.addEventListener("input", updateAnimation);
            document.body.appendChild(input);
        });
    }

    function updateAnimation(event) {
        if (!modelRef.current) return;
        modelRef.appendAnimation(event.target.id, {
            weight: parseFloat(event.target.value)
        });
    }

    const toggleVariant = async (category, variant) => {
        if (!modelRef.current) return;
        modelRef.current.variantName = variant;
        await modelRef.current.updateComplete;
        setActiveVariants((prev) => ({ ...prev, [category]: variant }));
    };

    return (
        <div className="flex flex-col items-center p-4 min-h-screen w-screen mt-12">
            <model-viewer 
                tone-mapping="neutral" shadow-intensity="1" autoplay environment-image="test.hdr"
                ref = {modelRef}
                id="model-viewer" 
                src="/models/visagra.glb" 
                ar 
                auto-rotate 
                camera-controls 
                style={{
                    width: "80vw",
                    height: "50vh",
                    minWidth: "450px",
                    minHeight: "250px",
                    "@media (max-width: 700px)": { width: "100vw" },
                    position: "relative",
                }}
            ></model-viewer>
            <button 
                onClick={loadModelAnimations} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
                Reproducir Animaciones
            </button>
            <div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 sm:p-2 mt-4">
                <button 
                    className="flex items-center justify-center sm:px-2 px-1 py-1 aspect-square text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white"
                    onClick={() => window.location.reload()}
                >
                    <img src="/reload.svg" className="sm:w-full w-1/2" alt="Reload" />
                </button>
                {variantOptions[selectingGroup]?.map((variant) => (
                    <button
                        key={variant}
                        className={`sm:p-2 px-4 py-2 rounded-full transition-all sm:w-24 w-12 sm:text-base text-[10px] text-center flex items-center justify-center ${
                            activeVariants[selectingGroup] === variant ? "text-white bg-lightblue2 font-bold" : " text-zinc-700 bg-lightblue6"
                        }`}
                        onClick={() => toggleVariant(selectingGroup, variant)}
                    >
                        {variant}
                    </button>
                ))}
            </div>
        </div>
    );
}
