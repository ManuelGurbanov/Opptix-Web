import React from 'react';
import { translate } from "./Translations"; 

function MainBanner({ language }) {
  return (
    <div className='relative md:w-[94%] sm:h-[75vh] w-[95vw] h-[50vh] flex flex-col justify-center items-start text-white p-3 px-12 rounded-3xl mb-12 overflow-hidden'>
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bannerVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-10  sm:p-6 rounded-3xl">
        <h1 className='font-extrabold text-4xl sm:text-6xl sm:p-3 p-0 w-full sm:w-[700px]'>
          {translate("bannerMain", language)}
        </h1>
        <h2 className='font-medium text-3xl sm:text-5xl sm:p-3 p-0 w-full sm:w-[700px] hidden sm:block'>
          {translate("bannerSecond", language)}
        </h2>
        <div className='w-1/2 flex flex-row gap-2 sm:p-3 mt-4'>
          <button className='py-2 px-7 bg-lightblue bg-opacity-50 ring-1 ring-lightblue hover:bg-opacity-30 rounded-3xl hover:scale-105 transition-all duration-75 ease-in-out'>
            Servicios
          </button>
          <button className='py-2 px-7 bg-lightblue bg-opacity-50 ring-1 ring-lightblue hover:bg-opacity-30 rounded-3xl hover:scale-105 transition-all duration-75 ease-in-out'>
            Packs
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
