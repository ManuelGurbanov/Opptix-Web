import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Selector({ cases }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const caseName = searchParams.get("case") || cases[0].name;

  const handleCaseChange = (caseName) => {
    setSearchParams({ case: caseName });
  };

  return (
    <div className="flex justify-center items-center p-4 bg-white bg-opacity-100 text-black gap-4 h-[8vh] z-50 min-w-[40vw] sm:w-[50vw] w-screen m-0 ring-1 ring-zinc-300 rounded-lg mt-4 absolute sm:top-20 bottom-6">
      {cases.map((caseItem) => (
        <button
          onClick={() => handleCaseChange(caseItem.name)}
          key={caseItem.id}
          className={`hover:scale-105 text-xs text-center w-full transition ease-in cursor-pointer duration-75  ${
            caseName === caseItem.name ? "text-black font-bold" : "opacity-60"
          }`}
        >
          {caseItem.tittle}
        </button>
      ))}
    </div>
  );
}

export default Selector;
