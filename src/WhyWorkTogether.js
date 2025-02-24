import React, { useState, useEffect } from "react";
import { translate } from "./Translations";

function WhyWorkTogether({ language }) {
  const reasons = [
    { id: 0, reason: "reason1", percentage: "+66%" },
    { id: 1, reason: "reason2", percentage: "+30%" },
    { id: 2, reason: "reason3", percentage: "+40%" },
    { id: 3, reason: "reason4", percentage: "+20%" },
  ];

  const [selectedBlock, setSelectedBlock] = useState(0);

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
            className='flex flex-row gap-2 mb-12 sm:overflow-auto sm:overflow-y-hidden overflow-x-scroll w-screen items-center justify-start text-white sm:justify-center h-[231px] px-4'
            style={{ minWidth: '100vw', paddingLeft: '16px', paddingRight: '16px' }}
        >
            <div
              className={`${selectedBlock === 0 ? "w-[368px]" : "w-[235px]"} h-[231px] transition-all ease-in-out duration-75 bg-black rounded-3xl text-center relative`}
              onMouseEnter={() => setSelectedBlock(0)}
            >
              <h1 className="w-full text-[78px] absolute bottom-[80px] font-semibold">+66%</h1>
              <h2
                className={`text-xl absolute top-[130px] w-full font-extrabold ${
                  selectedBlock === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                {translate("reason1", language)}
              </h2>
            </div>

            <div
              className={`${selectedBlock === 1 ? "w-[368px]" : "w-[235px]"} h-[231px] transition-all ease-in-out duration-75 bg-lightblue2 rounded-3xl text-center relative`}
              onMouseEnter={() => setSelectedBlock(1)}
            >
              <h1 className="w-full text-[78px] absolute bottom-[80px] font-semibold">+30%</h1>
              <h2
                className={`text-lg absolute top-[130px] w-full font-extrabold ${
                  selectedBlock === 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                {translate("reason2", language)}
              </h2>
            </div>

            <div
              className={`${selectedBlock === 2 ? "w-[368px]" : "w-[235px]"} h-[231px] transition-all ease-in-out duration-75 bg-lightblue6 rounded-3xl text-center relative`}
              onMouseEnter={() => setSelectedBlock(2)}
            >
              <h1 className="w-full text-[78px] absolute bottom-[80px] font-semibold">+40%</h1>
              <h2
                className={`text-lg absolute top-[130px] w-full font-extrabold ${
                  selectedBlock === 2 ? "opacity-100" : "opacity-0"
                }`}
              >
                {translate("reason3", language)}
              </h2>
            </div>

            <div
              className={`${selectedBlock === 3 ? "w-[368px]" : "w-[235px]"} h-[231px] transition-all ease-in-out duration-75 bg-lightblue6 rounded-3xl text-center relative`}
              onMouseEnter={() => setSelectedBlock(3)}
            >
              <h1 className="w-full text-[78px] absolute bottom-[80px] font-semibold">+20%</h1>
              <h2
                className={`text-lg absolute top-[130px] w-full font-extrabold ${
                  selectedBlock === 3 ? "opacity-100" : "opacity-0"
                }`}
              >
                {translate("reason4", language)}
              </h2>
            </div>
        </div>

      </div>
    </div>
  );
}

export default WhyWorkTogether;
