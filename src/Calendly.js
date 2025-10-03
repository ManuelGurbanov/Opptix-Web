import { PopupModal } from "react-calendly";
import { useState } from "react";
import {translate} from "./Translations";

export default function CalendlyScheduler({language, setRender, lightblueBackground = false}) {

  return (
    <div>
     <a 
      href="https://landing.opptix.com.ar/home"
     // onClick={openCalendly} 
      className={
        "w-full px-3 py-2 rounded-xl  hover:scale-105 transition-all font-semibold duration-75 mt-3" + 
        (lightblueBackground ? "bg-lightblue text-black" : "bg-black hover:bg-zinc-800 text-white")
      }
    >

        {translate("agendar", language)}
      </a>
    </div>
  );
}

export function abrirCalendly() {
  const event = new Event("open-calendly");
  window.dispatchEvent(event);
}
