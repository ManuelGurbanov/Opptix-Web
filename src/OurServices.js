import React, { useState } from 'react';
import ARModelViewer from './ARModelViewer';
import Viewer from './Viewer';

function OurServices({ language }) {
  const texturePath = '/models/redlabel.webp';
  const [actualService, setActualService] = useState(1);
  const textures = {
    "Prueba": "https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045379_640.jpg",
    "Prueba 2": "https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045379_640.jpg",
  };
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
    <div className='w-screen bg-white text-black p-3 flex items-center flex-col sm:px-24'>
      <h1 className='font-bold w-full text-left mt-3 mb-3 ml-5 text-3xl'>
        Nuestros Servicios
      </h1>
      <div className='grid grid-cols-2 sm:flex gap-3 items-center justify-center'>
        {services.map((service) => (
          <button
            key={service.id}
            className={`rounded-2xl p-2 w-48 h-16 hover:opacity-100 transition-all ease-in-out flex items-center justify-center ${
              actualService === service.id ? 'opacity-100' : 'opacity-60'
            }`}
            onClick={() => setActualService(service.id)}
          >
            <img
              className={actualService === service.id ? 'rotate-0 w-3 mr-4 opacity-100' : '-rotate-90 w-3 mr-4 opacity-60'}
              src='/small_arrow.png'
              alt={actualService === service.id ? "Flecha hacia abajo" : "Flecha hacia derecha"}>

            </img>
            <p className='w-full'>
            {service.name}
            </p>
              
          </button>
        ))}
      </div>

      <section className="flex full rounded-lg flex-col sm:flex-row p-8">
        <div className="bg-zinc-600 w-full sm:w-[422px] sm:h-[502px] aspect-square sm:aspect-auto ring-2 ring-black">
          {/* <ARModelViewer modelSrc="/models/rack-modulable.glb" controlsContainerId="material-controls-own"
          /> */}
          <ARModelViewer modelSrc='/models/rack-final.glb' controlsContainerId="material-controls-own" whiteWoodTextureUrl={"https://t4.ftcdn.net/jpg/01/66/54/45/360_F_166544573_4XQicLyGnsCvKZi2KifqFqPpu73DYLPT.jpg"} />
        </div>
        
        <div className="bg-white w-full sm:w-[448px] sm:h-[502px] aspect-square sm:aspect-auto p-7 ring-2 ring-black flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-lg w-full text-left mt-3 mb-3">
              {services[actualService].name}
            </h1>
            <p className="font-normal text-md w-full text-left mb-3">
              {services[actualService].description}
            </p>
          </div>
          
          <div id="material-controls-own" className="mt-4 bg-gray-100 p-4 rounded"></div>
        </div>
      </section>



    </div>
  );
}

export default OurServices;
