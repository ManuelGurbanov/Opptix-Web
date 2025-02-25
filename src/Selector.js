import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Selector({ cases }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const caseName = searchParams.get("case") || cases[0].name;

  const handleCaseChange = (caseName) => {
    setSearchParams({ case: caseName });
  };

  return (
    <>
    <div className="flex justify-between items-center p-4 py-2 text-black sm:w-[80vw] w-screen m-0 rounded-lg mt-4">
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
    <hr className="sm:w-[80vw] bg-black h-[2px]" />

    </>
  );
}

export default Selector;
