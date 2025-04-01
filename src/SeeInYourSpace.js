
import { useState } from "react"
import { translate } from "./Translations";

export default function SeeButton ({language, qrCode = "/qrcodes/bike.png"}) {
    const [showingQR, setShowingQR] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <button className="px-2 py-1 text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white flex items-center justify-center h-12" onClick={() => setShowingQR(!showingQR)}>
            <img className="w-8 mr-2 ml-2" src="/ARsvg.svg" alt="QR Code"></img>
           <p className="mr-4 font-semibold"> {language === "es" ? "Ver en tu espacio" : "See in your space"}
           </p>
        </button>

        {showingQR &&
        <div className="flex flex-col items-center justify-center gap-4 bg-lightblue2 bg-opacity-75 rounded-3xl p-4 w-48">

        <img className="w-full" src={qrCode} alt="QR Code">
        </img>
        
        <p className="text-xs text-white underline text-center w-full hidden">
            {translate("scan", language)}
        </p>

        </div>
        }
        </div>
    )
}