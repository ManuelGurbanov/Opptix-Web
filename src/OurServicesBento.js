import React from 'react';
import './servicesBento.css'
import RightArrow from './RightArrow';
import { translate } from './Translations';

export default function OurServicesBento({ language }) {
    return (
        <div>
            <header className="flex items-center justify-between w-full px-24 py-6">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold">{translate("services", language)}</h1>
                <h2 className="text-xl font-light">{translate("servicesSub", language)}</h2>
              </div>
              <a href="/services/0" className="flex items-center justify-center w-56 px-4 py-2 text-white bg-black rounded-3xl hover:scale-105">
                <p>Explorar más</p>
                <div className="flex items-center justify-center h-4 -rotate-45 w-9">
                  <RightArrow color="#ffffff" />
                </div>
              </a>
            </header>
            <div className='container text-white'>
                <a class="box box1 text-left rounded-3xl relative" href='/services/0'>
                    <video autoPlay muted loop playsinline class="video-bg blur-sm">
                        <source src="configVideo.mp4" type="video/mp4" />
                    </video>
                    <h1 className='absolute text-2xl text-black bottom-8 left-4'>Configuradores 3D</h1>
                    <p className='absolute text-xs font-light text-black bottom-4 left-4'>Phasellus faucibus scelerisque eleifend donec.</p>

                    <a className='absolute flex items-center justify-center h-6 transition duration-75 bg-black rounded-full w-7 top-4 right-4 hover:scale-105' >
                        <RightArrow color="#ffffff" />
                    </a>
                </a>

                <a class="box box2 p-7 rounded-3xl text-white relative" href='/services/2'>
                    <h1 className='absolute text-2xl bottom-8 left-4'>Render Estático</h1>
                    <p className='absolute text-xs bottom-4 left-4'> Phasellus faucibus scelerisque eleifend donec.</p>
                    <a className='absolute flex items-center justify-center h-6 transition duration-75 bg-black rounded-full w-7 top-4 right-4 hover:scale-105'>
                        <RightArrow color="#ffffff" />
                    </a>
                </a>

                <a class="box box3 flex flex-col items-start justify-start text-left bg-black p-7 rounded-3xl relative overflow-hidden" href='/services/1'>
                    <video autoPlay muted loop playsinline class="video-bg">
                        <source src="glasses.mp4" type="video/mp4" />
                    </video>
                    <h1 class="absolute top-4 left-4 text-2xl">Animaciones 3D</h1>
                    <p class="absolute top-12 left-4">Phasellus faucibus scelerisque eleifend donec.</p>
                    <a className='absolute flex items-center justify-center h-6 transition duration-75 bg-white rounded-full w-7 top-4 right-4 hover:scale-105'>
                        <RightArrow color="#000000" />
                    </a>
                </a>


                <a class="box box4 flex flex-col items-start justify-between text-left p-7 text-black relative" href='/services/3'>
                    <h1 className='text-2xl text-black'>Realidad Virtual</h1>
                    <p className='text-xs text-black'> Phasellus faucibus scelerisque eleifend donec.</p>
                    <a className='absolute flex items-center justify-center h-6 transition duration-75 bg-black rounded-full w-7 top-4 right-4 hover:scale-105'>
                        <RightArrow color="#ffffff" />
                    </a>
                    <div className='flex items-center justify-center gap-4 w-28'>
                        <img src="phone.webp" alt="" className='h-full'/>
                        <img src="/qrcodes/bike.png" alt="" className='h-full'/>
                    </div>
                </a>
            </div>
        </div>
    )
}