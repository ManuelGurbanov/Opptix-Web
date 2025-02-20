import React from "react";
import { useState } from "react";
import ARModelViewer from "./ARModelViewer";
import CarModelViewer from "./CarModelViewer";
import ParrillaModelViewer from "./ParrillaModelViewer";
import SillonViewer from "./SillonViewer";

import { translate } from "./Translations";

export default function AllConfigurators({language}) {

    const [selectedConfigurator, setSelectedConfigurator] = useState("car");

    const [totalPriceCar, setTotalPriceCar] = useState(20000);
    const [totalPriceParrilla, setTotalPriceParrilla] = useState(1500);

    return (
        <>
        <section className='w-full min-h-screen flex flex-col justify-start items-center rounded-lg gap-0 mt-12'>

            <div className="hidden sm:flex justify-between items-start w-full px-24">
                
                <nav className="hidden sm:flex justify-center items-center p-4 grayGradientVariant text-black gap-4 h-[30px] z-30 min-w-[40vw] w-[50vw] m-0 ring-1 ring-zinc-300 rounded-lg">
                    <button
                        onClick={() => setSelectedConfigurator("car")}
                        className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
                        selectedConfigurator === "car" ? "font-bold underline" : ""
                        }`}
                    >
                        {translate("car", language)}
                    </button>
                    <button
                        onClick={() => setSelectedConfigurator("parrilla")}
                        className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
                            selectedConfigurator === "parrilla" ? "font-bold underline" : ""
                        }`}
                    >
                        {translate("grill", language)}
                    </button>
                    <button
                        onClick={() => setSelectedConfigurator("chair")}
                        className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 ${
                        selectedConfigurator === "chair" ? "font-bold underline" : ""
                        }`}
                    >
                        {translate("chair", language)}
                    </button>
                </nav>

                <div className="flex flex-col items-center justify-center text-right">
                    <h1 className="text-base font-bold w-full">Precio Final:</h1>
                    <h2 className="text-xl w-full">
                        {selectedConfigurator === "car" ? `${totalPriceCar} USD` : `${totalPriceParrilla} USD`}
                    </h2>
                </div>


            </div>

            {selectedConfigurator == "parrilla" && <ParrillaModelViewer modelSrc="/models/parrilla.glb" controlsContainerId="material-controls" setTotalPriceParrilla={setTotalPriceParrilla} language={language}/>}

            {selectedConfigurator == "car" && <CarModelViewer modelSrc="/models/car.glb" setTotalPriceCar={setTotalPriceCar} language={language}/>}

            {selectedConfigurator=="chair" && 
            
            <>
            <SillonViewer modelSrc="/models/sillon.glb" />
            </>
            }
      </section>
        </>
    );
}