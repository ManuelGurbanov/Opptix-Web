
import { useState } from "react"

export default function SeeButton (language, qrCode = "/qrcodes/bike.png") {
    const [showingQR, setShowingQR] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <button className="px-4 py-3 text-black transition-all border-2 rounded-full bg-lightblue6 border-lightblue hover:bg-lightblue2 hover:text-white" onClick={() => setShowingQR(!showingQR)}>
            {showingQR && language === "es" ? "Ver en tu espacio" : "See in your space"}
        </button>

        {showingQR &&
        <div className="flex flex-row items-center justify-center gap-4 bg-lightblue2 border-lightblue p-4 w-32">

        <img className="w-full" src="/qrcodes/bike.png" alt="QR Code">
        </img>

        </div>
        }
        </div>
    )
}