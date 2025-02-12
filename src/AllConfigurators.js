import React from "react";
import { useState } from "react";
import ARModelViewer from "./ARModelViewer";
import CarModelViewer from "./CarModelViewer";
import ParrillaModelViewer from "./ParrillaModelViewer";

export default function AllConfigurators() {

    const [selectedConfigurator, setSelectedConfigurator] = useState("car");
    return (
        <>
        <section className='w-full min-h-screen flex flex-col justify-start items-center rounded-lg gap-0 mt-12'>

            <div className="hidden sm:flex justify-center items-center p-4 grayGradientVariant text-black gap-4 h-[30px] z-30 min-w-[40vw] w-[50vw] m-0 ring-1 ring-zinc-300 rounded-lg">
                <button
                    onClick={() => setSelectedConfigurator("car")}
                    className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
                    selectedConfigurator === "car" ? "font-bold underline" : ""
                    }`}
                >
                    Auto
                </button>
                <button
                    onClick={() => setSelectedConfigurator("parrilla")}
                    className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
                        selectedConfigurator === "parrilla" ? "font-bold underline" : ""
                    }`}
                >
                    Parrilla
                </button>
                <button
                    onClick={() => setSelectedConfigurator("rack")}
                    className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
                    selectedConfigurator === "rack" ? "font-bold underline" : ""
                    }`}
                >
                    Rack
                </button>
            </div>

            {selectedConfigurator == "parrilla" && <ParrillaModelViewer modelSrc="/models/parrilla.glb" controlsContainerId="material-controls" />}

            {selectedConfigurator == "car" && <CarModelViewer modelSrc="/models/car.glb"/>}

            {selectedConfigurator=="rack" && 
            
            <>
            <ARModelViewer modelSrc="/models/rack.glb" controlsContainerId="material-controls-rack" />
            <div
                id="material-controls-rack"
                className="bg-transparent p-4 rounded bottom-0 gap-2 hidden sm:flex"
                ></div>
            </>
            }
      </section>
        </>
    );
}