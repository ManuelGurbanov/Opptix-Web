import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudies() {
    return (
        <>
        <div className='w-full bg-white flex flex-col justify-center items-start text-black sm:p-12 sm:px-24 p-7'>
            <h1 className='font-semibold text-left text-3xl'>
                Casos de Estudio
            </h1>
            <h2 className='font-normal text-left text-xl'> 
                La máxima calidad para tu marca
            </h2>
        </div>
        <div className='flex sm:flex-row flex-col gap-4 mb-12'>
            <Link to="/studie-cases" className='w-64 rounded-lg bg-zinc-200 hover:scale-105 transition-all ease-in-out'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Briefcases
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </Link>

            <Link to="/studie-cases" className='w-64 rounded-lg bg-zinc-200 hover:scale-105 transition-all ease-in-out'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 2
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </Link>

            <Link to="/studie-cases" className='w-64 rounded-lg bg-zinc-200 hover:scale-105 transition-all ease-in-out'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 3
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </Link>

            <Link to="/studie-cases" className='w-64 rounded-lg bg-zinc-200 hover:scale-105 transition-all ease-in-out'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 4
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </Link>
        </div>
        </>
    );
}

export default CaseStudies;
