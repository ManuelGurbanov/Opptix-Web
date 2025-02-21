import React from 'react';
import { translate } from "./Translations";

function Packs({ packs, language }) {
    const [activePack, setActivePack] = React.useState(0);
    return (
        <div className='min-h-screen w-[1200px] items-center flex-col flex' id='packs'>
            <h1 className='text-center w-full text-4xl font-bold mt-12'>Packs</h1>
            <h2 className='text-center w-full text-xl opacity-70 mb-6 sm:mb-0'>Lorem Ipsum...</h2>

            <div className='w-[1119px] bg-white flex flex-col lg:flex-row justify-center items-start sm:p-8 gap-12 m-0 mb-16 sm:mb-0'>
                {packs.map((pack, index) => (
                    <div
                        key={index}
                        data-aos-delay={`${300 + index * 100}`}
                        className={`shadow-sm shadow-black h-[600px] rounded-xl flex flex-col items-center text-center p-8 box-border
                        relative transition-all duration-300 ease-in-out
                        ${pack.isMostPopular ? "text-lightblue2 ring-1 ring-lightblue" : "text-black"} 
                        ${activePack == pack.id ? "w-[491px]" : "w-[294px]"}
                        ${pack.id == 0 && "text-white bg-black"}
                        ${pack.id == 1 && "text-black bg-lightblue2"}
                        ${pack.id == 2 && "text-black bg-lightblue7 bg-opacity-50"}`}
                    >
                        {activePack == pack.id ? (
                            <>
                                <div className='w-full flex flex-row items-start justify-between'>
                                    <h1 className='text-2xl font-bold w-full p-2 text-left text-white'>{pack.title}</h1>
                                    <button className=' bg-black text-white p-3 rounded-3xl flex items-center aspect-square'
                                        onClick={() => setActivePack(pack.id)}
                                    >  {activePack == pack.id ? "O" : "X"} </button>
                                </div>

                                <p className='text-lg text-white my-2 w-full text-left text-opacity-55'>{pack.description}</p>
                                <h2 className='text-4xl font-bold'>{pack.price}</h2>
                                <p className={`text-md ${pack.monthly ? 'opacity-100' : 'opacity-0'}`}>mensuales</p>
                                <h3 className='text-lg font-bold text-left w-full hidden lg:block mt-6 text-white'>Resultados</h3>
                                <ul className='hidden lg:block text-sm text-white text-left'>
                                    {pack.results.map((result, i) => (
                                        <li key={i}>{result}</li>
                                    ))}
                                </ul>
                                <button className={`mt-auto sm:p-3 p-2 mb-2 text-white rounded-full w-full text-sm transition-all hover:scale-105
                                    ease-in-out duration-75 ${pack.isMostPopular ? "bg-lightblue hover:bg-lightblue2 ring-1" : "bg-black hover:bg-zinc-700"}`}
                                >
                                    {translate("bookDemo", language)}
                                </button>
                            </>
                        ) : (
                            <div className='flex flex-col items-center justify-end w-full h-full'>
                                <button className='absolute top-2 right-4 bg-black text-white p-3 rounded-3xl flex items-center'
                                        onClick={() => setActivePack(pack.id)}
                                    >  {activePack == pack.id ? "O" : "X"} </button>
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
