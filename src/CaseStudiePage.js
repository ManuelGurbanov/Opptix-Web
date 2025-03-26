import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Selector from './Selector';
import { translate } from "./Translations";

function CaseStudiePage({ language }) {
  const [searchParams] = useSearchParams();
  const caseName = searchParams.get("case") || "Briefcases";

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Lanuage: " + language);
  }, []);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const cases = [
    {
      id: 0,
      name: "Headphones",
      tittle: "Headphones",
      description: (
        <>
          <p className='text-lg'>
            Este proyecto tuvo como objetivo explorar y perfeccionar técnicas avanzadas de renderizado y animación en 3D, enfocándonos en lograr un nivel excepcional de calidad visual.
          </p>
          <h2 className="font-semibold text-lg mt-4">Qué hicimos:</h2>
          <ul className="list-disc pl-6 mt-2 text-lg">
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
      media: [
        "headphones/uno.mp4",
        "headphones/dos.png",
        "headphones/tres.jpg",
        "headphones/cuatro.png",
        "headphones/cinco.png",
      ]
    },
    {
      id: 1,
      name: "Blossom",
      tittle: "Blossom",
      description: (
        <>
          <p className="text-base">
            En este proyecto trabajamos junto a <strong>Blossom</strong>, una marca emergente de fragancias premium, con el objetivo de crear un paquete de contenido integral que reflejara la esencia única de cada una de sus fragancias.  
            Nuestro enfoque fue estratégico y personalizado, diseñando piezas visuales impactantes para posicionar la marca en el mercado y conectar emocionalmente con su público objetivo.  
          </p>
          <p className="text-base font-semibold">Para este lanzamiento, desarrollamos:</p>
          <ul className="text-base list-disc pl-4">
            <li><strong>Animaciones 3D:</strong> Videos teaser y presentaciones dinámicas que resaltaron las notas y características de cada fragancia.</li>
            <li><strong>Renders fotorrealistas:</strong> Imágenes en alta resolución que destacaron el diseño de los frascos y el concepto detrás de la marca, ideales para redes sociales y catálogos.</li>
            <li><strong>Contenido e-commerce:</strong> Banners, PNGs y elementos visuales optimizados para su integración en plataformas online, mejorando la experiencia de usuario y aumentando la conversión.</li>
          </ul>
        </>
      ),
      enDescription: (
        <>
          <p className="text-base">
            In this project, we collaborated with <strong>Blossom</strong>, an emerging premium fragrance brand, to create a comprehensive content package that reflects the unique essence of each of its fragrances.  
            Our approach was strategic and tailored, designing impactful visual assets to position the brand in the market and establish an emotional connection with its target audience.  
          </p>
          <p className="text-base font-semibold">For this launch, we developed:</p>
          <ul className="text-base list-disc pl-4">
            <li><strong>3D Animations:</strong> Teaser videos and dynamic presentations that highlighted the notes and characteristics of each fragrance.</li>
            <li><strong>Photorealistic Renders:</strong> High-resolution images showcasing the bottle designs and the brand concept, perfect for social media and catalogs.</li>
            <li><strong>E-commerce Content:</strong> Banners, PNGs, and optimized visual elements for seamless integration into online platforms, enhancing the user experience and boosting conversions.</li>
          </ul>
        </>
      ),
      secondDescription: (
        <p className='text-base'>
          El proyecto estuvo guiado por la necesidad de transmitir los valores de Blossom: elegancia, frescura y autenticidad, asegurando un impacto visual consistente y memorable en todos los puntos de contacto. Este enfoque permitió a la marca no solo posicionarse estratégicamente, sino también establecer una conexión genuina con sus clientes.
        </p>
      ),
      
      
      enSecondDescription: (
        <p className='text-base'>
          The project was guided by the need to convey Blossom's values: elegance, freshness, and authenticity, ensuring a consistent and memorable visual impact across all touchpoints. This approach allowed the brand not only to position itself strategically but also to establish a genuine connection with its customers.
        </p>
      ),

      media: [
        "blossom/uno.mp4",
        "blossom/dos.png",
        "blossom/tres.png",
        "blossom/cuatro.mp4",
        "blossom/cinco.png",
      ]
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
      media: [
        "endless/uno.mp4",
        "endless/dos.jpg",
        "endless/tres.jpg",
        "endless/cuatro.mkv",
        "endless/cinco.mp4",
      ]
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
      media: [
        "pc/uno.mp4",
        "pc/dos.jpg",
        "pc/tres.mp4",
        "pc/cuatro.png",
        "pc/cinco.png",
      ]
    },
    {
      id: 4,
      name: "Rack",
      tittle: "Rack",
      description:
      <>
        <p className='text-lg'>En este proyecto, exploramos cómo transmitir la flexibilidad y funcionalidad de una estantería modular diseñada para adaptarse a diferentes necesidades y espacios.</p>
        <p className='text-lg'>La pieza clave del producto es su capacidad para expandirse agregando módulos, permitiendo personalizar su tamaño y diseño.</p>
        <p className='text-lg'>Nuestra propuesta visual incluyó:</p>
        <ul className='mt-4'>
          <li className='text-lg'><strong>Renders versátiles:</strong> Mostramos el producto en diversos ambientes, destacando su capacidad para integrarse en distintos estilos.</li>
          <li className='text-lg'><strong>Video presentación:</strong> Diseñamos un video dinámico que narra el ciclo completo del producto.</li>
        </ul>
        <p className='text-lg'>Este proyecto demostró cómo el 3D puede ser una herramienta poderosa para comunicar la innovación detrás de un producto.</p>
      </>,
      secondTittle: "Propuesta visual y objetivos",
      secondDescription:
      <>

      </>,
      media: [
        "rack/uno.mp4",
        "rack/dos.jpg",
        "rack/tres.jpg",
        "rack/cuatro.png",
        "rack/cinco.png",
      ]
    },
  ];

  // Buscar el caso actual por nombre
  const actualCase = cases.find((c) => c.name === caseName) || cases[0];

  const MediaRenderer = ({ src, onClick }) => {
    const isVideo = src.match(/\.mp4|\.webm|\.ogg|\.mkv$/i);
  
    return isVideo ? (
      <div className="w-full h-full flex items-center justify-center cursor-pointer">
      <video
        src={src}
        className="w-full sm:h-[500px] object-cover rounded-3xl mt-4"
        muted
        loop
        autoPlay
        onClick={() => onClick(src)}
      />
      </div>
    ) : (
      <div className="w-full h-full flex items-center justify-center cursor-pointer">
        <img
          src={src}
          className="w-full sm:h-[500px] object-cover rounded-3xl mt-4"
          onClick={() => onClick(src)}
        />
      </div>
    );
  };

  return (
    <section className='w-screen h-full flex flex-col items-center justify-center mb-32'>
      <header className='w-full min-h-screen bg-white flex flex-col justify-center items-center text-black sm:p-6 mt-12'>
        <Selector actualCase={actualCase.id} cases={cases} />
        <div className='w-full h-full sm:min-h-[500px] p-8 py-0 gap-4 flex sm:flex-row flex-col items-start justify-center'>

          <section className='sm:w-[50%] w-full sm:p-8 p-2 flex flex-col sm:items-end items-center justify-center'>
            <h1 className='font-semibold text-xl w-full text-left mb-2'>
              {actualCase.name}
            </h1>
            <p className='font-semibold text-[7px] w-full opacity-70'>
              {language === "es" ? actualCase.description : actualCase.enDescription}
            </p>

            <Link
              to="/"
              className='mt-4 bg-zinc-200 p-2 rounded-lg hover:bg-zinc-400 hover:scale-105 transition-all duration-75 flex items-center justify-center'
            >
              Volver
            </Link>
          </section>

          <aside className='flex items-center justify-center sm:w-[50%] h-full gap-2'>
            <MediaRenderer src={actualCase.media[0]} onClick={openModal} />
            <MediaRenderer src={actualCase.media[1]} onClick={openModal} />
          </aside>


        </div>
          <img
            src={actualCase.media[2]}
            className='w-full h-full max-h-[700px] object-cover rounded-3xl mt-4 cursor-pointer'
            onClick={() => openModal(actualCase.firstImg)}
          />
      </header>

      <div className='w-full h-full p-8 py-0 gap-4 flex sm:flex-row flex-col items-start justify-center'>

        <aside className='flex items-center justify-center sm:w-[50%] h-full gap-2'>
          <MediaRenderer src={actualCase.media[3]} onClick={openModal} />
          <MediaRenderer src={actualCase.media[4]} onClick={openModal} />
        </aside>

        <section className='sm:w-[40%] w-full h-full sm:p-8 p-2 flex flex-col sm:items-end items-center justify-center'>
          <p className='font-semibold text-xs w-full opacity-70'>
            {language == "es" ? actualCase.secondDescription : actualCase.enSecondDescription}
          </p>
        </section>


      </div>

      {modalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50' onClick={closeModal}>
          <img src={selectedImage} className='max-w-full max-h-[90vh] rounded-lg' />
        </div>
      )}
    </section>
  );
}

export default CaseStudiePage;
