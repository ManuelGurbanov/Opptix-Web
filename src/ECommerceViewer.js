import React, { useState } from 'react';
import ContractButton from './ContractButton';
import { translate } from './Translations';
import DataBlock from './DataBlock';
import SeeButton from './SeeInYourSpace';

export default function ECommerceViewer({language}) {
    const [selectedModel, setSelectedModel] = useState(1);

    const modelPath = (num) => `/models/ecommerce/silla-${num}.glb`;
    const imagePath = (num) => `/models/ecommerce/${num}.png`;
    const qrPath = (num) => `/qrcodes/ecommerce/silla-${num}.png`;

    return (

        
<div className='relative flex flex-col items-center justify-start w-full sm:p-12 p-2 py-4'>

        <header className='w-full flex items-start justify-between gap-4 sm:min-h-[20vh] relative'>
          <div className='flex flex-col w-full'>
            <h1 className='sm:text-[60px] text-2xl mb-3 text-left w-full'>
                {translate("ecommerceTittle", language)}
            </h1>
            <p className='w-full font-light text-left'>
            {translate("ecommerceText", language)}
            </p>
          </div>
          <div className='flex items-start justify-end w-full h-14 sm:relative absolute top-1 right-3'>
          <ContractButton language={language}/>
          </div>
        </header>

         <section className="flex flex-col items-center flex-1 relative">
                <model-viewer
                    src={modelPath(selectedModel)}
                    poster={imagePath(selectedModel)}
                    shadow-intensity="1"
                    ar
                    camera-controls
                    touch-action="pan-y"
                    alt={`3D model of chair ${selectedModel}`}
                    style={{
                        width: "80vw",
                        height:  "50vh",
                        minHeight: "250px",
                        "@media (max-width: 700px)": { width: "100vw" },
                        position: "relative",
                    }}
                >
                </model-viewer>

                <div className="absolute top-0 right-8 hidden sm:block">
                    <SeeButton language={language} qrCode={qrPath(selectedModel)} />
                </div>

                <div className="sm:flex grid grid-cols-5 gap-2 mt-4">
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
