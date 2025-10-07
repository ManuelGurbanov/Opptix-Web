import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Selector from './Selector';
import { translate } from "./Translations";
import { useState } from 'react';

import { useLanguage } from './LanguageContext';

function CaseStudiePage() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const caseName = searchParams.get("case") || "Rumi";

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Lanuage: " + language);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (mediaSrc, index) => {
    if (!actualCase.media) console.log("NOT ACTUALCASE.MEDIA");
    if (!index) console.log("NOT INDEX!!!");
    setIsVideo(/\.mp4|\.webm|\.ogg|\.mkv$/i.test(mediaSrc));
    setSelectedMedia(mediaSrc);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
    setIsVideo(false);
  };

  const handleNext = () => {
    if (!actualCase.media || actualCase.media.length === 0) return;
    const nextIndex = (currentIndex + 1) % actualCase.media.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(actualCase.media[nextIndex]);
    setIsVideo(/\.mp4|\.webm|\.ogg|\.mkv$/i.test(actualCase.media[nextIndex]));
  };

  const handlePrev = () => {
    if (!actualCase.media || actualCase.media.length === 0) return;
    const prevIndex = (currentIndex - 1 + actualCase.media.length) % actualCase.media.length;
    setCurrentIndex(prevIndex);
    setSelectedMedia(actualCase.media[prevIndex]);
    setIsVideo(/\.mp4|\.webm|\.ogg|\.mkv$/i.test(actualCase.media[prevIndex]));
  };

  const cases = [
        {
  id: 5,
  name: "Rumi",
  tittle: "Rumi",
  description: (
    <div className="text-lg">
      <p>
        Este proyecto implicó el desarrollo completo de una experiencia interactiva en 3D con realidad aumentada para Rumi, desde el modelado hasta la integración web.
      </p>
      <h2 className="font-semibold text-lg mt-4">Qué hicimos:</h2>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>Modelado 3D detallado:</strong> Creamos modelos tridimensionales precisos de los productos Rumi, capturando cada detalle de forma, proporción y características distintivas.</li>
        <li><strong>Optimización para web:</strong> Redujimos el peso de los modelos sin comprometer la calidad visual, asegurando tiempos de carga rápidos y una experiencia fluida en diferentes dispositivos.</li>
        <li><strong>Integración de realidad aumentada:</strong> Implementamos tecnología AR directamente en el sitio web de Rumi, permitiendo a los usuarios visualizar los productos en su propio espacio antes de comprar.</li>
      </ul>
    </div>
  ),
  
  secondTittle: "Resultados:",
  
  secondDescription: (
    <div className="text-lg">
      <p>
        La integración de AR transformó la experiencia de compra online, aumentando la confianza del usuario y reduciendo la incertidumbre sobre cómo lucirían los productos en su hogar.
      </p>
      <p>
        Este proyecto demuestra cómo la tecnología 3D y AR pueden revolucionar el e-commerce, ofreciendo una experiencia inmersiva que cierra la brecha entre lo digital y lo físico. 🎯
      </p>
    </div>
  ),
  
  enDescription: (
    <div className="text-lg">
      <p>
        This project involved the complete development of an interactive 3D experience with augmented reality for Rumi, from modeling to web integration.
      </p>
      <h2 className="font-semibold text-lg mt-4">What we did:</h2>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>Detailed 3D modeling:</strong> We created precise three-dimensional models of Rumi products, capturing every detail of shape, proportion, and distinctive features.</li>
        <li><strong>Web optimization:</strong> We reduced model file sizes without compromising visual quality, ensuring fast loading times and smooth experience across different devices.</li>
        <li><strong>Augmented reality integration:</strong> We implemented AR technology directly on Rumi's website, allowing users to visualize products in their own space before purchasing.</li>
      </ul>
    </div>
  ),
  
  enSecondTittle: "Results:",
  
  enSecondDescription: (
    <div className="text-lg">
      <p>
        The AR integration transformed the online shopping experience, increasing user confidence and reducing uncertainty about how products would look in their home.
      </p>
      <p>
        This project demonstrates how 3D and AR technology can revolutionize e-commerce, offering an immersive experience that bridges the gap between digital and physical. 🎯
      </p>
    </div>
  ),
  
  media: [
    "rumi/uno.webp",
    "rumi/dos.webp",
    "rumi/rumi_bg.webp",
    "rumi/cuatro.webp",
    "rumi/cinco.webp",
  ]
},{
    id: 6,
    name: "Casa Zorba",
    tittle: "Casa Zorba",
    description: (
      <div className="text-lg">
        <p>
          En este proyecto trabajamos en la creación de <strong>10 modelos 3D completamente desarrollados desde cero</strong>, con el objetivo de representar de manera precisa y atractiva la identidad visual de la marca. Cada modelo fue diseñado con un alto nivel de detalle, replicando fielmente las proporciones, materiales y terminaciones de los productos originales.
        </p>
        <p className="mt-4">
          Además, integramos una experiencia de <strong>realidad aumentada</strong> dentro de la plataforma de <strong>Tiendanube</strong>, permitiendo a los usuarios explorar los productos directamente desde sus dispositivos móviles y visualizar cómo lucen en su entorno real. Esto no solo mejoró la interacción del cliente con la marca, sino que también fortaleció la percepción de calidad e innovación de Casa Zorba.
        </p>
      </div>
    ),
    secondDescription: (
      <div className="text-lg">
        <h2 className="font-semibold text-lg mt-4">Qué hicimos:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Modelado 3D desde cero:</strong> Creamos diez modelos tridimensionales basados en referencias reales, garantizando una correspondencia exacta con los productos originales de la marca.</li>
          <li><strong>Texturizado y materiales realistas:</strong> Aplicamos técnicas avanzadas de iluminación y materiales para lograr un acabado visual coherente con el estándar de calidad de Casa Zorba.</li>
          <li><strong>Integración en realidad aumentada:</strong> Incorporamos los modelos optimizados en Tiendanube, generando una experiencia inmersiva e interactiva para los usuarios finales.</li>
        </ul>
      </div>
    ),
      media: [
    "cz/uno.webp",
    "cz/dos.webp",
    "cz/tres.webp",
    "cz/cuatro.webp",
    "cz/cinco.webp",
  ]
    },
    {
      id: 2,
      name: "Endless",
      tittle: "Cinturon Endless",
      description: 
      <div className="text-lg">
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
      <div className="text-lg">
        <p>
          Este paquete de contenido permitió a Endless lanzar su producto con una presencia visual profesional y atractiva, generando interés inmediato en su audiencia y posicionando el cinturón como un accesorio de alto valor percibido.
        </p>
        <p>
          Si estás buscando contenido visual que impulse tus lanzamientos y eleve tu marca, ¡contáctanos! 🚀
        </p>
      </div>,
      enDescription: (
        <div className="text-lg">
          <p>
            In this project, we collaborated with Endless, a clothing brand launching an exclusive belt to the market. Our goal was to create visual content that highlighted the product's quality and design, positioning it as an essential accessory in its category.
          </p>
          <h2 className="font-semibold text-lg mt-4">What we did:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Launch videos:</strong> We created dynamic 3D animations showcasing every detail of the belt from strategic angles, emphasizing its design, materials, and style. These pieces were designed to generate visual impact on social media and capture the audience's attention.</li>
            <li><strong>Renders:</strong> We designed high-quality images for social media and e-commerce, ensuring that every detail of the belt stood out, conveying quality and elegance in every shot.</li>
          </ul>
        </div>
      ),
      
      enSecondTittle: "Results:",
      
      enSecondDescription: (
        <div className="text-lg">
          <p>
            This content package allowed Endless to launch its product with a professional and attractive visual presence, generating immediate interest among its audience and positioning the belt as a high-value accessory.
          </p>
          <p>
            If you're looking for visual content to boost your launches and elevate your brand, contact us! 🚀
          </p>
        </div>
      ),
      
      media: [
        "endless/uno.mp4",
        "endless/endlessFirst.webp",
        "endless/tres.webp",
        "endless/cuatro.mp4",
        "endless/cinco.mp4",
      ]
    },
    {
      id: 3,
      name: "Strix",
      tittle: "PC",
      description: 
      <div className="text-lg">
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
        <div className='text-lg'>
        <p>
          El contenido final logró transmitir innovación y calidad, ideal para empresas que desean destacarse en el competitivo mercado de la tecnología. Este proyecto es un claro ejemplo del poder del 3D para elevar la percepción de valor y conectar con clientes a través de experiencias visuales memorables.
        </p>
        <p>
          Si buscas contenido que haga destacar tu marca en el sector tecnológico, ¡hablemos! 🚀
        </p>
      </div>,
      enDescription: (
        <div className="text-lg">
          <p>
            In this project, we developed a set of visual content focused on highlighting the sophistication and design of PC components, from assembly to final presentation—ideal for tech companies looking to promote their products in an impactful way.
          </p>
          <h2 className="font-semibold text-lg mt-4">What we did:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Promotional video:</strong> We created an animation using smooth and satisfying transitions that captured the viewer’s attention.</li>
            <li><strong>Static renders:</strong> We designed high-resolution images, emphasizing quality and design.</li>
            <li><strong>PNG renders:</strong> We generated background-free images of each component to be used on e-commerce platforms, optimizing their presentation.</li>
          </ul>
        </div>
      ),
      
      enSecondTittle: "Results:",
      
      enSecondDescription: (
        <div className="text-lg">
          <p>
            The final content successfully conveyed innovation and quality, making it ideal for companies wanting to stand out in the competitive tech market. This project is a clear example of how 3D can enhance perceived value and connect with customers through memorable visual experiences.
          </p>
          <p>
            If you're looking for content that makes your brand shine in the tech sector, let's talk! 🚀
          </p>
        </div>
      ),
      
      media: [
        "pc/uno.mp4",
        "pc/dos.webp",
        "pc/tres.mp4",
        "pc/cuatro.webp",
        "pc/cinco.webp",
        "pc/01.webp",
        "pc/01-Y-02.mp4",
        "pc/02.webp",
        "pc/02 (1).webp",
        "pc/03.webp",
        "pc/04.webp",
        "pc/05.webp",
        "pc/06.webp",
        "pc/06 (1).webp",
        "pc/07.jpg",
        "pc/07.webp",
        "pc/08.webp",
        "pc/08 (1).webp",
        "pc/09.webp",
        "pc/10.webp",
        "pc/11.webp",
        "pc/12.webp",
        "pc/pcEnd.webp",
        "pc/pcFirst.webp",
        "pc/pcMain.webp"
      ]
      
    
    },
    {
      id: 4,
      name: "Rack",
      tittle: "Rack",
      description: (
        <div className='text-lg'>
          <p>
            En este proyecto, exploramos cómo transmitir la flexibilidad y funcionalidad de una estantería modular diseñada para adaptarse a diferentes necesidades y espacios. La pieza clave del producto es su capacidad para expandirse agregando módulos, permitiendo personalizar su tamaño y diseño.
          </p>
          <h2 className="font-semibold text-lg mt-4">Nuestra propuesta visual incluyó:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Renders versátiles:</strong> Mostramos el producto en diversos ambientes, destacando su capacidad para integrarse en distintos estilos. También representamos sus variaciones de color y combinaciones de módulos para resaltar su adaptabilidad.
            </li>
            <li>
              <strong>Video presentación:</strong> Diseñamos un video dinámico que narra el ciclo completo del producto. Desde su sencillo ensamblaje hasta su fácil almacenamiento desarmado en una caja compacta, pasando por un despliegue atractivo de sus variantes y configuraciones posibles.
            </li>
          </ul>
        </div>
      ),
      
      secondDescription: (
        <div className='text-lg'>
          <h2 className="font-semibold text-lg mt-4">Este proyecto tenía como objetivo:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Comunicar la practicidad del producto:</strong> El contenido mostró de manera clara y efectiva cómo el diseño modular facilita la personalización, optimizando tanto su funcionalidad como su almacenamiento.
            </li>
            <li>
              <strong>Destacar la estética del producto:</strong> Los renders y el video presentaron el mueble en situaciones reales y con acabados visuales de alta calidad, reforzando la percepción de valor del diseño.
            </li>
            <li>
              <strong>Generar confianza en la audiencia:</strong> Al mostrar en detalle cómo funciona y se adapta, eliminamos dudas y ayudamos a los clientes potenciales a visualizar el producto en sus propios espacios.
            </li>
          </ul>
          <p className="mt-4">
            Este proyecto demostró cómo el 3D puede ser una herramienta poderosa para comunicar la innovación detrás de un producto, posicionándolo no solo como funcional, sino como una solución práctica y moderna para cualquier entorno.
          </p>
        </div>
      ),

      enDescription: (
        <div className='text-lg'>
          <p>
            In this project, we explored how to convey the flexibility and functionality of a modular shelving unit designed to adapt to different needs and spaces. The key feature of this product is its ability to expand by adding modules, allowing users to customize its size and design.
          </p>
          <h2 className="font-semibold text-lg mt-4">Our visual approach included:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Versatile renders:</strong> We showcased the product in various environments, highlighting its ability to blend into different styles. We also represented its color variations and module combinations to emphasize its adaptability.
            </li>
            <li>
              <strong>Presentation video:</strong> We created a dynamic video that narrates the complete product lifecycle. From its easy assembly to its compact storage when disassembled, we showcased an attractive display of its variants and possible configurations.
            </li>
          </ul>
        </div>
      ),
      
      enSecondDescription: (
        <div className='text-lg'>
          <h2 className="font-semibold text-lg mt-4">This project aimed to:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Communicate the product's practicality:</strong> The content clearly and effectively demonstrated how the modular design facilitates customization, optimizing both its functionality and storage.
            </li>
            <li>
              <strong>Highlight the product’s aesthetics:</strong> The renders and video presented the furniture in real-life situations with high-quality visual finishes, reinforcing the perceived value of the design.
            </li>
            <li>
              <strong>Build trust with the audience:</strong> By showcasing in detail how it works and adapts, we eliminated doubts and helped potential customers visualize the product in their own spaces.
            </li>
          </ul>
          <p className="mt-4">
            This project demonstrated how 3D can be a powerful tool for communicating the innovation behind a product, positioning it not only as functional but also as a practical and modern solution for any environment.
          </p>
        </div>
      ),
      
      
      secondTittle: "Propuesta visual y objetivos",
      media: [
        "rack/uno.mp4",
        "rack/dos.webp",
        "rack/tres.webp",
        "rack/cuatro.webp",
        "rack/cinco.webp",
        "rack/01.mp4",
        "rack/01-ai.webp",
        "rack/rackEnd.webp",
        "rack/rackFirst.webp",
        "rack/rackMain.webp",
        "rack/tres-1.webp"
      ]
      
    },
  ];

  // Buscar el caso actual por nombre
  const actualCase = cases.find((c) => c.name === caseName) || cases[0];

  const MediaRenderer = ({ src, onClick, index }) => {
    const isMediaVideo = /\.mp4|\.webm|\.ogg|\.mkv$/i.test(src);
    
    return isMediaVideo ? (
      <div className="w-full h-full flex items-center justify-center cursor-pointer">
        <video
          src={src}
          className="w-full sm:h-[1920] object-cover mt-4"
          muted
          loop
          autoPlay
          playsInline
          onClick={() => onClick(src, index)}
        />
      </div>
    ) : (
      <div className="w-full h-full flex items-center justify-center cursor-pointer">
        <img
          src={src}
          className="w-full sm:h-[1920] object-cover mt-4"
          onClick={() => onClick(src, index)}
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
            {actualCase.media.slice(0, 2).map((src, index) => (
              <MediaRenderer key={index} src={src} index={index} onClick={openModal} />
            ))}
          </aside>


        </div>

        <MediaRenderer src={actualCase.media[2]} index={2} onClick={openModal} />
      </header>

      <div className='w-full h-full sm:min-h-[500px] p-8 py-0 gap-4 flex sm:flex-row flex-col items-start justify-center'>

        <aside className='flex items-center justify-center sm:w-[50%] h-full gap-2'>
        {actualCase.media.slice(3, 5).map((src, index) => (
            <MediaRenderer key={index} src={src} index={index + 3} onClick={openModal} />
          ))}
        </aside>

        <section className='sm:w-[50%] w-full h-full sm:p-8 p-2 flex flex-col sm:items-end items-center justify-center'>
          <p className='font-semibold text-xs w-full opacity-70'>
            {language == "es" ? actualCase.secondDescription : actualCase.enSecondDescription}
          </p>
        </section>


      </div>

{modalOpen && (
  <div
    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50 p-8"
    onClick={closeModal} // Solo cierra el modal si se hace click en el fondo
  >
    <div
      className="w-screen h-full flex items-center justify-center"
    >
      {/* Botón izquierdo - posicionado absolutamente */}
      <button
        onClick={(e) => {e.stopPropagation();
          handlePrev();
        }}
        className="absolute sm:left-8 left-1 top-1/2 transform -translate-y-1/2 text-6xl font-semibold text-white p-4 hover:scale-110 transition duration-75"
      >
        &#60;
      </button>

      {/* Contenido central */}
      {isVideo ? (
        <video
          src={selectedMedia}
          className="min-h-64 min-w-64 max-w-[75vw] max-h-[75vh]"
          autoPlay
          controls
        />
      ) : (
        <img
          src={selectedMedia}
          className="min-h-64 min-w-64 max-w-[75vw] max-h-[75vh]"
        />
      )}

      {/* Botón derecho - posicionado absolutamente */}
      <button
        onClick={(e) => {e.stopPropagation();
          handleNext();
        }}
        className="absolute sm:right-8 right-1 top-1/2 transform -translate-y-1/2 text-6xl font-semibold text-white p-4 hover:scale-110 transition duration-75"
      >
        &#62;
      </button>
    </div>
  </div>
)}

    </section>
  );
}

export default CaseStudiePage;
