import { useParams } from 'react-router-dom';

const CasaZorba = () => {
  const { id } = useParams();

  // Base de datos de productos
  const productos = {
    "poltrona-atenas-esterilla": {
      nombre: "POLTRONA ATENAS ESTERILLA",
      descripcion: "Elegante banqueta inspirada en el diseño clásico griego. Fabricada con materiales de alta calidad, perfecta para espacios modernos que buscan un toque de sofisticación. Su estructura robusta y líneas estilizadas la convierten en una pieza única para tu hogar.",
      modelo: "/models/zorba/heracles.glb"
    }
  };

  const fontStyle = `
    @font-face {
      font-family: 'Inter';
      src: url('https://fonts.gstatic.com/s/inter/v19/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2') format('woff2');
      font-display: swap;
    }
  `;

  // Inyectar los estilos de la fuente
  if (!document.querySelector('#inter-font-casazorba')) {
    const style = document.createElement('style');
    style.id = 'inter-font-casazorba';
    style.textContent = fontStyle;
    document.head.appendChild(style);
  }

  const producto = productos[id];

  if (!producto) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Producto no encontrado</h1>
          <p className="text-gray-600">
            El producto "{id}" no existe en nuestro catálogo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Título del producto */}
        <h1 className="text-4xl text-black text-center mb-12">
          {producto.nombre}
        </h1>

        {/* Model Viewer */}
        <div className="mb-12 relative">
            <img src='/zorba_logo.webp' 
            alt={producto.nombre} className="absolute left-2 top-2 w-40 z-30 opacity-40" />
          <model-viewer
            src={producto.modelo}
            alt={producto.nombre}
            auto-rotate
            camera-controls
            style={{
              width: '100%',
              height: '500px',
              backgroundColor: '#f8f9fa'
            }}
            loading="eager"
            reveal="auto"
          />
        </div>

        {/* Descripción */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black text-lg leading-relaxed text-center">
            {producto.descripcion}
          </p>
        </div>

        {/* Información adicional */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Casa Zorba Collection
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Diseño exclusivo • Calidad premium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasaZorba;