import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Selector from './Selector';
import { translate } from "./Translations";

function CaseStudiePage({ language }) {
  const [searchParams] = useSearchParams();
  const caseName = searchParams.get("case") || "Briefcases";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      id: 0,
      name: "Blossom",
      tittle: "Blossom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      firstImg: "blossom/blossomFirst.webp",
      mainImg: "blossom/blossomMain.webp",
      endImg: "blossom/blossomEnd.webp",
    },
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
      id: 2,
      name: "Cinturon Endless",
      tittle: "Cinturon Endless",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
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
    },
    {
      id: 4,
      name: "Silla Gamer",
      tittle: "Silla Gamer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
      secondTittle: "Different colors and sizes.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl.",
    },
  ];

  // Buscar el caso actual por nombre
  const actualCase = cases.find((c) => c.name === caseName) || cases[0];

  return (
    <>
      <div className='w-full h-[90vh] bg-white flex flex-col sm:flex-row justify-center items-start text-black'>
        <Selector actualCase={actualCase.id} cases={cases} />
        <section className='w-full h-full p-8 sm:p-12 flex items-center justify-center flex-col'>
          <h1 className='font-semibold sm:text-3xl text-lg w-full mt-12'>
            {actualCase.tittle}
          </h1>
          <p className='font-semibold sm:text-2xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
            {actualCase.description}
          </p>
        </section>

        <section className='w-full h-full p-0'>
          <img
            src={actualCase.firstImg}
            className='w-full h-full object-cover'
          ></img>
        </section>

      </div>
      <div className='w-screen h-screen bg-zinc-400 flex justify-center items-center text-black'>
      <img
            src={actualCase.mainImg}
            className='w-full h-full object-cover'
          ></img>
      </div>
      <div className='w-full h-[90vh] bg-white flex flex-col sm:flex-row justify-end items-start text-black text-right'>
        <section className='w-full h-full p-0 bg-zinc-500'>
        <img
            src={actualCase.endImg}
            className='w-full h-full object-cover'
          ></img>
        </section>
        <section className='w-full h-full p-8 sm:p-12 flex items-end justify-center flex-col'>
          <h1 className='font-semibold sm:text-3xl text-lg w-full mt-12'>
            {actualCase.secondTittle}
          </h1>
          <p className='font-semibold sm:text-2xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
            {actualCase.secondDescription}
          </p>

          <Link
            to="/"
            className='mt-4 bg-zinc-200 p-2 rounded-lg hover:bg-zinc-400 hover:scale-105 transition-all duration-75 flex items-center justify-center'
          >
            Volver
          </Link>
        </section>
      </div>
    </>
  );
}

export default CaseStudiePage;