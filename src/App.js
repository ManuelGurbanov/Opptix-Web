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
      name: "Configuradores 3D Interactivos",
      description: "Boost customer satisfaction and slash your support costs by 30%! Our 3D configurators give buyers control to customize effortlessly.",
      component:
      <>    <ARModelViewer modelSrc="/models/rack.glb" controlsContainerId="material-controls" />
            <div id="material-controls" className="bg-transparent p-4 rounded absolute bottom-0 gap-2 hidden sm:block"></div>
      </>,
      picture: "https://s3-alpha-sig.figma.com/img/e31c/dd97/8aad8650775de0dcc42ef6f286768a3c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~AZMO-~g88yjg-0il4l1Yy7qLReNTRRMRLBsACQcxxmniO0Q8Os3tm1p~pp-c39PygBWsKHRUHhop3iXpCU4xXwRtY56~4hI8-riH5GkTga9FXuf27QYzlze30TB818o4kxIiMiSPokyPQoKtpnErbHcScx24yC4fDTvu7nW082JqqJi-RydR8HEP~sKz3q8LGE2fldCKaPcU0qXrPEyaepBesR26j65gk0gfp1g9IB7RR26kxkRn8Y4uOTcSxKJ1v~wac36b5q9TGtXXh8MyNR2kxhwqKHqcWge1ta10QJYRpgm-4kJZrOTNmi6-ZJyuICqffY17T4EdArv25Bqg__"
    },
    {
      id: 1,
      name: "VR/AR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <CarModelViewer modelSrc="/models/car.glb" controlsContainerId="material-controls" />,
      picture: "https://s3-alpha-sig.figma.com/img/e31c/dd97/8aad8650775de0dcc42ef6f286768a3c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~AZMO-~g88yjg-0il4l1Yy7qLReNTRRMRLBsACQcxxmniO0Q8Os3tm1p~pp-c39PygBWsKHRUHhop3iXpCU4xXwRtY56~4hI8-riH5GkTga9FXuf27QYzlze30TB818o4kxIiMiSPokyPQoKtpnErbHcScx24yC4fDTvu7nW082JqqJi-RydR8HEP~sKz3q8LGE2fldCKaPcU0qXrPEyaepBesR26j65gk0gfp1g9IB7RR26kxkRn8Y4uOTcSxKJ1v~wac36b5q9TGtXXh8MyNR2kxhwqKHqcWge1ta10QJYRpgm-4kJZrOTNmi6-ZJyuICqffY17T4EdArv25Bqg__"
    },
    {
      id: 2,
      name: "Animaciones 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <CarModelViewer modelSrc="/models/rack.glb" controlsContainerId="material-controls" />,
      picture: "https://s3-alpha-sig.figma.com/img/e31c/dd97/8aad8650775de0dcc42ef6f286768a3c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~AZMO-~g88yjg-0il4l1Yy7qLReNTRRMRLBsACQcxxmniO0Q8Os3tm1p~pp-c39PygBWsKHRUHhop3iXpCU4xXwRtY56~4hI8-riH5GkTga9FXuf27QYzlze30TB818o4kxIiMiSPokyPQoKtpnErbHcScx24yC4fDTvu7nW082JqqJi-RydR8HEP~sKz3q8LGE2fldCKaPcU0qXrPEyaepBesR26j65gk0gfp1g9IB7RR26kxkRn8Y4uOTcSxKJ1v~wac36b5q9TGtXXh8MyNR2kxhwqKHqcWge1ta10QJYRpgm-4kJZrOTNmi6-ZJyuICqffY17T4EdArv25Bqg__"
    },
    {
      id: 3,
      name: "Video lanzamiento de productos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>,
      picture: "https://s3-alpha-sig.figma.com/img/e31c/dd97/8aad8650775de0dcc42ef6f286768a3c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~AZMO-~g88yjg-0il4l1Yy7qLReNTRRMRLBsACQcxxmniO0Q8Os3tm1p~pp-c39PygBWsKHRUHhop3iXpCU4xXwRtY56~4hI8-riH5GkTga9FXuf27QYzlze30TB818o4kxIiMiSPokyPQoKtpnErbHcScx24yC4fDTvu7nW082JqqJi-RydR8HEP~sKz3q8LGE2fldCKaPcU0qXrPEyaepBesR26j65gk0gfp1g9IB7RR26kxkRn8Y4uOTcSxKJ1v~wac36b5q9TGtXXh8MyNR2kxhwqKHqcWge1ta10QJYRpgm-4kJZrOTNmi6-ZJyuICqffY17T4EdArv25Bqg__"
    },
    {
      id: 4,
      name: "Videos explicativos de productos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>,
      picture: "https://s3-alpha-sig.figma.com/img/e31c/dd97/8aad8650775de0dcc42ef6f286768a3c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~AZMO-~g88yjg-0il4l1Yy7qLReNTRRMRLBsACQcxxmniO0Q8Os3tm1p~pp-c39PygBWsKHRUHhop3iXpCU4xXwRtY56~4hI8-riH5GkTga9FXuf27QYzlze30TB818o4kxIiMiSPokyPQoKtpnErbHcScx24yC4fDTvu7nW082JqqJi-RydR8HEP~sKz3q8LGE2fldCKaPcU0qXrPEyaepBesR26j65gk0gfp1g9IB7RR26kxkRn8Y4uOTcSxKJ1v~wac36b5q9TGtXXh8MyNR2kxhwqKHqcWge1ta10QJYRpgm-4kJZrOTNmi6-ZJyuICqffY17T4EdArv25Bqg__"
    },
    {
      id: 5,
      name: "CGI/FOOH",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      component: <div className='w-full h-full bg-zinc-200'></div>,
      picture: "https://s3-alpha-sig.figma.com/img/e31c/dd97/8aad8650775de0dcc42ef6f286768a3c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~AZMO-~g88yjg-0il4l1Yy7qLReNTRRMRLBsACQcxxmniO0Q8Os3tm1p~pp-c39PygBWsKHRUHhop3iXpCU4xXwRtY56~4hI8-riH5GkTga9FXuf27QYzlze30TB818o4kxIiMiSPokyPQoKtpnErbHcScx24yC4fDTvu7nW082JqqJi-RydR8HEP~sKz3q8LGE2fldCKaPcU0qXrPEyaepBesR26j65gk0gfp1g9IB7RR26kxkRn8Y4uOTcSxKJ1v~wac36b5q9TGtXXh8MyNR2kxhwqKHqcWge1ta10QJYRpgm-4kJZrOTNmi6-ZJyuICqffY17T4EdArv25Bqg__"
    }
  ];

  return (
    <Router>
      <Navbar language={language} setLanguage={setlanguage} />
      <Routes>
        <Route path="/" element={
          <section className='max-w-screen overflow-hidden flex flex-col items-center'>
            <MainBanner language={language} />
            <PopUp language={language} />
            <SecondaryBanner language={language} />
            <WhyWorkTogether language={language} />
            <OurServices language={language} services={services}/>
            <Packs />
            <CaseStudies />
            <Faq />
            <Footer language={language} />
          </section>
        } />

        <Route path="/studie-cases" element={<CaseStudiePage/>} />
        <Route path="/services" element={<Services services={services}/>} />
      </Routes>
    </Router>
  );
}

export default App;
