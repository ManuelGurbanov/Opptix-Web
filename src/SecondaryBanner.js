import React from 'react';
import { translate } from "./Translations"; 
function SecondaryBanner({language}) {
  return (
    <div className='w-full h-[60vh] flex flex-col justify-center items-center text-black p-12 mb-12'>
        <h1 className='font-normal sm:text-6xl text-3xl sm:p-9 p-4 w-2/3 text-center'>
            {translate("secondaryBanner", language)}
        </h1>
    </div>
  );
}

export default SecondaryBanner;
