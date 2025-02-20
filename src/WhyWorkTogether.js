import React, { useState, useEffect } from "react";
import { translate } from "./Translations";

function WhyWorkTogether({ language }) {
  const reasons = [
    { id: 0, reason: "reason1", percentage: "+66%" },
    { id: 1, reason: "reason2", percentage: "+30%" },
    { id: 2, reason: "reason3", percentage: "+40%" },
    { id: 3, reason: "reason4", percentage: "+20%" },
  ];


  return (
    <div className="w-screen text-black flex flex-col items-center justify-center relative">
      <div className="flex sm:flex-col items-center w-full px-6 sm:mb-6 mb-4" data-aos="fade-up">
        <img src="img/icon.webp" className="sm:w-12 w-8" alt="Icon" />
        <h1 className="font-bold text-xl w-full text-center sm:mt-3">
          {translate("workTogether", language)}
        </h1>
      </div>
      <div 
        className="flex flex-row gap-4 overflow-x-scroll sm:overflow-hidden w-full min-w-max items-center justify-center sm:justify-start h-auto pl-4 pr-4"
      >
        <div 
            className='flex flex-row gap-2 mb-12 sm:overflow-auto overflow-x-scroll w-screen items-center justify-start sm:justify-center sm:h-80 h-52 px-4'
            style={{ minWidth: '100vw', paddingLeft: '16px', paddingRight: '16px' }}
        >
        {reasons.map((reason) => (
          <div
            data-aos="fade-up"
            key={reason.id}
            className="text-center relative mr-4 ml-4 bg-lightblue workTogetherBackground rounded-3xl shadow-sm group shadow-lightblue text-lightblue3 hover:text-lightblue2 italic p-5 sm:w-[387px] sm:max-w-[20vw] sm:h-[252px] sm:max-h-[20vw] h-[153px] w-[258px] flex-shrink-0 flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-150"
          >
            <div className="flex flex-col items-center justify-center sm:justify-start sm:mt-20 h-full w-full text-white sm:text-lightblue5 text-right ">
              <h1 className="text-6xl w-full text-[5rem]">{reason.percentage}</h1>
              <h1 className="text-xs sm:text-xl">{translate(reason.reason, language)}</h1>
            </div>
          </div>
        ))}


        </div>

      </div>
    </div>
  );
}

export default WhyWorkTogether;
