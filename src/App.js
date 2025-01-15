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
import CarModelViewer from './CarModelViewer';
import Footer from './Footer';
import Services from './Services';

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

  const services = [
    {
      id: 0,
      name: "Configuradores 3D",
      description: "Boost customer satisfaction and slash your support costs by 30%! Our 3D configurators give buyers control to customize effortlessly.",
      component:
      <>    
            <ARModelViewer modelSrc="/models/rack.glb" controlsContainerId="material-controls" />
      </>,
      picture: 
      <div className='w-full h-full bg-zinc-200 flex justify-center items-center sm:rounded-[80px] rounded-lg relative'>
        <img src='phone.webp' className='h-full absolute bottom-0'></img>
      </div>
    },
    {
      id: 1,
      name: "Animaciones 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <CarModelViewer modelSrc="/models/car.glb" controlsContainerId="material-controls" />,
      picture:
      <div className='w-full h-full bg-black flex justify-center items-center sm:rounded-[80px] rounded-lg relative'>
      <img src='headphones.webp' className='h-full absolute bottom-0'></img>
      </div>
    },
    {
      id: 2,
      name: "VR/AR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <CarModelViewer modelSrc="/models/rack.glb" controlsContainerId="material-controls" />,
      picture:
      <div className='w-full h-full bg-black flex justify-center items-center sm:rounded-[80px] rounded-lg relative'>
      <img src='headphones.webp' className='h-full absolute bottom-0'></img>
      </div>
    },
    {
      id: 3,
      name: "Producto Interactivo 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>,
      picture: ""
    },
    {
      id: 4,
      name: "Render Estático",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>,
      picture: ""
    },
  ];

  const cases = [
    {
      id: 0,
      name: "Headphones",
      tittle: "Headphones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      firstImg: "headphones/headphonesFirst.webp",
      mainImg: "headphones/headphonesMain.webp",
      endImg: "headphones/headphonesEnd.webp",
    },
    {
      id: 0,
      name: "Blossom",
      tittle: "Blossom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      firstImg: "blossom/blossomFirst.webp",
      mainImg: "blossom/blossomMain.webp",
      endImg: "blossom/blossomEnd.webp",
    },
    {
      id: 2,
      name: "Cinturon Endless",
      tittle: "Cinturon Endless",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        firstImg: "endless/endlessFirst.webp",
        mainImg: "endless/endlessMain.webp",
        endImg: "endless/endlessEnd.webp",
    },
    {
      id: 3,
      name: "PC",
      tittle: "PC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        firstImg: "pc/pcFirst.webp",
        mainImg: "pc/pcMain.webp",
        endImg: "pc/pcEnd.webp",
    },
  ];

  return (
    <Router>
      <Navbar language={language} setLanguage={setlanguage} />
      <Routes>
        <Route path="/" element={
          <section className='max-w-screen overflow-hidden flex flex-col items-center mt-20'>
            <MainBanner language={language} />
            {/* <SecondaryBanner language={language} /> */}
            <WhyWorkTogether language={language} />
            <OurServices language={language} services={services}/>
            <Packs />
            <CaseStudies cases={cases} />
            <Faq />
            <Footer language={language} services={services} cases={cases} />
          </section>
        } />

        <Route path="/case-study" element={<CaseStudiePage caseStudies={cases}/>} />
        <Route path="/services" element={<Services services={services}/>} />
      </Routes>
    </Router>
  );
}

export default App;
