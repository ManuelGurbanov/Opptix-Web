import React from 'react';
import { translate } from "./Translations"; 
function Footer({language}) {
  return (
    <div className='w-full h-[400px] bg-zinc-200 flex justify-center items-start text-black sm:p-12 p-3 gap-9 text-sm' id='get-started'>
        <div className='flex-2 sm:mt-0 mt-12'>
          <h1 className='font-bold'>Lorem Ipsum dolor it samet</h1>
          <h2>Phasellus faucibus scelerisque eleifend 
          donec pretium vulputate sapien.</h2>

          <div className='w-full flex gap-1 mt-2'>
            <input type='text' placeholder='' className='w-full p-2 rounded-lg'/>
            <button className='px-3 py-2 rounded-xl bg-zinc-800 text-white'>Enviar
            </button>
          </div>
          <div className='w-full flex gap-1 mt-4'>
          <button className='px-3 py-2 rounded-full aspect-square bg-zinc-800 text-white'>In
          </button>
            <button className='px-3 py-2 rounded-full aspect-square bg-zinc-800 text-white'>Ig
            </button>
          </div>
        </div>

        <div className='flex-col gap-2 text-black sm:flex hidden'>
          <h1 className='font-bold'>Servicios</h1>
          <a>Configuradores 3D interactivos</a>
          <a>Realidad Aumentada</a>
          <a>Realidad Virtual</a>
          <a>Desarrollo de aplicaciones</a>
          <a>Desarrollo de videojuegos</a>
          <a>Desarrollo de software</a>
        </div>

        <div className='flex-col gap-2 text-black sm:flex hidden'>
          <h1 className='font-bold'>Casos de Estudio</h1>
          <a>Caso de Estudio 1</a>
          <a>Caso de Estudio 2</a>
          <a>Caso de Estudio 3</a>
          <a>Caso de Estudio 4</a>
          <h1 className='font-bold mt-5'>Paquetes</h1>
          <a>Web Level Up</a>
          <a>Launch Pack</a>
          <a>Content Partner</a>
        </div>

        <div className='flex-col gap-2 text-black sm:flex hidden'>
          <h1 className='font-bold'>¿Por qué trabajar juntos?</h1>
          <h1 className='font-bold'>Beneficios de trabajar juntos</h1>
        </div>
    </div>
  );
}

export default Footer;
