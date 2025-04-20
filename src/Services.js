import React, { useEffect, useState } from "react";

import { Link , useParams, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

import { useLanguage } from './LanguageContext';
import { translate } from "./Translations";

import AllConfigurators from "./AllConfigurators";
import Animations from "./Animations";
import ArService from "./ArService";
import StaticRenders from "./StaticRenders";  
import ECommerceViewer from "./ECommerceViewer";


function Services({ contact, setContact }) {


  const { language, setLanguage } = useLanguage();
  const services = [
    {
      id: 0,
      name: translate("configTittle", language),
      component:
        <AllConfigurators language={language} setContact={setContact} />,
      picture:
        <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/0'>
          <img src='phone.webp' className='absolute bottom-0 h-full'></img>
        </a>
    },
    {
      id: 1,
      name: translate("marketingTittle", language),
      component:
        <Animations language={language} />,
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
      component:
        <ArService language={language} />,
      picture:
        <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/2'>
          <img src='phone.webp' className='absolute bottom-0 h-full'></img>
        </a>
    },
    {
      id: 3,
      name: translate("staticRenderTittle", language),
      component: <StaticRenders language={language} />,
      picture:
        <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/3'>
          <img src='render.webp' className='absolute top-0 left-0 w-full h-full object-cover z-0 sm:rounded-[80px]'></img>
        </a>
    },
    {
      id: 4,
      name: translate("viewerTittle", language),
      component:
        <ECommerceViewer language={language} />,
      picture:
        <a className='w-full h-full bg-zinc-200 hover:bg-lightblue transition duration-75 flex justify-center items-center sm:rounded-[80px] rounded-lg relative' href='/services/4'>
          <img src='viewer.webp' className='absolute top-0 left-0 w-full h-full object-cover z-0 sm:rounded-[80px]'></img>
        </a>
    }
  ];
  const navigate = useNavigate();
  const { serviceId } = useParams();  
  const [actualService, setActualService] = useState(parseInt(serviceId));


  const [currentPage, setCurrentPage] = useState(0); 

  const servicesPerPage = 3;

  const totalPages = Math.ceil(services.length / servicesPerPage);

  const [showMenuHamburguer, setShowMenuHamburguer] = useState(false);


  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * servicesPerPage;
  const visibleServices = services.slice(startIndex, startIndex + servicesPerPage);

  useEffect (() => {
    console.log("Cambiando a servicio", actualService);
  }, [actualService]);

  const changeServiceAndCloseMenu = (serviceId) => {
    setActualService(serviceId);
    navigate(`/services/${serviceId}`);
    setShowMenuHamburguer(false);
  }

  return (
    <div className="flex flex-col items-center justify-start w-screen overflow-x-hidden h-screen">

      {contact && <ContactForm language={language} />}
      {/* Menú para pantallas grandes */}
      <div className="hidden sm:flex justify-center items-center p-4 text-black gap-4 h-16 z-30 w-screen m-0 bg-zinc-300">

          <Link to="/" className='w-full hover:scale-105 transition ease-in cursor-pointer duration-75 hidden sm:block'>
            <img src="/darkOpptix.webp" alt="Logo" className="w-28" />
          </Link>

        {services.map((service, index) => (
          <button
            onClick={() => changeServiceAndCloseMenu(service.id)}
            key={index}
            className={`hover:scale-105 text-base text-center w-full transition ease-in cursor-pointer duration-75 text-nowrap ${
              actualService === service.id ? "font-bold" : ""
            }`}
          >
            {service.name}
          </button>
        ))}

          <button
            className="ml-4 mr-4 w-64"
            onClick={() => {
              if (language === "es") setLanguage("en");
              else setLanguage("es");
            }}
          >
            <img
              src={
                language === "es"
                  ? "/flags/argentina.webp"
                  : "/flags/eeuu.webp"
              }
              alt={language === "es" ? "Español" : "Ingles"}
              className="w-full"
            />
        </button>
      </div>

      <div className="sm:hidden flex justify-between items-center p-8 text-black gap-4 h-16 z-30 w-screen m-0 ring-zinc-300">

        <div className='flex flex-row'>
          {/* Logo en Celulares */}
          <Link to="/" className='w-8 block sm:hidden'>
            <img src="/img/icon.webp" alt="Logo" />
          </Link>

          <button
            className="ml-4 mr-4 sm:hidden block justify-self-start"
            onClick={() => {
              if (language === "es") setLanguage("en");
              else setLanguage("es");
            }}
          >
            <img
              src={
                language === "es"
                  ? "/flags/argentina.webp"
                  : "/flags/eeuu.webp"
              }
              alt={language === "es" ? "Español" : "Ingles"}
              className="w-8"
            />
        </button>
        </div>

          {/* Menú hamburguesa para móviles */}
          <button
            className='w-12 aspect-square text-black sm:hidden justify-self-end z-50 flex items-center justify-center'
            onClick={() => setShowMenuHamburguer(!showMenuHamburguer)}
          >
            <img src="/burguerMenu.webp" alt="Menú" className='w-1/2'/>
          </button>
      </div>

      
      {/* Menú desplegable en celulares */}
      {showMenuHamburguer && (
        <div className="fixed top-0 left-0 z-40 flex flex-col items-center w-full gap-4 p-8 text-black bg-white font-semibold">
          <button>
            <img
              src="/exit.webp"
              alt="Cerrar"
              className="w-8 absolute right-6 top-6" 
              onClick={() => setShowMenuHamburguer(false)}
            />
          </button>

          {services.map((service, index) => (
          <>
          <button
            onClick={() => changeServiceAndCloseMenu(service.id)}
            key={index}
            className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75 text-nowrap ${
              actualService === service.id ? "font-black" : "font-thin"
            }`}
          >
            {service.name}
          </button>
          <hr className='w-screen h-[2px] bg-black bg-opacity-25'></hr>
          </>
          ))}
        </div>
      )}

        {/* Pantallas chicas, ignorar */}
      <div className="flex sm:hidden justify-end items-center p-4 text-black gap-4 h-[8vh] z-30 min-w-[40vw] w-[96vw] m-0">
        {visibleServices.map((service, index) => (
          <button
            onClick={() => setActualService(service.id)}
            key={index}
            className={`hover:scale-105 text-sm text-center w-24 transition ease-in cursor-pointer duration-75 text-black h-12 p-2 rounded-2xl ${
              actualService === service.id ? "opacity-100" : "opacity-60"
            }`}
          >
            {service.name}
          </button>
        ))}

        {services.length > servicesPerPage && (
          currentPage < totalPages - 1 ? (
            <button
              onClick={goToNextPage}
              className="hover:scale-105 text-sm text-center w-8 transition ease-in cursor-pointer duration-75 h-12 rounded-2xl"
            >
              &gt;
            </button>
          ) : (
            <button
              onClick={goToPreviousPage}
              className="hover:scale-105 text-sm text-center w-8 transition ease-in cursor-pointer duration-75 h-12 rounded-2xl"
            >
              &lt;
            </button>
          )
        )}
      </div>

      <div className="w-full flex flex-col gap-2 h-full p-4 items-start justify-center">
        <div className="w-full h-screen">
          {services[actualService].component}
        </div>
      </div>
    </div>
  );
}

export default Services;
