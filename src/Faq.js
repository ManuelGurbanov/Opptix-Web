import React, { useState } from 'react';
import { translate } from './Translations'; // Asegúrate de importar la función de traducción

const Faq = ({language}) => {
  const [faqs, setFaqs] = useState([
    {
      key: '1', // Usamos una clave para poder traducir dinámicamente
      isOpen: true,
    },
    {
      key: '2',
      isOpen: false,
    },
    {
      key: '3',
      isOpen: false,
    },
    {
      key: '4',
      isOpen: false,
    },
    {
      key: '5',
      isOpen: false,
    },
    {
      key: '6',
      isOpen: false,
    },
    {
      key: '7',
      isOpen: false,
    },
    {
      key: '8',
      isOpen: false,
    },
    {
      key: '9',
      isOpen: false,
    },
    {
      key: '10',
      isOpen: false,
    },
    {
      key: '11',
      isOpen: false,
    },
    {
      key: '12',
      isOpen: false,
    },
    {
      key: '13',
      isOpen: false,
    },
  ]);

  const [visibleCount, setVisibleCount] = useState(5);

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

  const showMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 5, faqs.length));
  };

  const showLess = () => {
    setVisibleCount(prevCount => Math.max(prevCount - 5, 5));
  };

  return (
    <div className="w-full text-black sm:p-24 p-5">
      <h1 className='mb-10 font-semibold text-left text-3xl'>{translate('faqTitle', language)}</h1>
      <section className='w-full min-h-full flex flex-col sm:flex-row items-start justify-center gap-5'>
        <div className='w-full h-full'>
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div
              key={index}
              className='p-4 my-2 rounded-lg cursor-pointer flex flex-col items-start'
              onClick={() => toggleFaq(index)}
              data-aos="fade-right" data-aos-delay="50"
            >
              <div className="font-bold text-left flex">
                <img
                  className='h-full m-auto mr-2'
                  src={faq.isOpen ? '/arrow_down.png' : '/arrow_right.png'}
                  alt={faq.isOpen ? "Flecha hacia abajo" : "Flecha hacia derecha"}
                />
                {translate('faq' + faq.key, language)}
              </div>
              {faq.isOpen && <div className="mt-2 ml-10 text-left sm:w-1/2">{translate(`answer${faq.key}`, language)}</div>}
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-start gap-4 mt-1">
        {visibleCount > 5 && (
          <button
            onClick={showLess}
            className="px-4 py-2 text-black underline rounded hover:scale-105 transition ease-in cursor-pointer duration-75"
          >
            {translate('showLess', language)}
          </button>
        )}
        {visibleCount < faqs.length && (
          <button
            onClick={showMore}
            className="px-4 py-2 text-black underline rounded hover:scale-105 transition ease-in cursor-pointer duration-75"
          >
           {translate('showMore', language)}
          </button>
        )}
      </div>
    </div>
  );
};

export default Faq;
