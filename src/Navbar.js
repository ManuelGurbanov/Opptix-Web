import React, { useState } from 'react';
import { translate } from "./Translations";
import { Link } from 'react-router-dom';

function Navbar({ language, setLanguage }) {
  const [showLanguageMenu, setshowLanguageMenu] = useState(0);

  return (
    <>
    <div className='flex items-center justify-center w-screen'>
    <div className="flex justify-between items-center p-4 bg-gray1 text-white h-[10vh] z-50 max-w-screen w-[90vw] rounded-3xl m-0 ring-1 ring-black fixed top-4">
        {/* Link para la pantalla principal */}
        <Link to="/" className='w-64 hover:scale-105 transition ease-in cursor-pointer duration-75'>
        <img src="darkOpptix.webp" alt="Logo" />
        </Link>

        <div className="flex flex-row gap-4 text-black w-full justify-end items-center">
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
            className="ml-4 mr-4"
            onClick={() => setshowLanguageMenu(!showLanguageMenu)}
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


      {(showLanguageMenu == 1) && (
        <div className="fixed right-4 top-16 z-50 max-w-1/2  bg-black rounded-md flex flex-col justify-self-end items-center justify-center gap-4 p-4">
          <div
            onClick={() => {
              setLanguage("en");
              setshowLanguageMenu(false);
            }}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition ease-in duration-75 text-white"
          >
            <img src="/flags/eeuu.webp" alt="English" className="h-6" />
            <span className="text-sm">English</span>
          </div>

          <div
            onClick={() => {
              setLanguage("es");
              setshowLanguageMenu(false);
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
