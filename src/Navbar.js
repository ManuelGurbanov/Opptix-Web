import React, { useState } from 'react';
import { translate } from "./Translations";

function Navbar({ language, setLanguage }) {
  const [showLanguageMenu, setshowLanguageMenu] = useState(0);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray1 text-white h-[10vh] z-50 max-w-screen w-full ring-1 ring-black">
        <img src="darkOpptix.webp" className="h-full" alt="Logo" />

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

      {(showLanguageMenu == 1) && (
        <div className="absolute right-8 top-18 z-50 max-w-1/2  bg-black rounded-md flex flex-col justify-self-end items-center justify-center gap-4 p-4">
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
