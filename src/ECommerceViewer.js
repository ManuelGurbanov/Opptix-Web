import React, { useState } from 'react';
import ContractButton from './ContractButton';
import { translate } from './Translations';
import DataBlock from './DataBlock';
export default function ECommerceViewer({language}) {
    const [selectedModel, setSelectedModel] = useState(1);

    const modelPath = (num) => `/models/ecommerce/silla-${num}.glb`;
    const imagePath = (num) => `/models/ecommerce/${num}.png`;

    return (

        
<div className='flex flex-col items-center justify-center w-screen min-h-screen p-12 py-4'>
        <header className='w-full flex items-center justify-between gap-4 min-h-[30vh]'>
          <div className='flex flex-col w-full'>
            <h1 className='w-full text-left text-[60px]'>
                {translate("ecommerceTittle", language)}
            </h1>
            <p className='w-full font-light text-left'>
            {translate("ecommerceText", language)}
            </p>
          </div>
          <div className='flex items-start justify-end w-full h-14'>
          <ContractButton language={language}/>
          </div>
        </header>

         <section className="flex flex-col items-center flex-1">
                <model-viewer
                    src={modelPath(selectedModel)}
                    poster={imagePath(selectedModel)}
                    shadow-intensity="1"
                    ar
                    camera-controls
                    touch-action="pan-y"
                    alt={`3D model of chair ${selectedModel}`}
                    style={{
                        width: "50vw",
                        height:  "70vh",
                        minHeight: "250px",
                        "@media (max-width: 700px)": { width: "100vw" },
                        position: "relative",
                    }}
                >
                </model-viewer>

                <div className="flex gap-2 mt-4">
                    {[...Array(10)].map((_, index) => {
                        const num = index + 1;
                        return (
                            <button
                                key={num}
                                onClick={() => setSelectedModel(num)}
                                className={`w-16 h-16 bg-cover border-2 rounded transition ${
                                    selectedModel === num ? "border-blue-500 scale-110" : "border-gray-300"
                                }`}
                                style={{ backgroundImage: `url(${imagePath(num)})` }}
                            />
                        );
                    })}
                </div>
        </section>

        <div className="flex flex-col items-center justify-center w-screen gap-4 justify-self-start mt-12 mb-12">
            <DataBlock data1="data1Anim" data2="data2Anim" data3="data3Anim" language={language}/>
        </div>
</div>


    );
}
