import React, { useState } from 'react';
import ARModelViewer from './ARModelViewer';
import Viewer from './Viewer';

function OurServices({ language }) {
  const texturePath = '/models/redlabel.webp';
  let [actualService, setActualService] = useState(1);
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

  const raiseService = () => {
    setActualService((prevService) => 
      (prevService + 1) % services.length
    );
  };
  
  const lowerService = () => {
    setActualService((prevService) => 
      (prevService - 1 + services.length) % services.length
    );
  };
  


  return (
    <div className='w-screen bg-white text-black p-3 flex items-center flex-col sm:px-24'>
      <h1 className='font-bold w-full text-left mt-3 mb-3 ml-5 text-3xl'>
        Nuestros Servicios
      </h1>

      <section className='flex justify-center items-center w-screen'>
          <button onClick={() => lowerService()} className="p-2 rounded-lg hover:opacity-100 opacity-40 transition-all ease-in-out"> 
              <img
                    className="rotate-90 w-6 mr-6"
                    src='/small_arrow.png'
                    alt="Flecha hacia izquierda">
              </img>
            </button>
          <section className="flex rounded-lg flex-col sm:flex-row ring-2 sm:ring-zinc-400 mt-4 p-0 sm:p-8">
            <div className="bg-zinc-600 w-full sm:w-[422px] sm:h-[502px] aspect-square sm:aspect-auto relative">
              <ARModelViewer modelSrc='/models/rack-final.glb' controlsContainerId="material-controls-own" whiteWoodTextureUrl={"https://t4.ftcdn.net/jpg/01/66/54/45/360_F_166544573_4XQicLyGnsCvKZi2KifqFqPpu73DYLPT.jpg"} />
              <div id="material-controls-own" className="bg-transparent p-4 rounded absolute bottom-0 gap-2"></div>
            </div>
            
            <div className="bg-white w-full sm:w-[448px] sm:h-[502px] aspect-square sm:aspect-auto p-7 flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-lg w-full text-left mt-3 mb-3">
                  {services[actualService].name}
                </h1>
                <p className="font-normal text-md w-full text-left mb-3">
                  {services[actualService].description}
                </p>
              </div>  
            </div>
          </section>


            <button onClick={() => raiseService()} className="p-2 rounded-lg hover:opacity-100 opacity-40 transition-all ease-in-out"> 
              <img
                    className="-rotate-90 w-6 ml-6"
                    src='/small_arrow.png'
                    alt="Flecha hacia derecha">
              </img>
            </button>
      </section>
    </div>
  );
}

export default OurServices;
