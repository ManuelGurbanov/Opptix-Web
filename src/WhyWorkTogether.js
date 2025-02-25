import React, { useState, useEffect, useRef } from "react";
import { translate } from "./Translations";

function WhyWorkTogether({ language }) {
  const reasons = [
    { id: 0, reason: "reason1", percentage: "+66%" },
    { id: 1, reason: "reason2", percentage: "+30%" },
    { id: 2, reason: "reason3", percentage: "+40%" },
    { id: 3, reason: "reason4", percentage: "+20%" },
  ];

  const [selectedBlock, setSelectedBlock] = useState(0);

  const wheelEventCount = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      wheelEventCount.current += 1;

      if (wheelEventCount.current >= 1) {
        if (e.deltaY > 0 && selectedBlock < reasons.length - 1) {
          setSelectedBlock((prev) => prev + 1);
        } else if (e.deltaY < 0 && selectedBlock > 0) {
          setSelectedBlock((prev) => prev - 1);
        }

        wheelEventCount.current = 0;
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [selectedBlock, reasons.length]);



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
          {reasons.map((item, index) => (
            <div
              key={item.id}
              className={`${selectedBlock === index ? "w-[368px]" : "w-[235px]"} h-[231px] transition-all ease-in-out duration-75 ${
                index === 0
                  ? "bg-black"
                  : index === 1
                  ? "bg-lightblue2"
                  : "bg-lightblue6"
              } rounded-3xl text-center relative flex-shrink-0`}
            >
              <h1 className="w-full text-[78px] absolute bottom-[80px] font-semibold">
                {item.percentage}
              </h1>
              <h2
                className={`text-lg absolute top-[130px] w-full font-extrabold ${
                  selectedBlock === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {translate(item.reason, language)}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyWorkTogether;
