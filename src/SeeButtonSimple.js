
import { useState } from "react"
import { translate } from "./Translations";
import { Link } from "react-router-dom";

export default function SeeButton ({language, link = ""}) {

    return (
        <div className="flex sm:hidden flex-col items-center justify-center gap-4 relative">
            <Link to={link} className="px-2 py-1 text-black transition-all rounded-full bg-lightblue6 hover:bg-lightblue2 hover:text-white flex items-center justify-center h-12">
                <img className="w-8 mr-2 ml-2" src="/ARsvg.svg" alt="QR Code"></img>
                <p className="mr-4 font-semibold"> {language === "es" ? "Ver en tu espacio" : "See in your space"}
                </p>
            </Link>
        </div>
    )
}