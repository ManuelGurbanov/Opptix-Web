import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainBanner from './MainBanner';
import Navbar from './Navbar';
import WhyWorkTogether from './WhyWorkTogether';
import Packs from './Packs';
import CaseStudies from './CaseStudies';
import Faq from './Faq';

import CaseStudiePage from './CaseStudiePage';
import Footer from './Footer';
import Services from './Services';
import ModelLink from './Model';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UploaderViewer from './UploaderViewer';
import { translate } from './Translations';

import OurServicesBento from './OurServicesBento';
import UploaderThree from './UploaderThree';
import { ContactProvider } from "./ContactContext";

import Demostration from './Demostration';
import DemostrationTest from './DemostrationTest'

import { LanguageProvider } from "./LanguageContext";

function Layout({ children }) {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/services") && location.pathname !== "/kesseboehmer";

  return (
    <>
      {showNavbar && <Navbar/>}
      {children}
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    AOS.init();
  }, []);

  const [contact, setContact] = useState(false);

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
        "En este proyecto trabajamos junto a Blossom, una marca emergente de fragancias premium, con el objetivo de crear un paquete de contenido integral que reflejara la esencia única de cada una de sus fragancias. Nuestro enfoque fue estratégico y personalizado, diseñando piezas visuales impactantes para posicionar la marca en el mercado y conectar emocionalmente con su público objetivo. Para este lanzamiento, desarrollamos: Animaciones 3D: Videos teaser y presentaciones dinámicas que resaltaron las notas y características de cada fragancia. Renders fotorrealistas: Imágenes en alta resolución que destacaron el diseño de los frascos y el concepto detrás de la marca, ideales para redes sociales y catálogos. Contenido e-commerce: Banners, PNGs y elementos visuales optimizados para su integración en plataformas online, mejorando la experiencia de usuario y aumentando la conversión. El proyecto estuvo guiado por la necesidad de transmitir los valores de Blossom: elegancia, frescura y autenticidad, asegurando un impacto visual consistente y memorable en todos los puntos de contacto. Este enfoque permitió a la marca no solo posicionarse estratégicamente, sino también establecer una conexión genuina con sus clientes.",
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
      miniDescription: translate("pack1MiniDescription", language),
      price: translate("pack1Price", language),
      subPrice: translate("pack1SubPrice", language),
      isMostPopular: false,
      results: translate("pack1Results", language).map(result => result)
    },
    {
      id: 1,
      title: translate("pack2Title", language),
      description: translate("pack2Description", language),
      miniDescription: translate("pack2MiniDescription", language),
      price: translate("pack2Price", language),
      subPrice: translate("pack2SubPrice", language),
      isMostPopular: false,
      results: translate("pack2Results", language).map(result => result)
    },
    {
      id: 2,
      title: translate("pack3Title", language),
      description: translate("pack3Description", language),
      miniDescription: translate("pack3MiniDescription", language),
      price: translate("pack3Price", language),
      subPrice: translate("pack3SubPrice", language),
      isMostPopular: false,
      results: translate("pack3Results", language).map(result => result)
    },
  ];

  const caseStudiesNames = cases.map(caseItem => caseItem.name);
  const packNames = packs.map(packsItem => packsItem.title);

  return (
    <ContactProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={
                <section className='flex flex-col items-center mt-20 overflow-hidden max-w-screen bg-white'>
                  <MainBanner />

                  <WhyWorkTogether />

                  <OurServicesBento />

                  <Packs packs={packs} />

                  <CaseStudies cases={cases} />

                  <Faq />

                  <Footer caseStudies={caseStudiesNames} packs={packNames} />
                </section>
              } />
              <Route path="/case-study" element={<CaseStudiePage caseStudies={cases} />} />
              <Route path="/services/:serviceId" element={<Services contact={contact} setContact={setContact} />} />
              <Route path="/model" element={<ModelLink />} />
              <Route path="/upload" element={<UploaderViewer />} />
              <Route path="/uploadthree" element={<UploaderThree />} />
              <Route path="/kesseboehmer" element={<DemostrationTest />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ContactProvider>
  );
}

export default App;
