import React, { useState, useEffect } from 'react';

import ARModelViewer from './ARModelViewer';
import MainBanner from './MainBanner';
import Navbar from './Navbar';
import PopUp from './popup';

import SecondaryBanner from './SecondaryBanner';
import OurServices from './OurServices';
function App() {
  const [language, setlanguage] = useState('es');
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
    <section className='max-w-screen overflow-hidden'>
    <Navbar language={language} setLanguage={setlanguage} />
    <MainBanner language={language}/>
    <PopUp language={language}/>
    <SecondaryBanner language={language}/>
    <OurServices language={language}/>
    <div className="relative flex flex-col w-screen gap-5 p-6 text-black bg-white sm:h-screen h-1/2 items-center justify-start">
      <ARModelViewer
        modelSrc="/models/rack-modulable.glb"
        color={color}
        texturePath={texturePath}
        showAccesory={showAccesory}
        scale={scale}
        position={position}
      />
    </div>
    </section>
  );
}

export default App;
