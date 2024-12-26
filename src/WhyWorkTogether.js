import React, { useState } from 'react';
import { translate } from "./Translations"; 

function WhyWorkTogether({ language }) {
  const reasons = [
    {
      id: 0,
      reason: "Potencia tus ventas +40%"
    },
    {
      id: 1,
      reason: "Reducción de devoluciones +66%"
    },
    {
      id: 2,
      reason: "Eleva la percepción de tu marca"
    },
    {
      id: 3,
      reason: "Contenido visual consistente a lo largo del tiempo"
    },
    {
      id: 4,
      reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
    },
    {
      id: 5,
      reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const reasonsPerPage = 4; 
  const totalPages = Math.ceil(reasons.length / reasonsPerPage);

  const goToNextPage = () => {
    if (currentIndex + reasonsPerPage < reasons.length) {
      setCurrentIndex(currentIndex + reasonsPerPage);
    }
  };

  const goToPreviousPage = () => {
    if (currentIndex - reasonsPerPage >= 0) {
      setCurrentIndex(currentIndex - reasonsPerPage);
    }
  };

  return (
    <div className='w-screen bg-white text-black flex flex-col items-center justify-center'>
      <img src='img/icon.webp' className='w-12'></img>
      <h1 className='font-bold text-xl w-full text-center mt-3 mb-3'>
        {translate("workTogether", language)}
      </h1>
      <section className="flex items-center w-full p-8 gap-8 justify-between">
        <button
          onClick={goToPreviousPage}
          className="text-black p-2 rounded-full hidden sm:block"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        <div className="flex overflow-x-auto gap-8">
          {reasons
            .slice(currentIndex, currentIndex + reasonsPerPage)
            .map((reason) => (
              <div key={reason.id} className='mt-2 mb-2 text-center lightblueGradient shadow-sm shadow-black rounded-lg p-5 w-96 h-36 flex items-center justify-center text-black font-medium text-xl'>
                {reason.reason}
              </div>
            ))}
        </div>

        <button
          onClick={goToNextPage}
          className="text-black p-2 rounded-full hidden sm:block"
          disabled={currentIndex + reasonsPerPage >= reasons.length}
        >
          &gt;
        </button>
      </section>
    </div>
  );
}

export default WhyWorkTogether;
