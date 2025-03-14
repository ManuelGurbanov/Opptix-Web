import React from 'react';
import './servicesBento.css';
import RightArrow from './RightArrow';
import { translate } from './Translations';

export default function OurServicesBento({ language }) {

    const configuratosImages = [
        "/renders/6.webp",
        "/renders/5.webp",
        "/endless/endlessFirst.webp",
        "/blossom/blossomEnd.webp",
    ];

    const rendersImages = [
        "/renders/1.webp",
        "/renders/2.webp",
        "/renders/3.webp",
        "/renders/4.webp",
    ];

    const animationsImages = [
        "thumb.webp",
        "arPhone.webp",
        "/renders/5.webp",
        "/renders/6.webp",
    ];

    return (
        <div className='w-full flex flex-col items-center justify-center' id='services'>
            <header className="flex items-center justify-between w-3/4 p-6">
                <div className="flex flex-col items-start">
                    <h1 className="text-3xl font-bold">{translate("services", language)}</h1>
                    <h2 className="text-xl font-light">{translate("servicesSub", language)}</h2>
                </div>
                <a href="/services/0" className="flex items-center justify-center w-56 px-4 py-2 text-white bg-black rounded-3xl hover:scale-105 transition">
                    <p>
                        {translate("explore", language)}
                    </p>
                    <div className="flex items-center justify-center h-4 -rotate-45 w-9">
                        <RightArrow color="#ffffff" />
                    </div>
                </a>
            </header>

            <div className="wrapper">
            {[1,2,3,4].map((num) => (
                <div key={num} className={`container item${num}`}>
                    {/* Configuradores 3D */}
                    <a className="box box1 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/0'>
                        <div className='w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Configuradores">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0' src={configuratosImages[num-1]} alt="Configuradores">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-2xl">{translate("configTittle", language)}</h1>
                            <p className="text-xs font-light">{translate("configuratorsDescription", language)}</p>
                        </div>
                    </a>

                    {/* Render Estático */}
                    <a className="box box2 p-7 rounded-[48px] relative flex flex-col justify-between h-full bg-gray-800" href='/services/2'>
                        <div className='w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10 rounded-[48px]' alt="Configuradores">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0 rounded-[48px]' src={rendersImages[num-1]} alt="Configuradores">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 w-full z-10">
                            <h1 className="text-2xl">{translate("staticRenderTittle", language)}</h1>
                            <p className="text-xs">{translate("rendersDescription", language)}</p>
                        </div>
                    </a>

                    {/* Animaciones 3D */}
                    <a className="box box3 rounded-[48px] relative flex flex-col justify-between h-full bg-black overflow-hidden p-7" href='/services/1'>
                        <div className='w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-10' alt="Configuradores">
                        </div>
                        <img className='w-full h-full object-cover absolute top-0 right-0' src={animationsImages[num-1]} alt="Configuradores">
                        </img>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-white rounded-full top-4 right-4 hover:scale-105 z-10">
                            <RightArrow color="#000000" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 z-10 w-full">
                            <h1 className="text-2xl">{translate("marketingTittle", language)}</h1>
                            <p className="text-xs">{translate("marketingText", language)}</p>
                        </div>
                    </a>

                    {/* Realidad Virtual */}
                    <a className="box box4 rounded-[48px] relative flex flex-col justify-between h-full p-7" href='/services/3'>
                        <a className="absolute flex items-center justify-center h-6 w-7 bg-black rounded-full top-2 right-2 hover:scale-105">
                            <RightArrow color="#ffffff" />
                        </a>
                        <div className="flex flex-col justify-end flex-grow gap-2 w-full">
                            <h1 className="text-xl text-black">{translate("arTittle", language)}</h1>
                            <p className="text-xs text-black">{translate("arDescription", language)}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 w-28 h-14">
                            <img src="phone.webp" alt="Phone" className="h-full" />
                            <img src="/qrcodes/bike.png" alt="QR Code" className="h-full" />
                        </div>
                    </a>
                </div>
            ))}
        </div>
        </div>
    );
}
