import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

function Navbar({languaje, setLanguaje}) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray1 text-white h-[10vh] z-50 max-w-screen w-full ring-1 ring-black">
        <img src='opptix.webp'
        className='h-full'>
        </img>

        <div className='flex flex-row gap-4 text-black w-full justify-end items-center'>
            <a className='hover:scale-105 transition ease-in cursor-pointer duration-75 hidden sm:block'>Servicios</a>
            <a className='hover:scale-105 transition ease-in cursor-pointer duration-75 hidden sm:block'>Casos de Estudio</a>
            <a className='hover:scale-105 transition ease-in cursor-pointer duration-75 hidden sm:block'>Packs</a>
            <a className='hover:scale-105 transition ease-in cursor-pointer duration-75 hidden sm:block'>Quiero Comenzar</a>

            <button
                className="ml-4"
                onClick={() => setLanguaje(languaje === 'es' ? 'en' : 'es')}
                >
                <img
                    src={languaje === 'es' ? '/flags/argentina.webp' : '/flags/eeuu.webp'}
                    alt={languaje === 'es' ? 'Español' : 'Ingles'}
                    className="w-12"
                />
            </button>
        </div>
    </div>
  );
}

export default Navbar;
