import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudies() {
    return (
        <>
        <div className='w-full bg-white flex flex-col justify-center items-start text-black sm:p-12 sm:px-24 p-7' id='case-studies'>
            <h1 className='font-semibold text-left text-3xl'>
                Casos de Estudio
            </h1>
            <h2 className='font-normal text-left text-xl'> 
                La máxima calidad para tu marca
            </h2>
        </div>
        <div className='flex sm:flex-row flex-col gap-4 mb-12'>

            <div className='flex flex-col items-center justify-center'>
            <Link to={`/case-study?case=Headphones`} className='w-[250px]  hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/headphones.webp'>
                </img>
            </Link>
            <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                Ver Más
            </a>
            </div>

            <div className='flex flex-col items-center justify-center'>
            <Link to={`/case-study?case=Perfume`} className='w-[250px]  hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/perfum.webp'>
                </img>
            </Link>
            <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                Ver Más
            </a>
            </div>

            <div className='flex flex-col items-center justify-center'>
            <Link to={`/case-study?case=Endless`} className='w-[250px]  hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/endless.webp'>
                </img>
            </Link>
            <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                Ver Más
            </a>
            </div>

            <div className='flex flex-col items-center justify-center'>
            <Link to={`/case-study?case=Strix`} className='w-[250px] hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/strix.webp'>
                </img>
            </Link>
            <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                Ver Más
            </a>
            </div>
        </div>
        </>
    );
}

export default CaseStudies;
