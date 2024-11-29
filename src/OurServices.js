import React, { useState } from 'react';

function OurServices({ language }) {
  const [actualService, setActualService] = useState(1);
  const services = [
    {
      id: 0,
      name: "Configuradores 3D Interativos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
    },
    {
      id: 1,
      name: "VR/AR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
    },
    {
        id: 2,
        name: "Animaciones 3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
      },
      {
        id: 3,
        name: "Video lanzamiento de productos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
      },
      {
        id: 4,
        name: "Videos explicativos de productos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
      },
      {
        id: 5,
        name: "CGI/FOOH",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
      }

  ];

  return (
    <div className='w-screen bg-white text-black p-3 px-8'>
      <h1 className='font-bold text-lg w-full text-left mt-3 mb-3'>
        Nuestros Servicios
      </h1>
      <div className='flex gap-3 items-center justify-center'>
        {services.map((service) => (
          <button
            key={service.id}
            className={`border-zinc-600 border-2 rounded-2xl p-2 w-48 h-16 hover:scale-105 transition-transform ease-in-out ${
              actualService === service.id ? 'bg-blue-100' : 'bg-white'
            }`}
            onClick={() => setActualService(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>

        {/* Seccion mitad video mitad texto, descripcion */}
      <section className='flex full p-8 h-64 rounded-lg'>
            <div className='bg-zinc-600 w-1/2 p-7'>
            </div>
            <div className='bg-white w-1/2 p-7'>
                <h1 className='font-bold text-lg w-full text-left mt-3 mb-3'>
                    {services[actualService].name}
                </h1>
                <p className='font-normal text-md w-full text-left mb-3'>
                    {services[actualService].description}
                </p>
            </div>
      </section>
    </div>
  );
}

export default OurServices;
