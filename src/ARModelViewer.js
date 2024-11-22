import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';

const ARModelViewer = ({ modelSrc }) => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = async () => {
      try {
        const materials = modelViewer.model?.materials || [];
        if (materials.length === 0) {
          console.error('No se encontraron materiales en el modelo.');
          return;
        }

        console.log('Materiales encontrados:', materials.map((mat) => mat.name));

        // Función para crear y aplicar una textura a todos los materiales
        const createAndApplyTexture = async (channel, texturePath) => {
          try {
            const texture = await modelViewer.createTexture(texturePath);
            materials.forEach((material) => {
              if (channel.includes('base') || channel.includes('metallic')) {
                material.pbrMetallicRoughness[channel]?.setTexture(texture);
              } else {
                material[channel]?.setTexture(texture);
              }
            });
          } catch (err) {
            console.error('Error al aplicar la textura:', err);
          }
        };

        // Configurar el selector de texturas para cambiar la textura del modelo
        document.querySelector('#diffuse')?.addEventListener('input', (event) => {
          createAndApplyTexture('baseColorTexture', event.target.value);
        });

        // Establecer la textura por defecto al cargar
        createAndApplyTexture('baseColorTexture', '/textures/wood.webp');
      } catch (err) {
        console.error('Error en el evento de carga:', err);
      }
    };

    // Escuchar el evento "load"
    modelViewer.addEventListener('load', handleLoad);

    // Cleanup del evento
    return () => {
      modelViewer.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="relative sm:w-1/2 sm:h-1/2 h-[80vh] w-[80vw] flex sm:flex-row flex-col justify-center items-center bg-gray-100 rounded-xl ring-1 ring-black">
      <model-viewer
        ref={modelViewerRef}
        src={modelSrc}
        alt="Modelo 3D en AR"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{
          width: '40vw',
          height: '40vh'
        }}
        exposure="1"
        className="border-4 border-blue-500 rounded-lg shadow-lg"
      ></model-viewer>

      <div className="absolute top-4 left-4 p-4 z-10">
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="diffuse" className="text-black">Selecciona una textura:</label>
          <select id="diffuse" className="text-black mt-2 p-2 rounded bg-white">
            <option value="/textures/wood.webp">Madera</option>
            <option value="/textures/wood2.webp">Rústico</option>
            <option value="/textures/wood3.webp">Oscura</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ARModelViewer;
