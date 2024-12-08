import React, { useState } from 'react';
import { translate } from "./Translations";
import { Link } from 'react-router-dom';

function Navbar({ language, setLanguage }) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMenuHamburguer, setShowMenuHamburguer] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center w-screen'>
        <div className="flex justify-between items-center p-4 bg-gray1 text-white h-[10vh] z-50 max-w-screen w-[90vw] rounded-3xl m-0 ring-1 ring-black fixed top-4">
          {/* Link para la pantalla principal */}

          {/* Logo en Desktop */}
          <Link to="/" className='w-52 hover:scale-105 transition ease-in cursor-pointer duration-75 hidden sm:block'>
            <img src="darkOpptix.webp" alt="Logo" />
          </Link>


        <div className='flex flex-row'>
          {/* Logo en Celulares */}
          <Link to="/" className='w-8 block sm:hidden'>
            <img src="icon.png" alt="Logo" />
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
            className='w-12 aspect-square text-black sm:hidden block justify-self-end'
            onClick={() => setShowMenuHamburguer(!showMenuHamburguer)}
          >
            {showMenuHamburguer ? 'Cerrar' : 'Menu'}
          </button>

          {/* Menú en pantallas más grandes */}
          <div className="flex sm:flex-row sm:relative absolute flex-col gap-4 text-black w-full justify-end items-center">
            <a className="hover:scale-105 transition ease-in cursor-pointer duration-75 hidden md:block">
              {translate("services", language)}
            </a>
            <a className="hover:scale-105 transition ease-in cursor-pointer duration-75 hidden md:block">
              {translate("caseStudies", language)}
            </a>
            <a className="hover:scale-105 transition ease-in cursor-pointer duration-75 hidden md:block">
              {translate("packs", language)}
            </a>
            <a className="hover:scale-105 transition ease-in cursor-pointer duration-75 hidden md:block">
              {translate("getStarted", language)}
            </a>

            <button
              className="ml-4 mr-4 hidden sm:block"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
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
        <div className="fixed top-0 left-0 w-full bg-gray1 z-40 flex flex-col items-center text-black gap-4 p-8">
          <Link
            to="/"
            className="hover:scale-105 transition ease-in cursor-pointer duration-75 mt-20"
            onClick={() => setShowMenuHamburguer(false)}
          >
            {translate("services", language)}
          </Link>
          <Link
            to="/"
            className="hover:scale-105 transition ease-in cursor-pointer duration-75"
            onClick={() => setShowMenuHamburguer(false)}
          >
            {translate("caseStudies", language)}
          </Link>
          <Link
            to="/"
            className="hover:scale-105 transition ease-in cursor-pointer duration-75"
            onClick={() => setShowMenuHamburguer(false)}
          >
            {translate("packs", language)}
          </Link>
          <Link
            to="/"
            className="hover:scale-105 transition ease-in cursor-pointer duration-75"
            onClick={() => setShowMenuHamburguer(false)}
          >
            {translate("getStarted", language)}
          </Link>
        </div>
      )}

      {/* Menú de selección de idioma en pantallas grandes */}
      {showLanguageMenu && (
        <div className="fixed right-4 top-16 z-50 max-w-1/2 bg-black rounded-md flex flex-col justify-self-end items-center justify-center gap-4 p-4">
          <div
            onClick={() => {
              setLanguage("en");
              setShowLanguageMenu(false);
            }}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition ease-in duration-75 text-white"
          >
            <img src="/flags/eeuu.webp" alt="English" className="h-6" />
            <span className="text-sm">English</span>
          </div>

          <div
            onClick={() => {
              setLanguage("es");
              setShowLanguageMenu(false);
            }}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition ease-in duration-75 text-white"
          >
            <img src="/flags/argentina.webp" alt="Español" className="h-6" />
            <span className="text-sm">Español</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;