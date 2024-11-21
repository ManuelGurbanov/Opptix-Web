import React, { useState } from 'react';

function Configurator({ color, setColor, showAccesory, setShowAccesory, scale, setScale, position, setPosition, setTexture, price
 }) {
  const textures = [
    { name: 'Modelo', path: 'Default' }, // Usar "Default" en lugar de null
    { name: 'Red Label', path: '/models/redlabel.webp' },
    { name: 'Black Label', path: '/models/blacklabel.webp' },
  ];
  
  const [selectedTexture, setSelectedTexture] = useState(textures[0].path);

  const handleTextureChange = (e) => {
    const selectedPath = e.target.value;
    setSelectedTexture(selectedPath);

    if (selectedPath) {
      setTexture(selectedPath);
    } else {
      setTexture(null);
    }
  };

  const resetValues = () => {
    setColor('#ffffff');
    setScale(1);
    setPosition([0, 0, 0]);
    setTexture(textures[0].path)
  };

  return (
    <div className="p-4 bg-gray-900 shadow-lg rounded-lg sm:space-y-4 z-10 sm:h-screen">
      <h3 className="text-lg font-bold text-white">Configurador de Color</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-16 h-16 cursor-pointer rounded-full border-2 border-gray-700"
      />
      <p className="text-gray-400">Color actual: <span style={{ color }}>{color}</span></p>

      <button
        onClick={() => setShowAccesory(!showAccesory)}
        className="mt-4 p-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        {showAccesory ? 'Ocultar Accesorio' : 'Mostrar Accesorio'}
      </button>

      <button
        onClick={resetValues}
        className="mt-4 p-2 w-full bg-red-600 hover:bg-red-700 text-white rounded-md"
      >
        Reiniciar Valores
      </button>

      <div className="mt-4">
        <label className="text-white">Escala: </label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.01"
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
          className="w-full mt-2"
        />
        <p className="text-white font-bold">{scale.toFixed(2)}</p>
      </div>

      <div className="mt-4">
        <label className="text-white">Posición: </label>
        <div className="flex gap-4 mt-2">
          <input
            type="number"
            value={position[0]}
            onChange={(e) => setPosition([parseFloat(e.target.value), position[1], position[2]])}
            className="w-1/3 p-2 bg-gray-800 text-white border-2 border-gray-700"
          />
          <input
            type="number"
            value={position[1]}
            step={0.01}
            onChange={(e) => setPosition([position[0], parseFloat(e.target.value), position[2]])}
            className="w-1/3 p-2 bg-gray-800 text-white border-2 border-gray-700"
          />
          <input
            type="number"
            value={position[2]}
            onChange={(e) => setPosition([position[0], position[1], parseFloat(e.target.value)])}
            className="w-1/3 p-2 bg-gray-800 text-white border-2 border-gray-700"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-white">Textura: </label>
        <select
          value={selectedTexture}
          onChange={handleTextureChange}
          className="w-full p-2 bg-gray-800 text-white border-2 border-gray-700 mt-2"
        >
          {textures.map((texture, index) => (
            <option key={index} value={texture.path}>
              {texture.name}
            </option>
          ))}
        </select>
      </div>
      <h1 className='text-white font-bold text-4xl mt-5'>${price}</h1>
      {showAccesory && <h1 className='text-gray-300 opacity-30 font-bold text-2xl mt-1 italic'>+$250 - Accesorio</h1>}
    </div>
  );
}

export default Configurator;
