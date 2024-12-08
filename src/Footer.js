import React from 'react';
import { translate } from "./Translations"; 
function Footer({language}) {
  return (
    <div className='w-full h-[90vh] bg-zinc-200 flex flex-col justify-center items-start text-black sm:p-12 p-3'>
        <h1 className='font-extrabold text-xl sm:text-5xl sm:p-3 p-0 w-full sm:w-1/2'>
            Footer
        </h1>
    </div>
  );
}

export default Footer;
