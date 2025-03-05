import React from "react";
import { useState, useEffect } from "react";
import ARModelViewer from "./ARModelViewer";
import CarModelViewer from "./CarModelViewer";
import ParrillaModelViewer from "./ParrillaModelViewer";
import SillonViewer from "./SillonViewer";

import { translate } from "./Translations";
import ContractButton from "./ContractButton";
export default function AllConfigurators({language}) {

    const [selectedConfigurator, setSelectedConfigurator] = useState("car");

    const [totalPriceCar, setTotalPriceCar] = useState(20000);
    const [totalPriceParrilla, setTotalPriceParrilla] = useState(1500);

    const [displayedPrice, setDisplayedPrice] = useState(totalPriceCar);

    useEffect(() => {
        const targetPrice = selectedConfigurator === "car" ? totalPriceCar : totalPriceParrilla;
        const difference = Math.abs(displayedPrice - targetPrice);

        if (difference > 1500) {
            setDisplayedPrice(targetPrice);
        } else if (displayedPrice !== targetPrice) {
            const step = displayedPrice < targetPrice ? 5 : -5;
            const interval = setInterval(() => {
                setDisplayedPrice((prev) => {
                    if ((step > 0 && prev >= targetPrice) || (step < 0 && prev <= targetPrice)) {
                        clearInterval(interval);
                        return targetPrice;
                    }
                    return prev + step;
                });
            }, 10); // Ajusta la velocidad aquí

            return () => clearInterval(interval);
        }
    }, [totalPriceCar, totalPriceParrilla, selectedConfigurator]);


    return (
        <>
        <section className='w-full min-h-[150vh] flex flex-col justify-start items-center rounded-lg gap-0 sm:mt-12 relative px-12'>
            <header className="flex items-center justify-between w-full gap-4">
                <header className="flex flex-col items-start self-start justify-start w-1/2 gap-3 p-4">
                    <ContractButton language={language}/>
                    <div className="flex flex-col items-center justify-center w-64 text-left">
                        <h1 className="w-full text-base font-bold">{translate("finalPrice", language)}</h1>
                        <h2 className="w-full text-3xl">
                         {displayedPrice.toLocaleString()} <span className="font-semibold">USD</span>
                        </h2>
                    </div>
                </header>
                <div className="flex flex-col items-center justify-start w-1/2 gap-4">
                    <h1 className="text-[60px] text-right w-full">{translate("configTittle", language)}</h1>
                    <p className='w-full font-light text-right'>
                        {translate("configuratorsDescription", language)}
                    </p>
                </div>
            </header>

            <div className="items-start justify-between hidden w-full sm:flex">
            
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
            <SillonViewer modelSrc="/models/sillon.glb" language={language} />
            </>
            }
            </section>
        </>
    );
}