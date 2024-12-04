import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ARModelViewer from './ARModelViewer';
import MainBanner from './MainBanner';
import Navbar from './Navbar';
import PopUp from './popup';
import SecondaryBanner from './SecondaryBanner';
import OurServices from './OurServices';
import WhyWorkTogether from './WhyWorkTogether';
import Packs from './Packs';
import CaseStudies from './CaseStudies';
import Faq from './Faq';

import CaseStudiePage from './CaseStudiePage';

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
    <Router>
      <Navbar language={language} setLanguage={setlanguage} />
      <Routes>
        <Route path="/" element={
          <section className='max-w-screen overflow-hidden flex flex-col items-center'>
            <MainBanner language={language} />
            <PopUp language={language} />
            <SecondaryBanner language={language} />
            <OurServices language={language} />
            <WhyWorkTogether language={language} />
            <Packs />
            <CaseStudies />
            <Faq />
          </section>
        } />

        <Route path="/briefcase" element={<CaseStudiePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
