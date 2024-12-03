import React, { useState } from 'react';

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor neque eu elit lacinia, non sollicitudin elit scelerisque.",
      isOpen: false,
    },
    {
      question: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
      isOpen: false,
    },
    {
      question: "Ut enim ad minim veniam?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isOpen: false,
    },
    {
      question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      isOpen: false,
    },
    {
      question: "Excepteur sint occaecat cupidatat non proident?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      <section className='w-full h-full flex flex-col sm:flex-row items-start justify-center gap-5'>
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
        <div className='w-full h-full rounded-lg bg-zinc-500 flex items-center justify-center aspect-square'>
        </div>
      </section>
    </div>
  );
};

export default Faq;