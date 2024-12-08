import React from 'react';
import { translate } from "./Translations"; 
function MainBanner({language}) {
  return (
    <div className='w-full h-[90vh] bg-white flex flex-col justify-center items-start text-black sm:p-12 p-3'>
        <h1 className='font-extrabold text-5xl sm:text-5xl sm:p-3 p-0 w-full sm:w-1/2'>
            {translate("bannerMain", language)}
        </h1>
        <h2 className='font-medium text-3xl sm:text-5xl sm:p-3 sm:mt-0 mt-4 w-full sm:w-1/2 mb-7'>
            {translate("bannerSecond", language)}
        </h2>
        <div className='w-1/2 flex flex-row gap-2'>
        <button className='py-2 px-7 bg-zinc-200 rounded-xl hover:scale-105 transition-transform duration-75 ease-in-out'>
          Servicios
        </button>
        <button className='py-2 px-7 bg-zinc-200 rounded-xl hover:scale-105 transition-transform duration-75 ease-in-out'>
          Packs
        </button>

        </div>
    </div>
  );
}

export default MainBanner;
