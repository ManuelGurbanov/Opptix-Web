import React from 'react';
import './servicesBento.css'
import RightArrow from './RightArrow';
export default function OurServicesBento() {
    return (
        <div>
            <h1>Servicios</h1>
            <div className='container text-white'>
                <div class="box box1 text-left rounded-3xl relative">
                    <h1 className='w-full absolute bottom-8 left-4 text-2xl'>Configuradores 3D</h1>
                    <p className='w-full text-xs font-light absolute bottom-4 left-4'>Phasellus faucibus scelerisque eleifend donec.</p>

                    <a className='w-7 h-6 bg-white absolute top-4 right-4 rounded-full flex items-center justify-center hover:scale-105 transition duration-75' href='/services/0'>
                        <RightArrow color="#000000" />
                    </a>
                </div>

                <div class="box box2 flex flex-col items-center justify-start text-left bg-black p-7 rounded-3xl">

                </div>

                <div class="box box3 flex flex-col items-start justify-start text-left bg-black p-7 rounded-3xl relative overflow-hidden">
                    <video autoPlay muted loop playsinline class="video-bg">
                        <source src="glasses.mp4" type="video/mp4" />
                    </video>
                    <h1 class="absolute top-4 left-4 w-full text-2xl">Animaciones 3D</h1>
                    <p class="absolute top-12 left-4 w-full">Phasellus faucibus scelerisque eleifend donec.</p>
                    <a className='w-7 h-6 bg-white absolute top-4 right-4 rounded-full flex items-center justify-center hover:scale-105 transition duration-75' href='/services/1'>
                        <RightArrow color="#000000" />
                    </a>
                </div>


                <div class="box box4 flex flex-col items-start justify-end text-left p-7 text-black relative">
                    <h1 className='text-black w-full text-2xl'>Render Estático</h1>
                    <p className='text-black text-xs w-full'> Phasellus faucibus scelerisque eleifend donec.</p>
                    <a className='w-7 h-6 bg-black absolute top-4 right-4 rounded-full flex items-center justify-center hover:scale-105 transition duration-75' href='/services/3'>
                        <RightArrow color="#ffffff" />
                    </a>
                    <div className='w-28 flex items-center justify-center gap-4'>
                        <img src="phone.webp" alt="" className='h-full'/>
                        <img src="/qrcodes/bike.png" alt="" className='h-full'/>
                    </div>
                </div>
            </div>
        </div>
    )
}