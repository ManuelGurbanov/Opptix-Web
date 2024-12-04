import React from 'react';
import { translate } from "./Translations"; 

import { Link } from 'react-router-dom';
function CaseStudiePage({language}) {
  return (
    <>
    <div className='w-full h-[90vh] bg-white flex flex-col sm:flex-row justify-center items-start text-black'>
        <section className='w-full h-full p-8 sm:p-12  flex items-center justify-center flex-col'>
            <h1 className='font-semibold sm:text-3xl text-lg w-full mt-12'>
                "Lorem Ipsum dolor sit amet, <br></br> consectetur adipiscing elit.
            </h1>
            <p className='font-semibold sm:text-2xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
                Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vivamus at augue eget arcu dictum varius duis at consectetur. Sed felis eget velit aliquet sagittis id consectetur purus. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Entero feugiat scelerisque varius morbi enim nunc faucibus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Habitante pellentesco morbi tristique senectus et netus et malesuada famas ac turpis egetas.
            </p>
        </section>

        <section className='w-full h-full p-0 sm:p-8  bg-zinc-500'>
        </section>
    </div>
    <div className='w-screen h-screen bg-zinc-400 flex justify-center items-center text-black'>
        <h1 className='text-5xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    </div>
    <div className='w-full h-[90vh] bg-white flex flex-col sm:flex-row justify-end items-start text-black text-right'>
        <section className='w-full h-full p-0 sm:p-8  bg-zinc-500'>
        </section>
        <section className='w-full h-full p-8 sm:p-12  flex items-end justify-center flex-col'>
            <h1 className='font-semibold sm:text-3xl text-lg w-full mt-12'>
                "Lorem Ipsum dolor sit amet, <br></br> consectetur adipiscing elit.
            </h1>
            <p className='font-semibold sm:text-2xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
                Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vivamus at augue eget arcu dictum varius duis at consectetur. Sed felis eget velit aliquet sagittis id consectetur purus. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Entero feugiat scelerisque varius morbi enim nunc faucibus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Habitante pellentesco morbi tristique senectus et netus et malesuada famas ac turpis egetas.
            </p>

            <Link to="/" className=' mt-4 bg-zinc-200 p-2 rounded-lg hover:bg-zinc-400 hover:scale-105 transition-all duration-75 flex items-center justify-center'>
                Volver
            </Link>
        </section>

    </div>
    </>
  );
}

export default CaseStudiePage;
