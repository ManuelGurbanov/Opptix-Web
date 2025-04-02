import React from "react";
import { useState, useEffect } from "react";
import ARModelViewer from "./ARModelViewer";
import CarModelViewer from "./CarModelViewer";
import ParrillaModelViewer from "./ParrillaModelViewer";
import SillonViewer from "./SillonViewer";

import { translate } from "./Translations";
import ContractButton from "./ContractButton";

import DataBlock from "./DataBlock";

import SeeButton from "./SeeInYourSpace";
import RackViewer from "./RackViewer"
export default function AllConfigurators({language, setContact}) {

    const [selectedConfigurator, setSelectedConfigurator] = useState("rack");

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
            }, 10);

            return () => clearInterval(interval);
        }
    }, [totalPriceCar, totalPriceParrilla, selectedConfigurator]);


    return (
        <>
        <section className='w-full min-h-[150vh] flex flex-col justify-start items-center rounded-lg gap-4 relative sm:px-12 sm:py-2 p-2 mt-2'>
            <header className="flex sm:flex-row flex-col items-center justify-between w-full gap-4">
                <div className="flex flex-col items-center justify-start sm:w-1/2 w-full gap-1">
                    <h1 className="sm:text-[60px] text-2xl text-left w-full sm:mb-3">{translate("configTittle", language)}</h1>
                    <p className='w-full font-light text-left'>
                        {translate("configuratorsDescription", language)}
                    </p>
                </div>

                <div className="flex sm:flex-col flex-row-reverse items-end sm:justify-end justify-between sm:w-1/2 w-full gap-3 sm:p-4 px-2">
                    <ContractButton language={language} setContact={setContact}/>
                    <div className="flex flex-col items-center justify-center w-64 sm:text-right text-left">
                        <h1 className="w-full text-base font-bold">{translate("finalPrice", language)}</h1>
                        <h2 className="w-full sm:text-3xl text-sm">
                         {displayedPrice.toLocaleString()} <span className="font-semibold">USD</span>
                        </h2>
                    </div>
                </div>
            </header>

            <nav className="flex justify-center sm:self-start items-center p-4 gap-7 text-black h-[30px] z-30 m-0 rounded-lg relative">
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
                    <button
                        onClick={() => setSelectedConfigurator("rack")}
                        className={`hover:scale-105 w-14 text-lg text-center transition ease-in cursor-pointer duration-75 ${
                        selectedConfigurator === "rack" ? "font-bold" : ""
                        }`}
                    >
                        Rack
                    </button>

                    <hr className="w-full h-[2px] bg-black absolute bottom-0"></hr>
            </nav>


            {selectedConfigurator == "parrilla" && <ParrillaModelViewer modelSrc="/models/parrilla.glb" controlsContainerId="material-controls" setTotalPriceParrilla={setTotalPriceParrilla} language={language}/>}

            {selectedConfigurator == "car" && <CarModelViewer modelSrc="/models/car.glb" setTotalPriceCar={setTotalPriceCar} language={language}/>}

            {selectedConfigurator=="chair" && 
            
            <>
            <SillonViewer modelSrc="/models/sillon.glb" language={language} />
            </>
            }
            {selectedConfigurator=="rack" && 
            
            <>
            <RackViewer />
            </>
            }
            <footer className="justify-self-center w-screen flex flex-col items-center justify-center gap-4">
            <DataBlock data1="data1" data2="data2" data3="data3" language={language}/> 
            </footer>
            </section>
        </>
    );
}