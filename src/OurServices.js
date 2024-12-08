import React from 'react';
import { useState } from 'react';
import ARModelViewer from './ARModelViewer';

function OurServices() {
  let [actualService, setActualService] = useState(1);
  const services = [
    {
      id: 0,
      name: "Configuradores 3D Interativos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component:
      <>    <ARModelViewer modelSrc="/models/rack-final.glb" controlsContainerId="material-controls" />
            <div id="material-controls" className="bg-transparent p-4 rounded absolute bottom-0 gap-2 hidden sm:block"></div>
      </>
    },
    {
      id: 1,
      name: "VR/AR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      modelSrc: '/models/rack-final.glb',
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 2,
      name: "Animaciones 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 3,
      name: "Video lanzamiento de productos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 4,
      name: "Videos explicativos de productos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
    },
    {
      id: 5,
      name: "CGI/FOOH",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>
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
    <div className='w-screen bg-white text-black p-3 flex flex-col items-center justify-center sm:px-24'>
      <h1 className='font-bold w-full text-left mt-12 sm:mb-12 mb-3 ml-5 text-xl sm:text-3xl'>
        Nuestros Servicios
      </h1>

      <div className='w-screen flex justify-center items-center'>
          <section className='flex justify-center items-center p-3 sm:hidden'>
              <button onClick={() => lowerService()} className="absolute left-0 p-2 rounded-lg hover:opacity-100 opacity-40 transition-all ease-in-out"> 
                  <img
                        className="rotate-90 w-6"
                        src='/small_arrow.png'
                        alt="Flecha hacia izquierda">
                  </img>
                </button>

              <section className="flex rounded-lg flex-col sm:flex-row p-0 sm:p-8 h-[315px]">
                <div className="bg-zinc-600 w-[298px] h-[140px] relative">
                  {services[actualService].component}
                </div>
                
                <div className="bg-white p-1 flex flex-colv w-[298px] h-[147px] justify-start">
                  <div>
                    <h1 className="font-bold text-base w-full text-left mt-3 mb-3">
                      {services[actualService].name}
                    </h1>
                    <p className="font-normal text-sm w-full text-left mb-3">
                      {services[actualService].description}
                    </p>
                  </div>  
                </div>
              </section>


                <button onClick={() => raiseService()} className="absolute right-0 p-2 rounded-lg hover:opacity-100 opacity-40 transition-all ease-in-out"> 
                  <img
                        className="-rotate-90 w-6 ml-6"
                        src='/small_arrow.png'
                        alt="Flecha hacia derecha">
                  </img>
                </button>
          </section>
      </div>


      <section className='flex-col items-center w-2/3 hidden sm:flex'>
        {services.map((service) => (
          <div key={service.id} className={`flex flex-col ${service.id % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} rounded-lg ring-2 sm:ring-zinc-400 mb-8 p-0 sm:p-8 w-full h-[50vh]`}>
            <div className="bg-zinc-600 w-full relative">
              {service.component}
            </div>

            <div className="bg-white w-full p-7 flex flex-col justify-start">
              <h1 className="font-bold text-lg w-full text-left mt-3 mb-3">
                {service.name}
              </h1>
              <p className="font-normal text-md w-full text-left mb-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default OurServices;
