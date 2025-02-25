import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import MainBanner from './MainBanner';
import Navbar from './Navbar';
import WhyWorkTogether from './WhyWorkTogether';
import Packs from './Packs';
import CaseStudies from './CaseStudies';
import Faq from './Faq';

import CaseStudiePage from './CaseStudiePage';
import Footer from './Footer';
import Services from './Services';
import ModelLink from './BikeLink';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllConfigurators from './AllConfigurators';
import UploaderViewer from './UploaderViewer';
import { translate } from './Translations';

import OurServicesBento from './OurServicesBento';
import UploaderThree from './UploaderThree';
import ContractButton from './ContractButton';

function Layout({ children, language, setLanguage }) {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/services");

  return (
    <>
      {showNavbar && <Navbar language={language} setLanguage={setLanguage} />}
      {children}
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('en');

  const [showAccesory, setShowAccesory] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      id: 0,
      name: translate("configTittle", language),
      description: translate("configText", language),
      component:
      <AllConfigurators language={language}/>
      ,
      
      picture: 
      <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/0'>
        <img src='phone.webp' className='h-full absolute bottom-0'></img>
      </a>
    },
    {
      id: 1,
      name: translate("marketingTittle", language),
      description: translate("marketingText", language),
      component: 
      
      <div className='w-full flex flex-col items-center justify-start p-12 py-4 relative'>

        <header className='w-full flex items-center justify-between gap-4 min-h-[30vh]'>
          <div className='flex flex-col w-full'>
            <h1 className='w-full text-left text-[60px]'>Animaciones 3D</h1>
            <p className='font-light w-full text-left'>
            Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vivamus at augue eget arcu dictum varius duis at consectetur. 
            </p>
          </div>
          <div className='w-full h-14 flex items-start justify-end'>
          <ContractButton/>
          </div>
        </header>


          <video className='w-full mt-4 rounded-3xl' autoPlay loop muted>
            <source src="/carVideo.mp4" type="video/mp4"></source>
          </video>
      </div>  
      ,

      picture:
      <a className='w-full h-full bg-black hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/1'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 sm:rounded-[80px]"
          src="/img/3d.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </a>
    },
    {
      id: 2,
      name: translate("arTittle", language),
      description: translate("arText", language),
      component: 
      <section className='w-full flex-col items-center justify-start px-24'>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                        poster="/loading.gif"
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

        <hr className='bg-lightblue bg-opacity-20 w-full h-[1px] mt-12 mb-12'></hr>

        <div className="flex flex-col sm:flex-row-reverse items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                poster="/loading.gif"
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

        <hr className='bg-lightblue bg-opacity-20 w-full h-[1px] mt-12 mb-12'></hr>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                poster="/loading.gif"
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

        <hr className='bg-lightblue bg-opacity-20 w-full h-[1px] mt-12 mb-12'></hr>

        <div className="flex flex-col sm:flex-row-reverse items-center justify-center w-full bg-white rounded-4xl">
              <model-viewer
                id="hotspot-camera-view-demo" 
                loading="eager"
                poster="/loading.gif"
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
      <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/2'>
        <img src='phone.webp' className='h-full absolute bottom-0'></img>
      </a>
    },
    {
      id: 3,
      name: translate("staticRenderTittle", language),
      description: translate("staticRenderText", language),
      component: <></>,
      picture: 
        <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/3'>
          <img src='render.webp' className='absolute top-0 left-0 w-full h-full object-cover z-0 sm:rounded-[80px]'></img>
        </a>
    },
    {
      id: 4,
      name: translate("viewerTittle", language),
      description: translate("viewerText", language),
      component: <div className='w-full h-full bg-zinc-200'></div>,
      picture: 
        <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/4'>
          <img src='viewer.webp' className='absolute top-0 left-0 w-full h-full object-cover z-0 sm:rounded-[80px]'></img>
        </a>
    },
    {
      id: 5,
      name: translate("interactivAnimTittle", language),
      description: translate("interactivAnimText", language),
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
        id: 0,
        title: translate("pack1Title", language),
        description: translate("pack1Description", language),
        price: translate("pack1Price", language),
        subPrice: translate("pack1SubPrice", language),
        isMostPopular: false,
        results: translate("pack1Results", language).map(result => result)
    },
    
    {
        id: 1,
        title: translate("pack2Title", language),
        description: translate("pack2Description", language),
        price: translate("pack2Price", language),
        subPrice: translate("pack2SubPrice", language),
        isMostPopular: true,
        results: translate("pack2Results", language).map(result => result)
    },
    {
      id: 2,
      title: translate("pack3Title", language),
      description: translate("pack3Description", language),
      price: translate("pack3Price", language),
      subPrice: translate("pack3SubPrice", language),
      isMostPopular: false,
      results: translate("pack3Results", language).map(result => result)
  },
];


  const caseStudiesNames = cases.map(caseItem => caseItem.name);
  const packNames = packs.map(packsItem => packsItem.title);

  return (
    <Router>
      <Layout language={language} setLanguage={setLanguage}>
        <Routes>
          <Route path="/" element={
            <section className='max-w-screen overflow-hidden flex flex-col items-center mt-20'>
              <MainBanner language={language} />
              <WhyWorkTogether language={language} />
              <OurServicesBento language={language}/>
              <Packs packs={packs} language={language} />
              <CaseStudies cases={cases} language={language} />
              <Faq language={language} />
              <Footer language={language} services={services} caseStudies={caseStudiesNames} packs={packNames} />
            </section>
          } />
          <Route path="/case-study" element={<CaseStudiePage caseStudies={cases} />} />
          <Route path="/services/:serviceId" element={<Services services={services} language={language} setLanguage={setLanguage}/>} />
          <Route path="/model" element={<ModelLink />} />
          <Route path="/upload" element={<UploaderViewer />} />
          <Route path="/uploadthree" element={<UploaderThree />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

