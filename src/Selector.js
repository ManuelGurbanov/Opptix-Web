import React, { useState } from 'react';

function Selector({actualCase, setActualCase, cases}) {
  return (
    <>
      <div className="flex justify-center items-center p-4 bg-gray1 text-black gap-12 h-[10vh] z-50 min-w-[40vw] rounded-3xl m-0 ring-1 ring-black fixed bottom-4">
        {cases.map((caseItem, index) => (
          <button
            onClick={() => setActualCase(caseItem.id)}
            key={index}
            className={`hover:scale-105 transition ease-in cursor-pointer duration-75 hidden md:block ${
              actualCase === caseItem.id ? "opacity-100" : "opacity-60"
            }`}
          >
            {caseItem.tittle}
          </button>
        ))}
      </div>
    </>
  );
}

export default Selector;
