import React, { useState } from 'react';
import { translate } from "./Translations";
import { Link } from 'react-router-dom';

import { useContact } from './ContactContext';
import { useLanguage } from './LanguageContext';

function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMenuHamburguer, setShowMenuHamburguer] = useState(false);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  const { showContactForm } = useContact();
  return (
    <>
      <div className='fixed top-0 z-40 flex items-center justify-center w-screen'>
        <div className="z-40 flex items-center justify-between w-screen h-16 p-4 text-white bg-zinc-50">

          <Link to="/" className='hidden transition duration-75 ease-in cursor-pointer w-28 hover:scale-105 sm:block' onClick={scrollTop}>
            <img src="darkOpptix.webp" alt="Logo" />
          </Link>


        <div className='flex flex-row'>
          {/* Logo en Celulares */}
          <Link to="/" className='block w-8 sm:hidden'>
            <img src="img/icon.webp" alt="Logo" />
          </Link>

          <button
            className="block ml-4 mr-4 sm:hidden justify-self-start"
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
            className='z-50 flex items-center justify-center w-12 text-black aspect-square sm:hidden justify-self-end'
            onClick={() => setShowMenuHamburguer(!showMenuHamburguer)}
          >
            <img src="burguerMenu.webp" alt="Menú" className='w-1/2'/>
          </button>

          {/* Menú en pantallas más grandes */}
          <div className="absolute flex flex-col items-center justify-end w-full gap-4 text-black sm:flex-row sm:relative">
            <Link className="hidden transition duration-75 ease-in cursor-pointer hover:scale-105 md:block" to="/services/0">
              {translate("services", language)}
            </Link>
            <Link className="hidden transition duration-75 ease-in cursor-pointer hover:scale-105 md:block" to="/case-study?case=Headphones">
              {translate("caseStudies", language)}
            </Link>
            <a className="hidden transition duration-75 ease-in cursor-pointer hover:scale-105 md:block" href='#packs'>
              {translate("packs", language)}
            </a>
            <button className="hidden transition duration-75 ease-in cursor-pointer hover:scale-105 md:block bg-lightblue px-4 py-2 rounded-[48px]" onClick={() => showContactForm()}>
              {translate("talk", language)}
            </button>

            <button
              className="hidden ml-4 mr-4 sm:block"
              onClick={() => 
                {if (language === "es") setLanguage("en");
                else setLanguage("es");}}
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
        </div>
      </div>

      {/* Menú desplegable en celulares */}
      {showMenuHamburguer && (
        <div className="fixed top-0 left-0 z-40 flex flex-col items-center w-full gap-4 p-8 text-black bg-white font-semibold">
          <button>
            <img
              src="exit.webp"
              alt="Cerrar"
              className="absolute w-8 right-6 top-4" 
              onClick={() => setShowMenuHamburguer(false)}
            />
          </button>
          
          <a
            className="transition duration-75 ease-in cursor-pointer hover:scale-105"
            onClick={() => setShowMenuHamburguer(false)}
            href='#services'
          >
            {translate("services", language)}
          </a>
          <hr className='w-screen h-[2px] bg-black bg-opacity-25'></hr>
          <a
            className="transition duration-75 ease-in cursor-pointer hover:scale-105"
            onClick={() => setShowMenuHamburguer(false)}
            href='#case-studies'
          >
            {translate("caseStudies", language)}
          </a>
          <hr className='w-screen h-[2px] bg-black bg-opacity-25'></hr>
          <a
            className="transition duration-75 ease-in cursor-pointer hover:scale-105"
            onClick={() => setShowMenuHamburguer(false)}
            href='#packs'
          >
            {translate("packs", language)}
          </a>
          <hr className='w-screen h-[2px] bg-black bg-opacity-25'></hr>
          <a
            className="transition duration-75 ease-in cursor-pointer hover:scale-105 bg-lightblue px-2 py-1 rounded-[48px]"
            onClick={() => setShowMenuHamburguer(false)}
            href='#get-started'
          >
            {translate("getStarted", language)}
          </a>
        </div>
      )}

      {/* Menú de selección de idioma en pantallas grandes
      {showLanguageMenu && (
        <div className="fixed z-50 flex flex-col items-center justify-center gap-4 p-4 bg-black rounded-md right-4 top-16 max-w-1/2 justify-self-end">
          <div
            onClick={() => {
              setLanguage("en");
              setShowLanguageMenu(false);
            }}
            className="flex items-center gap-2 text-white transition duration-75 ease-in cursor-pointer hover:scale-105"
          >
            <img src="/flags/eeuu.webp" alt="English" className="h-6" />
            <span className="text-sm">English</span>
          </div>

          <div
            onClick={() => {
              setLanguage("es");
              setShowLanguageMenu(false);
            }}
            className="flex items-center gap-2 text-white transition duration-75 ease-in cursor-pointer hover:scale-105"
          >
            <img src="/flags/argentina.webp" alt="Español" className="h-6" />
            <span className="text-sm">Español</span>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Navbar;