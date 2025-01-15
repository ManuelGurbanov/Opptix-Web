import React from "react";

function Footer({
  language,
  services = [],
  caseStudies = [],
  packages = [],
  benefits = [],
}) {
  return (
    <div
      className="w-full h-auto bg-zinc-200 flex flex-col sm:flex-row justify-center items-start text-black sm:p-12 p-3 gap-9 text-sm"
      id="get-started"
    >
      {/* Intro Section */}
      <div className="flex-2 sm:mt-0 mt-12">
        <h1 className="font-bold">Opptix</h1>
        <h2>3D</h2>

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
          <button className="px-3 py-2 rounded-full aspect-square bg-zinc-800 text-white">
            In
          </button>
          <button className="px-3 py-2 rounded-full aspect-square bg-zinc-800 text-white">
            Ig
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex-col gap-2 text-black sm:flex hidden">
        <h1 className="font-bold">Servicios</h1>
        {services.map((service) => (
          <div key={service.id} className="hover:underline cursor-pointer">
            <a className="font-semibold text-xs">{service.name}</a>
          </div>
        ))}
      </div>

      {/* Case Studies Section */}
      <div className="flex-col gap-2 text-black sm:flex hidden">
        <h1 className="font-bold">Casos de Estudio</h1>
        {caseStudies.map((caseStudy, index) => (
          <a key={index} className="hover:underline">{caseStudy}</a>
        ))}
        <h1 className="font-bold mt-5">Packs</h1>
        {packages.map((pack, index) => (
          <a key={index} className="hover:underline">{pack}</a>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="flex-col gap-2 text-black sm:flex hidden">
        {benefits.map((benefit, index) => (
          <h1 key={index} className="font-bold">{benefit}</h1>
        ))}
      </div>
    </div>
  );
}

export default Footer;
