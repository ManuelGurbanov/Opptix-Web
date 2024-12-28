import React from 'react';
import { translate } from "./Translations"; 

function MainBanner({language}) {
  return (
    <div className='md:w-[94%] sm:h-[75vh] w-screen h-screen bg-white flex flex-col justify-center items-start text-white p-3 px-12 bg-glasses rounded-3xl mb-12'>
        <h1 className='font-extrabold text-4xl sm:text-6xl sm:p-3 p-0 w-full sm:w-[700px]'>
            {translate("bannerMain", language)}
        </h1>
        <h2 className='font-medium text-3xl sm:text-5xl sm:p-3 p-0 w-full sm:w-[700px]'>
            {translate("bannerSecond", language)}
        </h2>
        <div className='w-1/2 flex flex-row gap-2 p-3'>
        <button className='py-2 px-7 bg-lightblue bg-opacity-50 ring-1 ring-lightblue hover:bg-opacity-30 rounded-3xl hover:scale-105 transition-all duration-75 ease-in-out'>
          Servicios
        </button>
        <button className='py-2 px-7 bg-lightblue bg-opacity-50 ring-1 ring-lightblue hover:bg-opacity-30 rounded-3xl hover:scale-105 transition-all duration-75 ease-in-out'>
          Packs
        </button>

        </div>
    </div>
  );
}

export default MainBanner;
