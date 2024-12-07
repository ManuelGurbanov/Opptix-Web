import React from 'react';
import { useState } from 'react';
import { translate } from "./Translations"; 
import Selector from './Selector';
import { Link } from 'react-router-dom';
function CaseStudiePage({language}) {
    let [actualCase, setActualCase] = useState(0);
    const cases = [
        {
          id: 0,
          tittle: "Briefcases",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
          secondTittle: "Different colors and sizes.",
          secondDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        },
        {
          id: 1,
          tittle: "Headphones",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
          secondTittle: "Different colors and sizes.",
          secondDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        },
        {
          id: 2,
          tittle: "Cinturon Endless",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
          secondTittle: "Different colors and sizes.",
          secondDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        },
        {
          id: 3,
          tittle: "PC",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
          secondTittle: "Different colors and sizes.",
          secondDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        },
        {
          id: 4,
          tittle: "Silla Gamer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
          secondTittle: "Different colors and sizes.",
          secondDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
        },
      ];
  return (
    <>
    <div className='w-full h-[90vh] bg-white flex flex-col sm:flex-row justify-center items-start text-black'>
        <Selector actualCase={actualCase} setActualCase={setActualCase} cases={cases}/>
        <section className='w-full h-full p-8 sm:p-12  flex items-center justify-center flex-col'>
            <h1 className='font-semibold sm:text-3xl text-lg w-full mt-12'>
                {cases[actualCase].tittle}
            </h1>
            <p className='font-semibold sm:text-2xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
            {cases[actualCase].description}
            </p>
        </section>

        <section className='w-full h-full p-0 sm:p-8  bg-zinc-500'>
        </section>
    </div>
    <div className='w-screen h-screen bg-zinc-400 flex justify-center items-center text-black'>
        <h1 className='text-5xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    </div>
    <div className='w-full h-[90vh] bg-white flex flex-col sm:flex-row justify-end items-start text-black text-right'>
        <section className='w-full h-full p-0 sm:p-8  bg-zinc-500'>
        </section>
        <section className='w-full h-full p-8 sm:p-12  flex items-end justify-center flex-col'>
            <h1 className='font-semibold sm:text-3xl text-lg w-full mt-12'>
                {cases[actualCase].secondTittle}
            </h1>
            <p className='font-semibold sm:text-2xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
            {cases[actualCase].secondDescription}
            </p>

            <Link to="/" className=' mt-4 bg-zinc-200 p-2 rounded-lg hover:bg-zinc-400 hover:scale-105 transition-all duration-75 flex items-center justify-center'>
                Volver
            </Link>
        </section>

    </div>
    </>
  );
}

export default CaseStudiePage;
