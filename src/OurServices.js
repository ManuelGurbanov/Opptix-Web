import React from 'react';
import { useState } from 'react';
import { translate } from './Translations';

function OurServices({services,language}) {
  let [actualService, setActualService] = useState(1);


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
    <div className='w-screen bg-white text-black p-3 flex flex-col items-center justify-center sm:px-12'>
      <h1 className='font-bold w-full text-left mt-12 sm:mb-12 mb-3 ml-5 text-xl sm:text-3xl' id='services'>
        {translate('ourServices', language)}
      </h1>

      {/* SLIDER EN CELULARES */}
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
                <div className="w-[298px] h-[140px] relative flex items-center justify-center">
                    {services[actualService].picture}
                </div>
                
                <div className="bg-white p-1 flex flex-colv w-[298px] h-[147px] justify-start">
                  <div>
                    <h1 className="font-bold text-base w-full text-left mt-3 mb-3">
                      {services[actualService].name}
                    </h1>
                    <p className="font-normal text-sm w-full text-left mb-3">
                      {services[actualService].description}
                    </p>
                    <a href='/services' className='text-black underline text-left'>Ver más</a>
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


      <section className='flex-col items-center w-5/6 hidden sm:flex'>
        {services.map((service) => (
          console.log(service),
          <div key={service.id} className={`flex flex-col ${service.id % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} rounded-lg mb-8 p-0 sm:p-8 w-full h-[50vh] `}>
            <div className="w-full relative flex items-center justify-center hover:scale-105 transition-all ease-in-out cursor-pointer">
              {service.picture}
            </div>

            <div className="bg-white w-full p-7 flex flex-col justify-center">
              <h1 className="font-bold text-2xl w-full text-left mt-3 mb-3">
                {service.name}
              </h1>
              <p className="font-normal text-2xl w-full text-left mb-3">
                {service.description}
              </p>
              <a href='/services' className='text-black underline text-left'>Ver más</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default OurServices;