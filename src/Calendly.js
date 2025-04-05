import { PopupModal } from "react-calendly";
import { useState } from "react";
import {translate} from "./Translations";

const CALENDLY_URL = "https://calendly.com/gasparvisualmkt/30min";

export default function CalendlyScheduler({language, setRender, lightblueBackground = false}) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => {
    setIsOpen(true)
  };
  const closeCalendly = () => setIsOpen(false);

  return (
    <div>
     <button 
      onClick={openCalendly} 
      className={
        "w-full px-3 py-2 rounded-xl  hover:scale-105 transition-all font-semibold duration-75 " + 
        (lightblueBackground ? "bg-lightblue text-black" : "bg-black hover:bg-zinc-800 text-white")
      }
    >

        {translate("agendar", language)}
      </button>
      {isOpen && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={closeCalendly}
          open={isOpen}
          rootElement={document.body}
        />
      )}
    </div>
  );
}

export function abrirCalendly() {
  const event = new Event("open-calendly");
  window.dispatchEvent(event);
}
