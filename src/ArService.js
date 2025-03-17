import { useState } from "react";
import ContractButton from "./ContractButton";
import DataBlock from "./DataBlock";
import { translate } from "./Translations";
import { useEffect } from "react";

export default function ArService({ language }) {
    const allImageBlocks = [
        { srcImg: "/ar/silla.webp", srcQR: "/qrcodes/ecommerce/silla-1.png" },
        { srcImg: "/ar/grill.webp", srcQR: "/qrcodes/parrilla.png" },
        { srcImg: "/ar/silla_2.webp", srcQR: "/qrcodes/ecommerce/silla-8.png" },
        { srcImg: "/ar/silla_1.webp", srcQR: "/qrcodes/ecommerce/silla-7.png" }
    ];

    const [visibleBlocks, setVisibleBlocks] = useState(2);


    const [defaultBlocks, setDefaultBlocks] = useState(2);

    useEffect(() => {
        const updateVisibleBlocks = () => {
            if (window.innerWidth >= 640) {
                setVisibleBlocks(4);
                setDefaultBlocks(4);
            } else {
                setVisibleBlocks(2);
                setDefaultBlocks(2);
            }
        };

        updateVisibleBlocks();
        window.addEventListener("resize", updateVisibleBlocks);
        return () => window.removeEventListener("resize", updateVisibleBlocks);
    }, []);

    return (
        <section className="w-full flex flex-col items-center text-black gap-2 p-2">

            <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-white sm:p-10 rounded-lg relative">
                <div className="text-left w-full">
                    <h1 className="text-3xl sm:text-6xl font-black">AR/VR</h1>
                    <p className="text-lg sm:text-xl font-light mt-2">
                       {translate("ARDescription", language)}
                    </p>
                </div>
                <div className='flex items-start justify-end w-full h-14 sm:relative absolute top-0 right-2'>
                    <ContractButton language={language}/>
                </div>
            </div>

            <section className="w-full block">

            <div className="w-full flex sm:flex-row flex-col gap-6 justify-center items-center">
                    <div className="flex flex-row items-center p-4 rounded-lg justify-center">
                        <article className="flex flex-col items-center justify-center w-40 sm:w-56 p-3">
                            <img className="w-full" src={allImageBlocks[0].srcQR} alt="QR Code" />
                            <p className="underline text-center sm:text-sm text-[6px] w-2/3 sm:w-full">
                                {translate("scan", language)}
                            </p>
                        </article>
                        <img className="mt-4 w-40 sm:w-56" src={allImageBlocks[0].srcImg} alt="AR Model" />
                    </div>

                    <div className="flex flex-col items-center justify-center w-screen gap-4 justify-self-center sm:mt-0 mt-2 sm:hidden">
                        <DataBlock data1="data1AR" data2="data2AR" data3="data3AR" language={language}/>
                    </div>

                    <hr className=" bg-black h-40 w-[2px] bg-opacity-30 hidden sm:block"></hr>

                    <div className="flex flex-row items-center p-4 rounded-lg justify-center">
                        <article className="flex flex-col items-center justify-center w-40 sm:w-56 p-3">
                            <img className="w-full" src={allImageBlocks[1].srcQR} alt="QR Code" />
                            <p className="underline text-center text-sm w-2/3 sm:w-full">
                                {translate("scan", language)}
                            </p>
                        </article>
                        <img className="mt-4 w-40 sm:w-56" src={allImageBlocks[1].srcImg} alt="AR Model" />
                    </div>
            </div>

            <div className="hidden sm:flex flex-col items-center justify-center w-screen gap-4 justify-self-center sm:mt-0 mt-2">
                <DataBlock data1="data1AR" data2="data2AR" data3="data3AR" language={language}/>
            </div>

            <div className="w-full flex sm:flex-row flex-col gap-6 justify-center items-center">
                {allImageBlocks.slice(2, visibleBlocks).map(({ srcImg, srcQR }, index) => (
                    <>
                    <div key={index} className="flex flex-row items-center p-4 rounded-lg">
                        <article className="flex flex-col items-center justify-center w-40 sm:w-56 p-3">
                            <img className="w-full" src={srcQR} alt="QR Code" />
                            <p className="underline text-center text-sm w-2/3 sm:w-full">
                                {translate("scan", language)}
                            </p>
                        </article>
                        <img className="mt-4 w-40 sm:w-56" src={srcImg} alt="AR Model" />
                    </div>
                    {index % 2 === 0 && index + 1 < visibleBlocks && (
                        <hr className="bg-black h-40 w-[2px] bg-opacity-30 hidden sm:block" />
                    )}
                    </>
                ))}
            </div>


            

            <div className="flex gap-4">
                {visibleBlocks < allImageBlocks.length && (
                    <button
                        onClick={() => setVisibleBlocks(visibleBlocks + 1)}
                        className="px-4 py-2 text-black underline rounded hover:scale-105 transition duration-75"
                    >
                        {translate("showMore", language)}
                    </button>
                )}
                {visibleBlocks > defaultBlocks && (
                    <button
                        onClick={() => setVisibleBlocks(visibleBlocks - 1)}
                        className="px-4 py-2 text-black underline rounded hover:scale-105 transition duration-75"
                    >
                        {translate("showLess", language)}
                    </button>
                )}
            </div>

            </section>
        </section>
    );
}