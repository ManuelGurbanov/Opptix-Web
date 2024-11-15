import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';  // Importamos OrbitControls sin usar useTexture aquí
import Model from './Model';
import Configurator from './Configurator';
import Accesory from './Accesory';

function App() {
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
    <div className="relative h-screen w-full bg-gray-900 text-white flex gap-5 p-6">
      <Configurator 
        color={color} 
        setColor={setColor} 
        setShowAccesory={setShowAccesory}
        showAccesory={showAccesory}
        scale={scale}
        setScale={setScale}
        position={position}
        setPosition={setPosition}
        setTexture={setTexturePath} 
        price = {price}
      />

      <div className="flex justify-center items-center w-1/2">
        <Canvas className="h-96 w-full rounded-lg bg-gray-800 ring-gray-700 ring-2">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          
          <Model 
          color={color} scale={scale} position={position} 
          texturePath={texturePath}
          />
          <OrbitControls enableZoom={true} />

          {showAccesory && <Accesory position={[0, 0, 0]} />}
        </Canvas>
      </div>
    </div>
  );
}

export default App;
