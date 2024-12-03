import React from 'react';
import { translate } from "./Translations";
import './PopUp.css';

function PopUp({ language }) {
  return (
    <div className='w-screen bg-black text-white p-1 fixed bottom-0 z-50'>
      <h1 className='font-bold text-lg w-full text-center'>
        {translate("popUpTittle", language)}
      </h1>
      <div className="cinta-container">
        <h2 className="cinta-text">
          {translate("popUpText", language)}
        </h2>
      </div>
    </div>
  );
}

export default PopUp;
