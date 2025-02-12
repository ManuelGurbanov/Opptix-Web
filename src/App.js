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
import BikeLink from './BikeLink';
import { max, viewport } from 'three/webgpu';
import ModelLink from './BikeLink';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllConfigurators from './AllConfigurators';
import UploaderViewer from './UploaderViewer';

function App() {
  const [language, setlanguage] = useState('es');
  const [showAccesory, setShowAccesory] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      id: 0,
      name: "Configuradores 3D",
      description: "Boost customer satisfaction and slash your support costs by 30%! Our 3D configurators give buyers control to customize effortlessly.",
      component:
      <AllConfigurators/>
      ,
      
      picture: 
      <div className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative'>
        <img src='phone.webp' className='h-full absolute bottom-0'></img>
      </div>
    },
    {
      id: 1,
      name: "Animaciones 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: 
      
      <div className='w-full flex flex-col items-center justify-start'>
        <video autoPlay muted loop playsInline className='w-full sm:w-3/4 rounded-3xl mt-4 mb-4'>
          <source src="carVideo.mp4" type="video/mp4" />
        </video>
      </div>


      ,



      picture:
      <div className='w-full h-full bg-black hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative'>
      <img src='headphones.webp' className='h-full absolute bottom-0'></img>
      </div>
    },
    {
      id: 2,
      name: "VR/AR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: 
      <section className='w-full flex-col items-center justify-start px-24'>
        <div className="relative flex flex-col sm:flex-row items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                src="/models/bicicleta.glb"
                alt="Modelo 3D en AR"
                auto-rotate
                camera-controls
                ar
                ar-modes="webxr scene-viewer quick-look"
                className="w-full h-full object-contain rounded-4xl"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "70vw",
                  display: "block",
                  border: "1px solid #CFCFCF",
                  borderRadius: "12px",
                  marginTop: "20px",
                }}
              >
              </model-viewer>

              <img
              className='w-[400px]' src='/qrcodes/bike.png'>

              </img>
        </div>

        <div className="relative flex flex-col sm:flex-row-reverse items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                src="/models/sillon.glb"
                alt="Modelo 3D en AR"
                auto-rotate
                camera-controls
                ar
                ar-modes="webxr scene-viewer quick-look"
                className="w-full h-full object-contain rounded-4xl"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "70vw",
                  display: "block",
                  border: "1px solid #CFCFCF",
                  borderRadius: "12px",
                  marginTop: "20px",
                }}
              >
              </model-viewer>

              <img
              className='w-[400px]' src='/qrcodes/sillon.png'>

              </img>
        </div>

        <div className="relative flex flex-col sm:flex-row items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                src="/models/sofa.glb"
                alt="Modelo 3D en AR"
                auto-rotate
                camera-controls
                ar
                ar-modes="webxr scene-viewer quick-look"
                className="w-full h-full object-contain rounded-4xl"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "70vw",
                  display: "block",
                  border: "1px solid #CFCFCF",
                  borderRadius: "12px",
                  marginTop: "20px",
                }}
              >
              </model-viewer>

              <img
              className='w-[400px]' src='/qrcodes/sofa.png'>

              </img>
        </div>

        <div className="relative flex flex-col sm:flex-row-reverse items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                src="/models/TEST-180CM.glb"
                alt="Modelo 3D en AR"
                auto-rotate
                camera-controls
                ar
                ar-modes="webxr scene-viewer quick-look"
                className="w-full h-full object-contain rounded-4xl"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "70vw",
                  display: "block",
                  border: "1px solid #CFCFCF",
                  borderRadius: "12px",
                  marginTop: "20px",
                }}
              >
              </model-viewer>

              <img
              className='w-[400px]' src='/qrcodes/TEST-180CM.png'>

              </img>
        </div>
      </section>,
      picture:
      <div className='w-full h-full bg-black hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative'>
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

  const packs = [
    {
        title: 'Más confianza, más conversión',
        description: 'Convierte más con un catálogo 3D interactivo y realidad aumentada.',
        price: "Desde $XXX",
        subPrice: "+ Fee mensual bajo",
        isMostPopular: false,
        results: [
            'Catálogo 3D interactivo (iFrame)',
            'Visualización en Realidad Aumentada (AR)',
            'Optimización del rendimiento web',
            '40% menos devoluciones gracias a una mejor percepción del producto',
            '+30% en conversión eliminando dudas del cliente',
            'Diferénciate con una experiencia de compra inmersiva'
        ]
    },
    {
        title: 'Más ventas, menos costos',
        description: 'Convierte tu tienda en un showroom digital con personalización en tiempo real.',
        price: "Desde $XXX",
        subPrice: "+ Fee mensual intermedio",
        isMostPopular: true,
        results: [
            'TODO lo del Pack 1',
            'Configurador 3D interactivo (colores, materiales, opciones)',
            'Venta cruzada y upsells dinámicos',
            'Asesoría UX/UI para máxima efectividad',
            'Pack de renders para redes y e-commerce',
            '+40% en ventas gracias a la personalización interactiva',
            'Mayor ticket promedio con upsells y venta cruzada',
            'Menos costos de atención al cliente al automatizar la personalización'
        ]
    },
    {
        title: 'Experiencia Premium',
        description: 'Dale a tu web una experiencia de marca inolvidable con animaciones 3D interactivas.',
        price: "Desde $XXX",
        subPrice: "+ Fee mensual alto",
        isMostPopular: false,
        monthly: true,
        results: [
            'TODO lo del Pack 1 y 2',
            'Animaciones interactivas (scroll, cursor, click)',
            'Servicio UX/UI integral para una integración visual perfecta',
            'Contenido premium: Animaciones + renders + portadas de producto',
            'Experiencia Apple-level: más engagement y retención en tu web',
            'Mayor diferenciación y credibilidad en el mercado',
            'Aumento en conversión con animaciones que guían la compra'
        ]
    }
];


  const caseStudiesNames = cases.map(caseItem => caseItem.name);
  const packNames = packs.map(packsItem => packsItem.title);

  return (
    <Router>
      <Navbar language={language} setLanguage={setlanguage} />
      <Routes>
        <Route path="/" element={
          <section className='max-w-screen overflow-hidden flex flex-col items-center mt-20'>
            <MainBanner language={language} />
            <WhyWorkTogether language={language} />
            <OurServices language={language} services={services}/>
            <Packs packs={packs}/>
            <CaseStudies cases={cases} language={language} />
            <Faq language={language}/>
            <Footer language={language} services={services} caseStudies={caseStudiesNames} packs={packNames}/>
          </section>
        } />

        <Route path="/case-study" element={<CaseStudiePage caseStudies={cases}/>} />
        <Route path="/services" element={<Services services={services}/>} />
        <Route path="/model" element={<ModelLink />} />
        <Route path="/upload" element={<UploaderViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
