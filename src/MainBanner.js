import React from 'react';
import { translate } from "./Translations"; 

function MainBanner({language}) {
  return (
    <div className='sm:w-[80vw] w-screen h-[90vh] bg-white flex flex-col justify-center items-start text-white sm:p-12 p-3 px-2 bg-glasses rounded-xl mb-12'>
        <h1 className='font-extrabold text-5xl sm:text-4xl sm:p-3 p-0 w-full sm:w-1/2'>
            {translate("bannerMain", language)}
        </h1>
        <h2 className='font-medium text-3xl sm:text-4xl sm:p-3 sm:mt-0 mt-4 w-full sm:w-1/2 mb-7'>
            {translate("bannerSecond", language)}
        </h2>
        <div className='w-1/2 flex flex-row gap-2 p-3'>
        <button className='py-2 px-7 bg-lightblue bg-opacity-50 ring-1 ring-lightblue hover:bg-opacity-30 rounded-xl hover:scale-105 transition-all duration-75 ease-in-out'>
          Servicios
        </button>
        <button className='py-2 px-7 bg-lightblue bg-opacity-50 ring-1 ring-lightblue hover:bg-opacity-30 rounded-xl hover:scale-105 transition-all duration-75 ease-in-out'>
          Packs
        </button>

        </div>
    </div>
  );
}

export default MainBanner;
