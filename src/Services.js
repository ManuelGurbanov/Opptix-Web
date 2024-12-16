import React from 'react';
import { useState } from "react";
import { translate } from "./Translations"; 

function Services({language, services}) {
  let [actualService, setActualService] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className="flex justify-center items-center p-4 bg-gray1 text-black gap-4 h-[8vh] z-50 min-w-[40vw] max-w-[75vw] m-0 ring-1 ring-black mt-24">
          {services.map((service, index) => (
            console.log(service),
            <button
              onClick={() => setActualService(service.id)}
              key={index}
              className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 hidden md:block ${
                actualService === service.id ? "opacity-100" : "opacity-60"
              }`}
            >
              {service.name}
            </button>
          ))}
      </div>


      <div className='w-full flex flex-row gap-12 h-full px-24 mt-5 items-start justify-center'>
          <div>
            <h1 className='text-2xl font-bold mb-5'>{services[actualService].name}</h1>
            <p className='text-md'>{services[actualService].description}</p>
          </div>
          
          <div className="w-full h-3/4 ring-2 ring-zinc-500">
          {services[actualService].component}
          </div>
      </div>
    </div>

  );
}

export default Services;
