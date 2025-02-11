import React from 'react';
import { translate } from "./Translations";

function Packs({packs}) {

    return (
        <div className='min-h-screen w-full items-center flex-col flex' id='packs'>
        <h1 className='text-center w-full text-4xl font-bold mt-12'>Packs</h1>
        <h2 className='text-center w-full text-xl opacity-70 mb-6 sm:mb-0'>Lorem Ipsum...</h2>

        
        <div className='w-3/4 sm:w-2/3 lg:min-w-[1100px] bg-white flex flex-col lg:flex-row justify-center items-start sm:p-8 gap-12 m-0 mb-16 sm:mb-0'>
        {packs.map((pack, index) => (
                <div key={index} className={`shadow-sm shadow-black lg:h-[700px] min-h-[400px] lg:w-[390px] lightblueGradientVariant w-full bg-zinc-200 rounded-xl flex flex-col items-center justify-start text-center p-8 hover:scale-105 transition-all ease-in-out relative
                    ${pack.isMostPopular ? "text-lightblue2 ring-1 ring-lightblue" : "text-black"}`}>
                        
                    {pack.isMostPopular ? <div className='absolute top-0 -translate-y-5 right-0 bg-lightblue text-white p-3 rounded-3xl flex flex-row items-center justify-center'>
                        <img src='img/whiteIcon.webp' className='w-6 mr-2'></img>
                        Más Popular
                        </div> 
                    : null}
                    
                    <h1 className='text-4xl font-bold mb-2 w-[190px] p-2'>{pack.title}</h1>
                    <p className='text-lg text-zinc-600 mb-2'>{pack.description}</p>
                    <h2 className='text-4xl font-bold'>${pack.price}</h2>
                    <p className={`text-md sm:mb-4 mb-2 transition-opacity duration-500 ${pack.monthly ? 'opacity-100' : 'opacity-0'}`}>
                        mensuales
                    </p>

                    <p className='underline lg:hidden block mb-2 text-xs'>¿Qué contiene el paquete?</p>

                    <h3 className='text-lg font-bold text-left w-full hidden lg:block text-black'>Resultados</h3>
                    <ul className='mb-4 text-left text-sm hidden lg:block text-black'>
                        {pack.results.map((result, i) => (
                            <li key={i}>{result}</li>
                        ))}
                    </ul>
                    <button className={`sm:absolute bottom-8 p-3 text-white rounded-full min-w-2/3 text-sm justify-self-end mb-6  transition-all ease-in-out duration-75 ${pack.isMostPopular ? "bg-lightblue hover:bg-lightblue2 ring-1" : "bg-black hover:bg-zinc-700"}`}> Reserva una Demostración</button>
                    <p className='text-xs text-center w-1/2 text-black sm:absolute bottom-4'>O envíenos un mensaje con sus preguntas</p>
                </div>
            ))}
        </div>
        <div className='w-full flex sm:flex-row flex-col items-center justify-center sm:gap-5 gap-2 mb-16'>
            <h1 className='text-black font-extrabold text-xl'>Creamos tu Propio Pack</h1>
            <button className='bg-lightblue2 hover:bg-lightblue p-3 rounded-full text-sm font-bold hover:scale-105 transition-all duration-100'>Hablar con un Asesor</button>
        </div>
        </div>
    );
}

export default Packs;
