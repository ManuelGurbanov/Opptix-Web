import { PopupModal } from "react-calendly";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/gasparvisualmkt/30min"; // Reemplaza con tu enlace de Calendly

export default function CalendlyScheduler() {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openCalendly} className="w-full bg-black px-3 py-2 rounded-xl text-white hover:scale-105 hover:bg-zinc-800 transition-all duration-75">Agendar Llamada</button>
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
