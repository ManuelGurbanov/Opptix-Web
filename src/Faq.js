import React, { useState } from 'react';

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "¿Qué soluciones ofrece Opptix 3D para mejorar las ventas y el marketing de productos?",
      answer: "En Opptix 3D creamos contenido visual innovador como configuradores de productos interactivos, realidad aumentada (AR) y animaciones de producto. Estas herramientas transforman la experiencia del cliente, aumentando la conversión y mejorando el engagement en plataformas digitales.",
      isOpen: false,
    },
    {
      question: "¿Cómo funciona la realidad aumentada (AR) en mi e-commerce?",
      answer: "Nuestra tecnología de realidad aumentada permite a los clientes visualizar productos en sus espacios reales usando la cámara de sus dispositivos móviles. Esto no solo genera confianza en la compra, sino que también reduce devoluciones al alinear las expectativas con la realidad.",
      isOpen: false,
    },
    {
      question: "¿Qué tipo de productos pueden beneficiarse de configuradores 3D?",
      answer: "Los configuradores 3D son ideales para productos personalizables como muebles, bicicletas, joyería, relojes, electrodomésticos y más. Si tu producto tiene variantes de color, tamaño, material o accesorios, un configurador 3D puede mejorar la experiencia del cliente y aumentar las VENTAS.",
      isOpen: false,
    },
    {
      question: "¿Cuál es el proceso de creación de un modelo 3D de mi producto?",
      answer: "Nuestro proceso incluye: Recolección de información (imágenes, planos técnicos o muestras físicas). Modelado 3D con atención al detalle y precisión. Revisión y ajustes en conjunto contigo. Optimización para diferentes usos, como e-commerce, redes sociales y campañas de marketing.",
      isOpen: false,
    },
    {
      question: "¿Por qué elegir modelos 3D en lugar de fotografía tradicional?",
      answer: "Los modelos 3D permiten: Mostrar productos desde todos los ángulos. Realizar cambios rápidos sin necesidad de repetir sesiones fotográficas. Crear contenido interactivo y atractivo. Reducir costos en fotografía y producción a largo plazo.",
      isOpen: false,
    },
    {
      question: "¿Puedo usar los modelos 3D y las animaciones en redes sociales y campañas publicitarias?",
      answer: "¡Por supuesto! Todos nuestros contenidos están optimizados para múltiples plataformas, como redes sociales, sitios web, e-commerce y campañas de publicidad. Diseñamos contenido versátil para maximizar el impacto en tu estrategia de marketing digital.",
      isOpen: false,
    },
    {
      question: "¿Cuánto tiempo toma desarrollar configuradores 3D, modelos o animaciones?",
      answer: "El tiempo depende de la complejidad del proyecto. Por ejemplo: Configuradores 3D: 2-4 semanas. Animaciones 3D: 1-2 semanas. Renders de alta calidad: 3-5 días. Siempre trabajamos para ofrecer soluciones rápidas sin comprometer la calidad.",
      isOpen: false,
    },
    {
      question: "¿Cómo puedo implementar los modelos 3D en mi sitio web?",
      answer: "Utilizamos iframes para incrustar modelos 3D y configuradores directamente en cualquier plataforma web, sin ralentizar el sitio ni requerir desarrollos costosos. Además, nuestro equipo técnico asegura una integración eficiente y sin complicaciones.",
      isOpen: false,
    },
    {
      question: "¿Qué diferencia a Opptix 3D de otras agencias de contenido visual?",
      answer: "No solo creamos contenido, sino que diseñamos experiencias. Nuestro enfoque está en destacar las características más importantes de tus productos, usando tecnología avanzada para maximizar la percepción de calidad y aumentar las ventas. Trabajamos codo a codo contigo para garantizar resultados personalizados y efectivos.",
      isOpen: false,
    },
    {
      question: "¿Cómo pueden las soluciones 3D reducir las tasas de devolución en e-commerce?",
      answer: "Al ofrecer visualizaciones detalladas, configuradores interactivos y AR, tus clientes tendrán una comprensión clara de los productos antes de comprarlos. Esto reduce malentendidos y alinea expectativas, disminuyendo devoluciones hasta en un 40%.",
      isOpen: false,
    },
    {
      question: "¿Qué incluyen los packs de lanzamiento de producto?",
      answer: "Nuestros packs de lanzamiento están diseñados para maximizar el impacto. Incluyen: Renders 3D en alta calidad. Videos explicativos y comerciales en 3D. Animaciones para redes sociales. Configuradores interactivos para personalización. Todo creado en colaboración contigo para garantizar que tus objetivos se cumplan.",
      isOpen: false,
    },
    {
      question: "¿Cómo miden el impacto de los modelos y configuradores 3D en el rendimiento de mi negocio?",
      answer: "Analizamos métricas como: Incremento en la tasa de conversión. Mayor tiempo de permanencia en el sitio. Reducción en tasas de devolución. Incremento en ventas promedio gracias a configuraciones personalizadas. Compartimos estos datos contigo para que compruebes el valor agregado de nuestras soluciones.",
      isOpen: false,
    },
    {
      question: "¿Qué tan accesibles son los servicios de Opptix 3D para pequeñas y medianas empresas?",
      answer: "Diseñamos soluciones adaptadas a diferentes presupuestos y necesidades. Ya sea que estés comenzando o seas una gran empresa, nuestros servicios ofrecen un retorno de inversión significativo a precios competitivos.",
      isOpen: false,
    },
    {
      question: "¿Qué pasa si no tengo un modelo 3D inicial de mi producto?",
      answer: "¡No te preocupes! Nuestro equipo puede crear el modelo 3D desde cero con imágenes, planos técnicos o incluso descripciones detalladas. Nos encargamos de todo para que obtengas resultados óptimos.",
      isOpen: false,
    },
    {
      question: "¿Cómo puedo empezar a trabajar con Opptix 3D?",
      answer: "Simplemente contáctanos para una llamada inicial o envíanos detalles sobre tu proyecto. Diseñaremos un plan personalizado y te guiaremos paso a paso para implementar soluciones que transformen tu negocio.",
      isOpen: false,
    },
  ]);

  const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
      return faq;
    }));
  };

  return (
    <div className="w-full text-black sm:p-24 p-5">
      <h1 className='mb-10 text-xl font-semibold text-left text-black'>Preguntas Frecuentes</h1>
      <section className='w-full min-h-full flex flex-col sm:flex-row items-start justify-center gap-5'>
        <div className='w-full h-full'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='p-4 my-2 rounded-lg cursor-pointer flex flex-col items-start'
              onClick={() => toggleFaq(index)}
            >

              <div className="font-bold text-left flex">
                <img
                  className='h-full m-auto mr-2'
                  src={faq.isOpen ? '/arrow_down.png' : '/arrow_right.png'}
                  alt={faq.isOpen ? "Flecha hacia abajo" : "Flecha hacia derecha"}
                />
                {faq.question}
              </div>
              {faq.isOpen && <div className="mt-2 ml-10 text-left">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
