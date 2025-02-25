import React from "react";
import { useState } from "react";
import ARModelViewer from "./ARModelViewer";
import CarModelViewer from "./CarModelViewer";
import ParrillaModelViewer from "./ParrillaModelViewer";
import SillonViewer from "./SillonViewer";

import { translate } from "./Translations";
import ContractButton from "./ContractButton";
export default function AllConfigurators({language}) {

    const [selectedConfigurator, setSelectedConfigurator] = useState("parrilla");

    const [totalPriceCar, setTotalPriceCar] = useState(20000);
    const [totalPriceParrilla, setTotalPriceParrilla] = useState(1500);

    return (
        <>
        <section className='w-full min-h-[150vh] flex flex-col justify-start items-center rounded-lg gap-0 sm:mt-12 relative px-12'>
            <header className="w-full flex items-center justify-between gap-4">
                <header className="self-start flex flex-col items-start justify-start p-4 gap-3 w-1/2">
                    <ContractButton/>
                    <div className="flex flex-col items-center justify-center text-right">
                        <h1 className="text-base font-bold w-full">{translate("finalPrice", language)}</h1>
                        <h2 className="text-xl w-full">
                            {selectedConfigurator === "car" ? `${totalPriceCar} USD` : `${totalPriceParrilla} USD`}
                        </h2>
                    </div>
                </header>
                <div className="flex flex-col items-center justify-start gap-4 w-1/2">
                    <h1 className="text-[60px] text-right w-full">Configuradores 3D</h1>
                    <p className='font-light w-full text-right'>
                        Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vivamus at augue eget arcu dictum varius duis at consectetur. 
                        </p>
                </div>
            </header>

            <div className="hidden sm:flex justify-between items-start w-full">
            
                <nav className="hidden sm:flex justify-center items-center p-4 gap-7 text-black h-[30px] z-30 m-0 rounded-lg relative">
                    <button
                        onClick={() => setSelectedConfigurator("car")}
                        className={`hover:scale-105 w-14 text-lg text-center transition ease-in cursor-pointer duration-75 ${
                        selectedConfigurator === "car" ? "font-black" : ""
                        }`}
                    >
                        {translate("car", language)}
                    </button>
                    <button
                        onClick={() => setSelectedConfigurator("parrilla")}
                        className={`hover:scale-105 w-14 text-lg text-center transition ease-in cursor-pointer duration-75 ${
                            selectedConfigurator === "parrilla" ? "font-bold" : ""
                        }`}
                    >
                        {translate("grill", language)}
                    </button>
                    <button
                        onClick={() => setSelectedConfigurator("chair")}
                        className={`hover:scale-105 w-14 text-lg text-center transition ease-in cursor-pointer duration-75 ${
                        selectedConfigurator === "chair" ? "font-bold" : ""
                        }`}
                    >
                        {translate("chair", language)}
                    </button>

                    <hr className="w-full h-[2px] bg-black absolute bottom-0"></hr>
                </nav>

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