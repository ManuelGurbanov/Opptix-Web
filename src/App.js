// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DeskModel from './DeskModel';
import AccessoryModel from './AccessoryModel';

function App() {
  const basePrice = 10000;
  const accessoryPrice = 7500;

  const [showAccessory, setShowAccessory] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(basePrice);

  const handleAccessoryToggle = () => {
    setShowAccessory(!showAccessory);
    setTotalPrice(showAccessory ? basePrice : basePrice + accessoryPrice);
  };

  return (
    <section className='w-screen flex flex-col items-center justify-center h-screen bg-slate-700'>
      <div className='w-full h-full p-7 sm:p-0 sm:w-1/3 flex items-center justify-center flex-col gap-3 sm:h-1/2'>
        <h1 className='text-2xl font-bold text-center text-white'>Prueba render</h1>

        <Canvas camera={{ position: [0, 12, 5], fov: 50 }} className='ring-zinc-900 rounded-xl ring-2 w-1/2 h-1/2 bg-white'>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

          <DeskModel position={[0, -2, 0]} scale={0.04} />

          {showAccessory && <AccessoryModel position={[0, 0.8, 0]} scale={3} />}
        </Canvas>

        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleAccessoryToggle}
            className='p-4 text-sm text-white bg-slate-600 hover:bg-slate-800 font-bold hover:scale-105 transition-all ease-in-out rounded-lg'
          >
            {showAccessory ? 'Sacar extra' : 'Añadir Extra'}
          </button>
          <p className="text-white font-bold mt-2 text-2xl">Precio: ${totalPrice}</p>
        </div>
      </div>
    </section>
  );
}

export default App;
