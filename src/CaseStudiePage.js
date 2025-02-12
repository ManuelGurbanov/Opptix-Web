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
      name: "Headphones",
      tittle: "Headphones",
      description: (
        <>
          <p>
            Este proyecto tuvo como objetivo explorar y perfeccionar técnicas avanzadas de renderizado y animación en 3D, enfocándonos en lograr un nivel excepcional de calidad visual.
          </p>
          <h2 className="font-semibold text-lg mt-4">Qué hicimos:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Renders fotorrealistas:</strong> Desarrollamos imágenes de alta resolución que destacaron cada detalle de diseño, materiales y texturas de los headphones, buscando transmitir calidad y modernidad.</li>
            <li><strong>Animaciones de producto:</strong> Creamos secuencias dinámicas que mostraron el producto desde diferentes perspectivas, resaltando su diseño ergonómico y acabados premium.</li>
          </ul>
        </>
      ),
      secondTittle: "Resultados",
      secondDescription: (
        <>
          <p>
            El proyecto fue una oportunidad para llevar nuestras habilidades técnicas al límite, demostrando cómo el 3D puede elevar la percepción de un producto y capturar su esencia con un alto nivel de detalle.
          </p>
          <p>
            Si buscas contenido 3D de alta calidad para destacar tus productos, estamos aquí para ayudarte. 🚀
          </p>
        </>
      ),
      firstImg: "headphones/headphonesFirst.webp",
      mainImg: "headphones/headphonesMain.webp",
      endImg: "headphones/headphonesEnd.webp",
    },
    {
      id: 1,
      name: "Blossom",
      tittle: "Blossom",
      description: (
        <>
          <p>
            En este proyecto trabajamos junto a Blossom, una marca emergente de fragancias premium, con el objetivo de crear un paquete de contenido integral que reflejara la esencia única de cada una de sus fragancias. Nuestro enfoque fue estratégico y personalizado, diseñando piezas visuales impactantes para posicionar la marca en el mercado y conectar emocionalmente con su público objetivo.
          </p>
        </>
      ),
      //secondTittle: "Different colors and sizes.",
      secondDescription: 
      <>
          <h2 className="font-semibold mt-4">Para este lanzamiento, desarrollamos:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Animaciones 3D:</strong> Videos teaser y presentaciones dinámicas que resaltaron las notas y características de cada fragancia.</li>
            <li><strong>Renders fotorrealistas:</strong> Imágenes en alta resolución que destacaron el diseño de los frascos y el concepto detrás de la marca, ideales para redes sociales y catálogos.</li>
            <li><strong>Contenido e-commerce:</strong> Banners, PNGs y elementos visuales optimizados para su integración en plataformas online, mejorando la experiencia de usuario y aumentando la conversión.</li>
          </ul>
          <p className="mt-4">
            El proyecto estuvo guiado por la necesidad de transmitir los valores de Blossom: elegancia, frescura y autenticidad, asegurando un impacto visual consistente y memorable en todos los puntos de contacto. Este enfoque permitió a la marca no solo posicionarse estratégicamente, sino también establecer una conexión genuina con sus clientes.
          </p>
      </>,
      firstImg: "blossom/blossomFirst.webp",
      mainImg: "blossom/blossomMain.webp",
      endImg: "blossom/blossomEnd.webp",
    },
    {
      id: 2,
      name: "Cinturon Endless",
      tittle: "Cinturon Endless",
      description: 
      <div className="text-base">
        <p>
          En este proyecto trabajamos con Endless, una marca de ropa que se encontraba lanzando un exclusivo cinturón al mercado. Nuestro objetivo fue crear contenido visual que destacara la calidad y el diseño del producto, posicionándolo como un accesorio esencial en su categoría.
        </p>
        <h2 className="font-semibold text-lg mt-4">Qué hicimos:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Videos de lanzamiento:</strong> Creamos animaciones dinámicas en 3D que mostraron cada detalle del cinturón desde ángulos estratégicos, resaltando su diseño, materiales y estilo. Estas piezas fueron pensadas para generar impacto visual en redes sociales y captar la atención del público.</li>
          <li><strong>Renders:</strong> Diseñamos imágenes de alta calidad para las redes sociales y el e-commerce, asegurando que cada detalle del cinturón destacara, transmitiendo calidad y elegancia en cada toma.</li>
        </ul>
      </div>,
      secondTittle: "Resultados:",
      secondDescription: 
      <>
        <p>
          Este paquete de contenido permitió a Endless lanzar su producto con una presencia visual profesional y atractiva, generando interés inmediato en su audiencia y posicionando el cinturón como un accesorio de alto valor percibido.
        </p>
        <p>
          Si estás buscando contenido visual que impulse tus lanzamientos y eleve tu marca, ¡contáctanos! 🚀
        </p>
      </>,
      firstImg: "endless/endlessFirst.webp",
      mainImg: "endless/endlessMain.webp",
      endImg: "endless/endlessEnd.webp",
    },
    {
      id: 3,
      name: "PC",
      tittle: "PC",
      description: 
      <div className="text-base">
        <p>
          En este proyecto, desarrollamos un conjunto de contenido visual enfocado en resaltar la sofisticación y el diseño de componentes de PC, desde su ensamblaje hasta su presentación final, ideal para empresas tecnológicas que buscan promocionar sus productos de manera impactante.
        </p>
        <h2 className="font-semibold text-lg mt-4">Qué hicimos:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Video promocional:</strong> Creamos una animación, utilizando transiciones fluidas y satisfactorias que capturaron la atención del espectador.</li>
          <li><strong>Renders estáticos:</strong> Diseñamos imágenes de alta resolución, resaltando calidad y diseño.</li>
          <li><strong>Renders en PNG:</strong> Generamos imágenes sin fondo de cada componente para ser utilizadas en plataformas de e-commerce, optimizando su presentación.</li>
        </ul>
      </div>,
      secondTittle: "Resultados:",
      secondDescription: 
        <>
        <p>
          El contenido final logró transmitir innovación y calidad, ideal para empresas que desean destacarse en el competitivo mercado de la tecnología. Este proyecto es un claro ejemplo del poder del 3D para elevar la percepción de valor y conectar con clientes a través de experiencias visuales memorables.
        </p>
        <p>
          Si buscas contenido que haga destacar tu marca en el sector tecnológico, ¡hablemos! 🚀
        </p>
      </>,
      firstImg: "pc/pcFirst.webp",
      mainImg: "pc/pcMain.webp",
      endImg: "pc/pcEnd.webp",
    },
    {
      id: 4,
      name: "Rack",
      tittle: "Rack",
      description:
      <>
        <p>En este proyecto, exploramos cómo transmitir la flexibilidad y funcionalidad de una estantería modular diseñada para adaptarse a diferentes necesidades y espacios.</p>
        <p>La pieza clave del producto es su capacidad para expandirse agregando módulos, permitiendo personalizar su tamaño y diseño.</p>
      </>,
      secondTittle: "Propuesta visual y objetivos",
      secondDescription:
      <>
        <p>Nuestra propuesta visual incluyó:</p>
        <ul className='mt-4'>
          <li><strong>Renders versátiles:</strong> Mostramos el producto en diversos ambientes, destacando su capacidad para integrarse en distintos estilos.</li>
          <li><strong>Video presentación:</strong> Diseñamos un video dinámico que narra el ciclo completo del producto.</li>
        </ul>
        <p>Este proyecto demostró cómo el 3D puede ser una herramienta poderosa para comunicar la innovación detrás de un producto.</p>
      </>,
      firstImg: "rack/rackFirst.webp",
      mainImg: "rack/rackMain.webp",
      endImg: "rack/rackEnd.webp",
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
          <p className='font-semibold text-xs sm:text-lg w-full opacity-70 sm:mt-5 mt-2'>
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
          <p className='font-semibold sm:text-xl text-xs w-full opacity-70 sm:mt-5 mt-2'>
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