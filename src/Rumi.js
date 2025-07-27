import React from 'react';
import Generic3DConfigurator from './Generic3DConfigurator';

const Rumi = () => {
  // Configuración de variantes
  const variantConfig = {
    // Variantes por defecto
    defaultVariants: {
      Tabla: "Oscura"
    },
    
    // Agrupación de variantes
    variantsByGroup: {
      Tabla: ["Oscura", "clara", "negro", "blanco"]
    },
    
    // Nombres de los grupos (multiidioma)
    groupNames: {
      Tabla: {
        es: "Tabla",
        en: "Board"
      }
    },
    
    // Nombres de las variantes (multiidioma)
    variantNames: {
      Oscura: {
        es: "Oscura",
        en: "Dark"
      },
      clara: {
        es: "Clara",
        en: "Light"
      },
      negro: {
        es: "Negro",
        en: "Black"
      },
      blanco: {
        es: "Blanco",
        en: "White"
      }
    }
  };

  // Configuración del producto
  const productConfig = {
    name: {
      es: "Mesa Solano",
      en: "Solano Table"
    },
    image: "/solano-preview.jpg" // opcional, para preview
  };

  // Callback para cuando cambian las variantes
  const handleVariantChange = (category, variant, allVariants) => {
    console.log(`Cambió ${category} a ${variant}`);
    console.log('Todas las variantes:', allVariants);
  };

  // Callback para cuando se carga el modelo
  const handleModelLoad = () => {
    console.log('Modelo 3D cargado correctamente');
  };

  return (
    <div className="w-full h-full overflow-hidden bg-white p-4">
        <Generic3DConfigurator
          // Modelo 3D
          modelSrc="/solano.glb"
          modelId="solano-table"
          
          // Configuraciones
          variantConfig={variantConfig}
          productConfig={productConfig}
          language="es"
          
          // Callbacks
          onVariantChange={handleVariantChange}
          onModelLoad={handleModelLoad}
          
          // Configuración de UI (opcional)
          uiConfig={{
            showFullscreen: true,
            showReload: true,
            columns: 1, // Solo un grupo, una columna
            loadingGif: "/loading.gif",
            reloadIcon: "/reload.svg"
          }}
          
          // Configuración del viewer (opcional)
          viewerConfig={{
            cameraControls: true,
            ar: true,
            arModes: "webxr scene-viewer quick-look",
            loading: "eager",
            dimensions: {
              width: "80vw",
              height: "60vh",
              minWidth: "450px",
              minHeight: "300px",
              fullscreenWidth: "100vw",
              fullscreenHeight: "100vh"
            }
          }}
        />
    </div>
  );
};

export default Rumi;