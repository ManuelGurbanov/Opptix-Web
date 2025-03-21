import React from 'react';
import { translate } from "./Translations";

import RightArrow from './RightArrow';

import { useContact } from './ContactContext';

function Packs({ packs, language }) {
    const [activePack, setActivePack] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);
    const { showContactForm } = useContact();
    const handlePackChange = (newPack) => {
        setActivePack(newPack);
    };

    return (
        <div className='flex flex-col items-center w-screen min-h-screen p-7' id='packs'>
            <h1 className='w-full sm:px-24 mt-12 text-4xl font-bold text-left'>Packs</h1>
            <h2 className='w-full sm:px-24 mb-6 text-xl text-left opacity-70 sm:mb-0'>{translate("packsSub", language)}</h2>

            <div className={`flex flex-col items-start justify-center gap-12 m-0 mb-16 bg-white lg:flex-row sm:p-8 sm:mb-0 transition-opacity duration-0 ease-in-out ` } >
                {packs.map((pack, index) => (
                    <div
                        key={index}
                        data-aos-delay={`${300 + index * 100}`}
                        className={`shadow-sm shadow-black rounded-[52px] sm:h-[765px] w-full min-h-full flex flex-col items-center text-center p-8
                        relative ease-in-out cursor-pointer
                        ${pack.isMostPopular ? "text-lightblue2 ring-1 ring-lightblue" : "text-black"} 
                        ${activePack === pack.id ? "sm:w-[491px]" : "sm:w-[294px]"}
                        ${pack.id === 0 && "text-white bg-black"}
                        ${pack.id === 1 && "text-black bg-lightblue2"}
                        ${pack.id === 2 && "text-black bg-lightblue7 bg-opacity-50"}`}
                    >
                {activePack === pack.id ? (
                    <>
                        <div className={`flex flex-row items-center justify-between w-full transition-opacity ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}>
                            <h1 className='text-[36px] font-bold w-full text-left' data-aos="fade-uo">{pack.title}</h1>
                            <a className='flex items-center justify-center h-10 transition duration-75 bg-white rounded-full aspect-square hover:scale-105' href='/services/0'>
                                <RightArrow color="#000000" />
                            </a>
                        </div>

                        <p className='text-sm sm:text-[16px] my-2 w-full text-left italic font-extralight' data-aos="fade-up">{pack.description}</p>

                        <ul className="list-disc pl-5 text-left font-extralight w-full mb-3 text-sm sm:text-[17.43px]" data-aos="fade-up">
                            {translate(`pack${pack.id + 1}ResultsTittles`, language).map((title, index) => (
                                <li key={index} data-aos="fade-right">
                                    <span className="font-bold">{title}</span> {translate(`pack${pack.id + 1}Results`, language)[index]}
                                </li>
                            ))}
                        </ul>

                        <p className="underline italic w-full text-left mb-2 text-[19.5px] mt-2" data-aos="fade-up">
                            {translate("whatIncludes", language)}
                        </p>

                        <div data-aos="fade-up" className={"grid grid-flow-row-dense grid-cols-2 auto-cols-max gap-3 text-white justify-start text-nowrap mb-2"}>
                            {translate(`pack${pack.id + 1}Includes`, language).map((include, index) => (
                                <div
                                    key={index}
                                    className={`sm:px-4 sm:py-2 p-2 rounded-2xl text-[10px] overflow-hidden flex items-center justify-center
                                        ${pack.id === 0 ? "bg-zinc-500 text-white" : ""} 
                                        ${pack.id === 1 ? "bg-lightblue text-white" : ""} 
                                        ${pack.id === 2 ? "bg-lightblue text-white" : ""}`}
                                >
                                    {include}
                                </div>

                            ))}
                        </div>

                        <div className='flex flex-col items-center justify-center w-full mt-3 mb-6'>
                            <span className='w-full text-3xl font-bold text-left' data-aos="fade-up">{pack.price}</span>
                            <span className='w-full text-xs font-light text-left' data-aos="fade-up">{pack.subPrice}</span>
                        </div>

                        <footer className='sm:absolute flex flex-row items-center justify-center w-full gap-4 px-4 text-white bottom-6'>
                            <button onClick={() => showContactForm()} className={"w-full p-2 mb-2 text-sm transition-all duration-75 ease-in-out rounded-full sm:p-3 hover:scale-105 " + (pack.id === 0 ? "bg-white hover:bg-zinc-400 text-black" : "bg-black hover:bg-zinc-700 text-white")} >
                                {translate("talk", language)}
                            </button>
                            <button className='flex items-center justify-center h-10 transition duration-75 bg-white rounded-full aspect-square hover:scale-105' onClick={() => handlePackChange((pack.id + 1) % 3)}>
                                <RightArrow color="#000000" />
                            </button>
                        </footer>
                    </>
                ) : (

                            <div className={"flex flex-col items-start sm:justify-end justify-center w-full sm:h-full h-36 cursor-pointer" + (pack.id === 0 ? "text-white" : "text-black")} onClick={() => handlePackChange(pack.id)}>
                                <button onClick={() => setActivePack(pack.id)} className='absolute flex items-center justify-center sm:h-10 h-7 transition duration-75 -rotate-45 bg-black rounded-full top-8 right-4 aspect-square hover:scale-105' href='/services/0'>
                                    <RightArrow color="#ffffff" />
                                </button>
                                <h1 className='w-full px-1  mb-2 text-[28px] font-bold text-left '>{pack.title}</h1>
                                <p className='w-full px-1 mb-2 text-[10px] text-left'>{pack.miniDescription}</p>
                                <button className={"w-full p-2 mb-2 text-sm transition-all duration-75 ease-in-out rounded-full sm:p-3 hover:scale-105 " + (pack.id === 0 ? "bg-white hover:bg-zinc-400 text-black" : "bg-black hover:bg-zinc-700 text-white")}
                                onClick={() => showContactForm()}
                                >
                                    {translate("talk", language)}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='flex flex-col sm:items-center items-start justify-start sm:w-1/2 w-full gap-2 mb-16 sm:flex-row sm:gap-5' data-aos="fade-right">
                <h1 className='text-xl font-medium text-black'>
                    {translate("ownPack", language)}
                </h1>
                <button className='p-3 text-sm font-bold transition-all duration-100 rounded-full bg-black hover:bg-zinc-800 hover:scale-105 text-white'
                onClick={() => showContactForm()}>
                    {translate("talk", language)}
                </button>
            </div>
        </div>
    );
}

export default Packs;
