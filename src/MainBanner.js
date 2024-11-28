import React from 'react';
import { translate } from "./Translations"; 
function MainBanner({language}) {
  return (
    <div className='w-full h-[90vh] bg-white flex flex-col justify-center items-start text-black p-12'>
        <h1 className='font-extrabold text-3xl sm:text-5xl p-3 w-full sm:w-1/2'>
            {translate("bannerMain", language)}
        </h1>
        <h2 className='font-medium text-3xl sm:text-5xl p-3 w-full sm:w-1/2'>
            {translate("bannerSecond", language)}
        </h2>
    </div>
  );
}

export default MainBanner;
