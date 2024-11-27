import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';  // Importamos OrbitControls sin usar useTexture aquí
import Model from './Model';
import Configurator from './Configurator';
import Accesory from './Accesory';

import HandsWithWatch from './HandsWithWatch';
import Hands from './Hands';

import ARModelViewer from './ARModelViewer';

import Navbar from './Navbar';
function App() {
  const [languaje, setLanguaje] = useState('es');
  const [color, setColor] = useState('#ffffff');
  const [showAccesory, setShowAccesory] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState([0, 0, 0]);
  const [texturePath, setTexturePath] = useState('/models/redlabel.webp');

  const basePrice = 1000;
  const accesoryPrice = 250;
  const [price, setPrice] = useState(basePrice);

  useEffect(() => {
    const totalPrice = showAccesory ? basePrice + accesoryPrice : basePrice;
    setPrice(totalPrice);
  }, [showAccesory]);

  return (
    <>
    <Navbar languaje={languaje} setLanguaje={setLanguaje} />
    <div className="relative flex flex-col w-screen gap-5 p-6 text-black bg-white sm:h-screen h-1/2 items-center justify-start">
      <ARModelViewer
        modelSrc="/models/rack.glb"
        color={color}
        texturePath={texturePath}
        showAccesory={showAccesory}
        scale={scale}
        position={position}
      />
    </div>
    </>
  );
}

export default App;
