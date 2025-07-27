import { useState } from "react"
import { translate } from "./Translations";

export default function SeeButton ({language, qrCode = "/qrcodes/bike.png", rumi}) {
    const [showingQR, setShowingQR] = useState(false);

    const bgMain = rumi ? "bg-rumi" : "bg-lightblue6 hover:bg-lightblue2";
    const bgPopup = rumi ? "bg-rumi" : "bg-lightblue2";

    return (
        <div className="flex flex-col items-center justify-center gap-4 relative">
            <button
                className={`px-2 py-1 text-black transition-all rounded-full ${bgMain} hover:text-white flex items-center justify-center h-12`}
                onClick={() => setShowingQR(!showingQR)}
            >
                <img className="w-8 mr-2 ml-2" src="/ARsvg.svg" alt="QR Code" />
                <p className="mr-4 font-semibold">
                    {language === "es" ? "Ver en tu espacio" : "See in your space"}
                </p>
            </button>

            {showingQR && (
                <div className={`flex flex-col items-center justify-center gap-4 ${bgPopup} bg-opacity-75 rounded-3xl p-4 w-48 absolute -bottom-[200px] z-30`}>
                    <img className="w-full" src={qrCode} alt="QR Code" />
                    <p className="text-xs text-white underline text-center w-full hidden">
                        {translate("scan", language)}
                    </p>
                </div>
            )}
        </div>
    );
}
