import React, { useState } from 'react';

export default function ECommerceViewer() {
    const [selectedModel, setSelectedModel] = useState(1);

    const modelPath = (num) => `/models/ecommerce/silla-${num}.glb`;
    const imagePath = (num) => `/models/ecommerce/${num}.png`;

    return (
<div className='flex items-center justify-center w-screen min-h-screen px-24 py-12'>
    <section className='flex flex-col items-center justify-center flex-1 gap-4'>
        <h1 className='w-full text-4xl font-bold text-left'>E-Commerce</h1>
        <p className='w-full text-lg font-light text-left'>Visualiza tus productos en 3D</p>
    </section>
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
</div>


    );
}
