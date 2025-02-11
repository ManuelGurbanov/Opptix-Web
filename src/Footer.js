import React from "react";
import Calendly from "./Calendly";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { translate } from "./Translations";
function Footer({
  language,
  services = [],
  caseStudies = [],
  reasons = [],
  packs = [],
}) {
  return (
    <div
      className="w-full h-auto bg-zinc-200 flex flex-col sm:flex-row justify-center items-start text-black sm:p-12 p-3 gap-9 text-sm"
      id="get-started"
    >
      {/* Intro Section */}
      <div className="flex-2 sm:mt-0 mt-3">
        <h1 className="font-bold">Newsletter</h1>
        
        <div className="w-full flex gap-1 mt-2">
          <input
            type="text"
            placeholder="Tu correo"
            className="w-full p-2 rounded-lg"
          />
          <button className="px-3 py-2 rounded-xl bg-zinc-800 text-white">
            Enviar
          </button>
        </div>

        <div className="w-full flex gap-1 mt-4">
          <button className="rounded-full bg-black text-white p-2 hover:bg-zinc-800 hover:scale-105 transition-all duration-75">
            <LinkedinIcon/>
          </button>
          <button className="rounded-full bg-black text-white p-2 hover:bg-zinc-800 hover:scale-105 transition-all duration-75">
            <InstagramIcon/>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex-col gap-1 text-black sm:flex hidden">
        <h1 className="font-bold">Servicios</h1>
        {services.map((service) => (
          <div key={service.id} className="hover:underline cursor-pointer">
            <a className="text-xs hover:underline">{service.name}</a>
          </div>
        ))}
      </div>

      {/* Case Studies Section */}
      <div className="flex-col gap-1 text-black sm:flex hidden">
        <h1 className="font-bold">Casos de Estudio</h1>
        {caseStudies.map((caseStudy, index) => (
          <a 
            key={index} 
            className="text-xs hover:underline" 
            href={`https://opptix.com.ar/case-study?case=${encodeURIComponent(caseStudy)}`}
          >
            {caseStudy}
          </a>
        ))}
        <h1 className="font-bold mt-5">Packs</h1>
        {packs.map((pack, index) => (
          <a key={index} className="text-xs">{pack}</a>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="flex-col gap-2 text-black sm:flex hidden">
        <h1 className="font-bold">¿Por qué trabajar juntos?</h1>
        <p className="text-xs">{translate("reason1", language)}</p>
        <p className="text-xs">{translate("reason2", language)}</p>
        <p className="text-xs">{translate("reason3", language)}</p>
        <p className="text-xs">{translate("reason4", language)}</p>
        <Calendly/>
      </div>


    </div>
  );
}

export default Footer;
