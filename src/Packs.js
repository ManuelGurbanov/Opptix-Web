import React from 'react';
import { translate } from "./Translations";

import RightArrow from './RightArrow';
function Packs({ packs, language }) {
    const [activePack, setActivePack] = React.useState(0);
    return (
        <div className='min-h-screen w-screen items-center flex-col flex p-7' id='packs'>
            <h1 className='w-full text-4xl font-bold mt-12 text-left'>Packs</h1>
            <h2 className='w-full text-xl opacity-70 mb-6 sm:mb-0 text-left'>Lorem Ipsum...</h2>

            <div className=' bg-white flex flex-col lg:flex-row justify-center items-start sm:p-8 gap-12 m-0 mb-16 sm:mb-0'>
                {packs.map((pack, index) => (
                    <div
                        key={index}
                        data-aos-delay={`${300 + index * 100}`}
                        className={`shadow-sm shadow-black rounded-[52px] h-[765px] min-h-full flex flex-col items-center text-center p-8
                        relative transition-all duration-300 ease-in-out 
                        ${pack.isMostPopular ? "text-lightblue2 ring-1 ring-lightblue" : "text-black"} 
                        ${activePack == pack.id ? "w-[491px]" : "w-[294px]"}
                        ${pack.id == 0 && "text-white bg-black"}
                        ${pack.id == 1 && "text-black bg-lightblue2"}
                        ${pack.id == 2 && "text-black bg-lightblue7 bg-opacity-50"}`}
                    >
                        {activePack == pack.id ? (
                            <>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <h1 className='text-[36px] font-bold w-full text-left text-white'>{pack.title}</h1>
                                    <a className='aspect-square h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition duration-75' href='/services/0'>
                                        <RightArrow color="#000000" />
                                    </a>
                                </div>

                                <p className='text-[22px] text-white my-2 w-full text-left italic font-extralight'>{pack.description}</p>

                                <ul className="list-disc pl-5 text-left font-extralight w-full text-white mb-3 text-[17.43px]">
                                    <li><span className='font-bold'>Reduce devoluciones</span> en un 40% con una mayor visualización.</li>
                                    <li><span className='font-bold'>Aumenta la conversión</span> en un 30% eliminando dudas.</li>
                                    <li><span className='font-bold'>Ofrece una experiencia</span> de compra inmersiva y diferencial.</li>
                                </ul>

                                <a className='underline italic w-full text-left mb-2 text-[19.5px] mt-5'>¿Qué incluye?</a>

                                <div class="grid grid-flow-row-dense grid-cols-2 auto-cols-max gap-3 text-white justify-start text-[10px] text-nowrap mb-5">
                                    <div class="px-4 py-2 rounded-2xl bg-zinc-500 ring-white ring-1">Catálogo 3D interactivo</div>
                                    <div class="px-4 py-2 rounded-2xl bg-zinc-500 ring-white ring-1">Visualizaciones en Realidad Aumentada</div>
                                    <div class="px-4 py-2 rounded-2xl bg-zinc-500 ring-white ring-1">Optimización del rendimiento web</div>
                                </div>


                                <div className='flex flex-col items-center justify-center w-full mt-7 mb-12'>
                                    <span className='text-3xl font-bold w-full text-left'>{pack.price}</span>
                                    <span className='text-xs font-light w-full text-left'>{pack.subPrice}</span>
                                </div>

                                <footer className='w-full flex flex-row items-center justify-center text-white gap-4'>
                                    <button className={` sm:p-3 p-2 text-black rounded-full w-full text-sm transition-all hover:scale-105
                                        ease-in-out duration-75 bg-white hover:bg-zinc-600"}`}
                                    >
                                        {translate("bookDemo", language)}
                                    </button>
                                    <a className='aspect-square h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition duration-75' href='/services/0'>
                                        <RightArrow color="#000000" />
                                    </a>
                                </footer>

                            </>
                        ) : (
                            <div className='flex flex-col items-center justify-end w-full h-full'>
                                <button onClick={() => setActivePack(pack.id)} className='absolute -rotate-45 top-8 right-4 aspect-square h-10 bg-black rounded-full flex items-center justify-center hover:scale-105 transition duration-75' href='/services/0'>
                                    <RightArrow color="#ffffff" />
                                </button>
                                <h1 className='text-3xl text-left font-bold w-full p-2 py-0 text-black mb-2'>{pack.title}</h1>
                                <p className='text-xs text-left w-full p-2 py-0 text-black mb-2'>{pack.description}</p>
                                <button className={`sm:p-3 p-2 mb-2 text-white rounded-full w-full text-sm transition-all hover:scale-105
                                    ease-in-out duration-75 ${pack.isMostPopular ? "bg-lightblue hover:bg-lightblue2 ring-1" : "bg-black hover:bg-zinc-700"}`}
                                >
                                    {translate("bookDemo", language)}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='w-full flex sm:flex-row flex-col items-center justify-center sm:gap-5 gap-2 mb-16' data-aos="fade-up "data-aos-delay="200">
                <h1 className='text-black font-extrabold text-xl'>
                    {translate("ownPack", language)}
                </h1>
                <button className='bg-lightblue2 hover:bg-lightblue p-3 rounded-full text-sm font-bold hover:scale-105 transition-all duration-100'>
                    {translate("talk", language)}
                </button>
            </div>
        </div>
    );
}

export default Packs;
