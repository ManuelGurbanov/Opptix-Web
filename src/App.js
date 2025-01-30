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
import ParrillaModelViewer from './ParrillaModelViewer';

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
      component: <ParrillaModelViewer modelSrc="/models/parrilla.glb" controlsContainerId="material-controls" />,
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
        "En este proyecto trabajamos junto a Blossom, una marca emergente de fragancias premium, con el objetivo de crear un paquete de contenido integral que reflejara la esencia única de cada una de sus fragancias. Nuestro enfoque fue estratégico y personalizado, diseñando piezas visuales impactantes para posicionar la marca en el mercado y conectar emocionalmente con su público objetivo. Para este lanzamiento, desarrollamos: Animaciones 3D: Videos teaser y presentaciones dinámicas que resaltaron las notas y características de cada fragancia. Renders fotorrealistas: Imágenes en alta resolución que destacaron el diseño de los frascos y el concepto detrás de la marca, ideales para redes sociales y catálogos. Contenido e-commerce: Banners, PNGs y elementos visuales optimizados para su integración en plataformas online, mejorando la experiencia de usuario y aumentando la conversión. El proyecto estuvo guiado por la necesidad de transmitir los valores de Blossom: elegancia, frescura y autenticidad, asegurando un impacto visual consistente y memorable en todos los puntos de contacto. Este enfoque permitió a la marca no solo posicionarse estratégicamente, sino también establecer una conexión genuina con sus clientes.   .",
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
