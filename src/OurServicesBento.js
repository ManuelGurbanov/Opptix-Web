import React from 'react';
import './servicesBento.css';
import RightArrow from './RightArrow';
import { translate } from './Translations';

import { useLanguage } from './LanguageContext';

export default function OurServicesBento() {

    const { language } = useLanguage();

    const configuratorsImages = [
        "/portadas/config.gif",
        "/portadas/config2.gif",
        "/portadas/config.gif",
        "/portadas/config2.gif",
    ];

    const rendersImages = [
        "/renders/1.webp",
        "/renders/2.webp",
        "/renders/3.webp",
        "/renders/4.webp",
    ];

    const animationsVideos = [
        "/portadas/anim1.webp",
        "/portadas/anim2.webp",
        "/portadas/anim3.webp",
        "/portadas/anim4.webp",
    ];

    const arImages = [
        "/ar/grill.webp",
        "/ar/silla.webp",
        "/ar/silla_1.webp",
        "/portadas/silla_2.webp",
    ];

    return (
        <div className='w-full flex flex-col items-center justify-center relative' id='services'>
            <header className="flex items-center justify-between w-full sm:p-6 px-2 mb-4 sm:mb-0 p-7 sm:px-24 mt-12">
                <div className="flex flex-col items-start">
                    <h1 className="sm:text-3xl text-2xl font-bold">{translate("services", language)}</h1>
                    <h2 className="sm:text-xl text-lg font-light">{translate("servicesSub", language)}</h2>
                </div>
                <a href="/services/0" className="sm:relative absolute right-2 top-0 flex items-center sm:justify-center justify-between sm:w-56 w-32 px-4 sm:text-lg text-[7px] py-2 text-white bg-black rounded-3xl hover:scale-105 transition">
                    <p className='w-full text-xs sm:text-xl'>
                        {translate("explore", language)}
                    </p>
                    <div className="flex items-center justify-center h-4 -rotate-45 sm:w-9 w-4">
                        <RightArrow color="#ffffff" />
                    </div>
                </a>
            </header>

            <div className="wrapper hidden sm:block">
            {[1,2,3,4].map((num) => (
                <div key={num} className={`container item${num}`}>
                    {/* Configuradores 3D */}
                    <a className="box box1 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/0'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Configuradores">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0' src={configuratorsImages[num-1]} alt="Configuradores">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-base sm:text-2xl">{translate("configTittle", language)}</h1>
                            <p className="text-xs font-light">{translate("configuratorsDescription", language)}</p>
                        </div>
                    </a>

                    {/* Render Estático */}
                    <a className="box box4 p-7 rounded-[48px] relative flex flex-col justify-between h-full bg-gray-800" href='/services/3'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10 rounded-[48px]' alt="Renders">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={rendersImages[num-1]} alt="Render">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 w-full z-10">
                            <h1 className="text-base sm:text-2xl">{translate("staticRenderTittle", language)}</h1>
                            <p className="text-xs">{translate("rendersDescription", language)}</p>
                        </div>
                    </a>

                    {/* Animaciones 3D */}
                    <a className="box box3 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/1'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Animación">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={animationsVideos[num-1]} alt="Render">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-20">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-base sm:text-2xl">{translate("marketingTittle", language)}</h1>
                            <p className="text-xs">{translate("marketingText", language)}</p>
                        </div>
                    </a>

                    {/* Realidad Virtual */}
                    <a className="box box2 rounded-[48px] relative flex flex-col justify-start h-full overflow-hidden p-7" href='/services/2'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="AR">
                        </div>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-5 right-5 hover:scale-105 z-40">
                            <RightArrow color="#000000" />
                        </a>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={arImages[num-1]} alt="AR">
                        </img>
                        <div className="flex flex-col justify-end flex-grow gap-1 w-full z-10">
                            <h1 className="text-base sm:text-xl text-white">{translate("arTittle", language)}</h1>
                            <p className="text-xs text-white">{translate("arDescription", language)}</p>
                        </div>
                        {/* <div className="flex items-center justify-center gap-4 w-28 h-14">
                            <img src="/ar/grill.webp" alt="Phone" className="h-full" />
                            <img src="/qrcodes/bike.png" alt="QR Code" className="h-full" />
                        </div> */}
                    </a>
                </div>
            ))}
            </div>

            <div className='flex flex-row sm:hidden overflow-x-scroll overflow-y-hidden w-screen gap-3'>
            <div className="containerResponsive ml-4 mb-3">
                    {/* Configuradores 3D */}
                    <a className="box box1 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/0'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Configuradores">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0' src={configuratorsImages[0]} alt="Configuradores">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-base sm:text-2xl">{translate("configTittle", language)}</h1>
                            <p className="text-xs font-light">{translate("configuratorsDescription", language)}</p>
                        </div>
                    </a>

                    {/* Render Estático */}
                    <a className="box box4 p-7 rounded-[48px] relative flex flex-col justify-between h-full bg-gray-800" href='/services/3'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10 rounded-[48px]' alt="Renders">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={rendersImages[0]} alt="Render">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 w-full z-10">
                            <h1 className="text-base sm:text-2xl">{translate("staticRenderTittle", language)}</h1>
                            <p className="text-xs">{translate("rendersDescription", language)}</p>
                        </div>
                    </a>

                    {/* Animaciones 3D */}
                    <a className="box box3 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/1'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Animación">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={animationsVideos[0]} alt="Render">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-20">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-base sm:text-2xl">{translate("marketingTittle", language)}</h1>
                            <p className="text-xs">{translate("marketingText", language)}</p>
                        </div>
                    </a>

                    {/* Realidad Virtual */}
                    <a className="box box2 rounded-[48px] relative flex flex-col justify-start h-full overflow-hidden p-7" href='/services/2'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="AR">
                        </div>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-5 right-5 hover:scale-105 z-40">
                            <RightArrow color="#000000" />
                        </a>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={arImages[0]} alt="AR">
                        </img>
                        <div className="flex flex-col justify-end flex-grow gap-1 w-full z-10">
                            <h1 className="text-base sm:text-xl text-white">{translate("arTittle", language)}</h1>
                            <p className="text-xs text-white">{translate("arDescription", language)}</p>
                        </div>
                        {/* <div className="flex items-center justify-center gap-4 w-28 h-14">
                            <img src="/ar/grill.webp" alt="Phone" className="h-full" />
                            <img src="/qrcodes/bike.png" alt="QR Code" className="h-full" />
                        </div> */}
                    </a>
            </div>

            <div className="containerResponsive mr-4 mb-3">
                    {/* Configuradores 3D */}
                    <a className="box box1 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/0'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Configuradores">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0' src={configuratorsImages[1]} alt="Configuradores">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-base sm:text-2xl">{translate("configTittle", language)}</h1>
                            <p className="text-xs font-light">{translate("configuratorsDescription", language)}</p>
                        </div>
                    </a>

                    {/* Render Estático */}
                    <a className="box box4 p-7 rounded-[48px] relative flex flex-col justify-between h-full bg-gray-800" href='/services/3'>
                        <div className='w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10 rounded-[48px]' alt="Renders">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={rendersImages[1]} alt="Render">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 w-full z-10">
                            <h1 className="text-base sm:text-2xl">{translate("staticRenderTittle", language)}</h1>
                            <p className="text-xs">{translate("rendersDescription", language)}</p>
                        </div>
                    </a>

                    {/* Animaciones 3D */}
                    <a className="box box3 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/1'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Animación">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={animationsVideos[1]} alt="Render">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-20">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-base sm:text-2xl">{translate("marketingTittle", language)}</h1>
                            <p className="text-xs">{translate("marketingText", language)}</p>
                        </div>
                    </a>

                    {/* Realidad Virtual */}
                    <a className="box box2 rounded-[48px] relative flex flex-col justify-start h-full overflow-hidden p-7" href='/services/2'>
                        <div className='rounded-[48px] w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="AR">
                        </div>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-5 right-5 hover:scale-105 z-40">
                            <RightArrow color="#000000" />
                        </a>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={arImages[1]} alt="AR">
                        </img>
                        <div className="flex flex-col justify-end flex-grow gap-1 w-full z-10">
                            <h1 className="text-base sm:text-xl text-white">{translate("arTittle", language)}</h1>
                            <p className="text-xs text-white">{translate("arDescription", language)}</p>
                        </div>
                        {/* <div className="flex items-center justify-center gap-4 w-28 h-14">
                            <img src="/ar/grill.webp" alt="Phone" className="h-full" />
                            <img src="/qrcodes/bike.png" alt="QR Code" className="h-full" />
                        </div> */}
                    </a>
            </div>
            </div>
            
        </div>
    );
}
