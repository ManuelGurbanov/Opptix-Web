import React from 'react';

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
            <div className='w-64 rounded-lg bg-zinc-200'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 1
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </div>
            <div className='w-64 rounded-lg bg-zinc-200'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 1
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </div>
            <div className='w-64 rounded-lg bg-zinc-200'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 1
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </div>
            <div className='w-64 rounded-lg bg-zinc-200'>
                <h1 className='font-semibold text-left text-xl p-4'>
                    Caso de Estudio 1
                </h1>
                <p className='font-normal text-left p-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.
                </p>
            </div>
        </div>
        </>
    );
}

export default CaseStudies;
