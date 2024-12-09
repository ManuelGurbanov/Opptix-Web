import React from 'react';
import { translate } from "./Translations";

function Packs() {

    const packs = [
        {
            title: 'Web Level Up',
            description: 'Transforma tu sitio web en una maquina de ventas, utilizando el potencial del 3D y RA.',
            price: 100000,
            results: [
                'Análisis inicial de UX y contenido',
                'Modelo 3D del producto',
                'Animación 3D basada en desplazamiento',
                'Configurador interactivo 3D',
                'Integración AR/VR',
                '10 miniaturas de productos fotográficos',
                'Vídeo de presentación',
                'Optimización de carga rápida'
            ]
        },
        {
            title: 'Launch Pack',
            description: 'Maximiza el rol de tus lanzamientos con contenido estratégico que vende..',
            price: 100000,
            results: [
                'Modelo 3D del producto',
                'Animación 3D basada en desplazamiento',
                'Configurador interactivo 3D',
                'Integración AR/VR',
                '10 miniaturas de productos fotográficos',
                'Vídeo de presentación',
                'Optimización de carga rápida'
            ]
        },
        {
            title: 'Content Partner',
            description: 'Transforma tu sitio web en una maquina de ventas, utilizando el potencial del 3D y RA.',
            price: 100000,
            monthly: true,
            results: [
                'Análisis inicial de UX y contenido',
                'Modelo 3D del producto',
                'Animación 3D basada en desplazamiento',
                'Configurador interactivo 3D',
                'Integración AR/VR',
                '10 miniaturas de productos fotográficos',
                'Vídeo de presentación',
                'Optimización de carga rápida'
            ]
        }
    ];

    return (
        <div className='min-h-screen w-full items-center flex-col flex' id='packs'>
        <h1 className='text-center w-full text-4xl font-bold mt-12'>Packs</h1>
        <h2 className='text-center w-full text-xl opacity-70 mb-6 sm:mb-0'>Lorem Ipsum...</h2>
        <div className='w-3/4 sm:w-2/3 min-h-[70vh] sm:min-w-[1100px] bg-white flex flex-col sm:flex-row justify-center items-start text-black sm:p-8 gap-8 m-0 mb-16 sm:mb-0'>
        {packs.map((pack, index) => (
                <div key={index} className='relative w-full bg-zinc-200 rounded-xl flex flex-col items-center justify-end text-center p-8 hover:scale-105 transition-all ease-in-out'>
                    <h1 className='text-2xl font-bold mb-2'>{pack.title}</h1>
                    <p className='text-lg text-zinc-600 mb-2'>{pack.description}</p>
                    <h2 className='text-4xl font-bold'>${pack.price}</h2>
                    <p className={`text-md sm:mb-4 mb-2 transition-opacity duration-500 ${pack.monthly ? 'opacity-100' : 'opacity-0'}`}>
                        mensuales
                    </p>

                    <p className='underline sm:hidden block mb-2'>¿Qué contiene el paquete?</p>

                    <h3 className='text-lg font-bold text-left w-full hidden sm:block'>Resultados</h3>
                    <ul className='mb-4 text-left text-md hidden sm:block'>
                        {pack.results.map((result, i) => (
                            <li key={i}>{result}</li>
                        ))}
                    </ul>
                    <button className=' bg-black p-3 text-white rounded-2xl min-w-2/3 text-sm justify-self-end mb-6 hover:bg-zinc-800 transition-colors ease-in-out duration-75'>Reserva una Demostración</button>
                    <p className='text-xs text-center w-1/2'>O envíenos un mensaje con sus preguntas</p>
                </div>
            ))}
        </div>
        <div className='w-full flex sm:flex-row flex-col items-center justify-center sm:gap-5 gap-2 mb-16'>
            <h1 className='text-black font-extrabold text-xl'>Creamos tu Propio Pack</h1>
            <button className='bg-zinc-300 p-3 rounded-xl text-md font-semibold hover:scale-105 transition-all duration-100'>Hablar con un Asesor</button>
        </div>
        </div>
    );
}

export default Packs;
