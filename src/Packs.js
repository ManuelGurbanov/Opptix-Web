import React from 'react';
import { translate } from "./Translations";

function Packs({packs}) {

    return (
        <div className='min-h-screen w-full items-center flex-col flex' id='packs'>
        <h1 className='text-center w-full text-4xl font-bold mt-12'>Packs</h1>
        <h2 className='text-center w-full text-xl opacity-70 mb-6 sm:mb-0'>Lorem Ipsum...</h2>

        
        <div className='w-3/4 sm:w-2/3 lg:min-w-[1100px] bg-white flex flex-col lg:flex-row justify-center items-start sm:p-8 gap-12 m-0 mb-16 sm:mb-0'>
        {packs.map((pack, index) => (
    <div 
        key={index} 
        data-aos-delay={`${300 + index * 100}`}
        className={`shadow-sm shadow-black lg:h-[700px] sm:min-h-[750px] lg:w-[390px] w-full 
        lightblueGradientVariant rounded-xl flex flex-col items-center text-center p-8 
        hover:scale-105 transition-all ease-in-out relative
        ${pack.isMostPopular ? "text-lightblue2 ring-1 ring-lightblue" : "text-black"}`}
    >
        {/* Etiqueta de "Más Popular" */}
        {pack.isMostPopular && (
            <div className='absolute top-0 right-0 -translate-y-5 bg-lightblue text-white 
                p-3 rounded-3xl flex items-center'>
                <img src='img/whiteIcon.webp' className='w-6 mr-2' alt="Icono Popular" />
                Más Popular
            </div>
        )}

        {/* Contenido principal */}
        <h1 className='text-4xl font-bold w-full p-2'>{pack.title}</h1>
        <p className='text-lg text-zinc-600 my-2'>{pack.description}</p>
        <h2 className='text-4xl font-bold'>{pack.price}</h2>
        <p className={`text-md ${pack.monthly ? 'opacity-100' : 'opacity-0'}`}>mensuales</p>

        {/* Sección de Resultados (visible solo en pantallas grandes) */}
        <h3 className='text-lg font-bold text-left w-full hidden lg:block mt-6 text-black'>Resultados</h3>
        <ul className='hidden lg:block text-sm text-black text-left'>
            {pack.results.map((result, i) => (
                <li key={i}>{result}</li>
            ))}
        </ul>

        {/* Botón de acción */}
        <button className={`mt-auto sm:p-3 p-2 mb-2 text-white rounded-full w-full text-sm transition-all 
            ease-in-out duration-75 ${pack.isMostPopular ? "bg-lightblue hover:bg-lightblue2 ring-1" : "bg-black hover:bg-zinc-700"}`}
        >
            Reserva una Demostración
        </button>
        <p className='text-xs text-center w-full text-black sm:absolute sm:bottom-3'>
            O envíenos un mensaje con sus preguntas
        </p>
    </div>
))}

        </div>
        <div className='w-full flex sm:flex-row flex-col items-center justify-center sm:gap-5 gap-2 mb-16' data-aos="fade-up "data-aos-delay="200">
            <h1 className='text-black font-extrabold text-xl'>Creamos tu Propio Pack</h1>
            <button className='bg-lightblue2 hover:bg-lightblue p-3 rounded-full text-sm font-bold hover:scale-105 transition-all duration-100'>Hablar con un Asesor</button>
        </div>
        </div>
    );
}

export default Packs;
