import React from 'react';
import { translate } from "./Translations"; 

function PopUp({language}) {
  return (
    <div className='w-screen bg-black text-white p-3'>
        <h1 className='font-bold text-xl w-full text-center mt-3 mb-3'>
            {translate("popUpTittle", language)}
        </h1>
        <h2 className='font-medium text-md w-full text-center mb-3'>
            {translate("popUpText", language)}
        </h2>
    </div>
  );
}

export default PopUp;
