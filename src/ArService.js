import { useState } from "react";
import ContractButton from "./ContractButton";
import DataBlock from "./DataBlock";
import { translate } from "./Translations";

export default function ArService({ language }) {
    const allImageBlocks = [
        { srcImg: "/ar/silla.webp", srcQR: "/qrcodes/silla1.png", srcImg2: "/ar/silla_1.webp", srcQr2: "/qrcodes/silla7.png" },
        { srcImg: "/ar/silla_2.webp", srcQR: "/qrcodes/silla8.png", srcImg2: "/ar/grill.webp", srcQr2: "/qrcodes/parrilla.png" },
        { srcImg: "/ar/silla3.webp", srcQR: "/qrcodes/silla9.png", srcImg2: "/ar/silla_3.webp", srcQr2: "/qrcodes/sillon2.png" },
        { srcImg: "/ar/silla4.webp", srcQR: "/qrcodes/silla10.png", srcImg2: "/ar/silla_4.webp", srcQr2: "/qrcodes/sillon3.png" }
    ];

    const [visibleBlocks, setVisibleBlocks] = useState(2);

    const renderImageBlock = ({ srcImg, srcQR, srcImg2, srcQr2 }) => (
        <div className="flex items-center justify-center w-screen gap-4">
            <div className="flex items-center justify-center w-1/2">
                <img className="w-[40%] h-auto aspect-square" src={srcQR} alt="QR Code 1" />
                <img className="h-auto max-w-[40%]" src={srcImg} alt="AR Model 1" />
            </div>

            <hr className="bg-black bg-opacity-20 w-[3px] h-32 sm:h-64" />

            <div className="flex justify-center items-center w-1/2">
                <img className="w-[40%] h-auto aspect-square" src={srcQr2} alt="QR Code 2" />
                <img className="h-auto max-w-[40%]" src={srcImg2} alt="AR Model 2" />
            </div>
        </div>
    );

    return (
        <section className="w-full flex flex-col items-center justify-start text-black gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-white h-full p-4 sm:p-8">
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <h1 className="font-black text-4xl sm:text-[80px] w-full text-left">AR/VR</h1>
                    <p className="font-light text-lg sm:text-xl w-full text-left">
                        Con Realidad Aumentada (AR), los usuarios pueden ver cómo se verán los productos en su hogar, mientras que con Realidad Virtual (VR) pueden sumergirse en experiencias más envolventes.
                    </p>
                </div>

                <div className="w-full sm:w-2/5 flex flex-col items-end justify-start gap-6">
                    <ContractButton language={language} />
                </div>
            </div>

            {renderImageBlock(allImageBlocks[0])}

            <div className="w-screen flex flex-col items-center justify-center gap-4">
                <DataBlock data1="data1AR" data2="data2AR" data3="data3AR" language={language} />
            </div>

            {renderImageBlock(allImageBlocks[1])}

            {allImageBlocks.slice(2, visibleBlocks + 1).map((block, index) => (
                <div key={index}>{renderImageBlock(block)}</div>
            ))}

            <div className="flex gap-4">
                {visibleBlocks < allImageBlocks.length - 1 && (
                    <button
                        onClick={() => setVisibleBlocks(visibleBlocks + 1)}
                        className="px-4 py-2 text-black underline rounded hover:scale-105 transition ease-in cursor-pointer duration-75"
                    >
                        {translate("showMore", language)}
                    </button>
                )}

                {visibleBlocks > 2 && (
                    <button
                        onClick={() => setVisibleBlocks(visibleBlocks - 1)}
                        className="px-4 py-2 text-black underline rounded hover:scale-105 transition ease-in cursor-pointer duration-75"
                    >
                        {translate("showLess", language)}
                    </button>
                )}
            </div>
        </section>
    );
}
