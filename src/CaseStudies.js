import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from './Translations';
function CaseStudies({language}) {
    return (
        <>
        <div className='w-full flex flex-col justify-center items-start text-black sm:p-12 sm:px-24 p-7' id='case-studies'>
            <h1 className='font-semibold text-left text-3xl'>
                {translate('caseStudies', language)}
            </h1>
            <h2 className='font-normal text-left text-xl'> 
                {translate('caseStudiesSubt', language)}
            </h2>
        </div>
        <div 
            className='flex flex-row gap-4 mb-12 sm:overflow-auto overflow-x-scroll w-screen items-center justify-start sm:justify-center sm:h-80 h-60 px-4'
            style={{ minWidth: '100vw', paddingLeft: '16px', paddingRight: '16px' }}
        >
            <div className='flex flex-col items-center justify-center'>
                <Link to={`/case-study?case=Headphones`} className='sm:w-[250px] w-44 hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                    <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/headphones.webp' alt="Headphones" />
                </Link>
                <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                    {translate('seeMore', language)}
                </a>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <Link to={`/case-study?case=Blossom`} className='sm:w-[250px] w-44 hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                    <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/perfum.webp' alt="Perfume" />
                </Link>
                <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                    {translate('seeMore', language)}
                </a>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <Link to={`/case-study?case=Endless`} className='sm:w-[250px] w-44 hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                    <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/endless.webp' alt="Endless" />
                </Link>
                <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                    {translate('seeMore', language)}
                </a>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <Link to={`/case-study?case=Strix`} className='sm:w-[250px] w-44 hover:scale-105 transition-all ease-in-out aspect-square rounded-2xl'>
                    <img className='w-full h-full object-cover rounded-2xl aspect-square' src='img/strix.webp' alt="Strix" />
                </Link>
                <a className='text-black underline mt-2 hover:scale-105 transition duration-150' href="/studie-cases">
                    {translate('seeMore', language)}
                </a>
            </div>
        </div>
        </>
    );
}

export default CaseStudies;
