import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M2Config = () => {
  const variantConfig = {
    productId: "solano-table",
    defaultVariants: {
      Madera: "scotch"
    },
    variantsByGroup: {
      Madera: ["scotch", "camelia"]
    },
    groupNames: {
      Madera: "Madera"
    },
    variantNames: {
      scotch: "Scotch",
      camelia: "Camellia"
    },
    variantCombinationIds: {
      scotch: {
        parentId: 864,
        variationId: 1094,
        attributes: { Madera: "scotch" }
      },
      camelia: {
        parentId: 864,
        variationId: 1095,
        attributes: { Madera: "camelia" }
      }
    }
  };

  const productConfig = {
    name: "Mesa Solano",
    image: "/solano-preview.jpg"
  };

  const handleVariantChange = (category, variant, allVariants) => {
    console.log(`Cambió ${category} a ${variant}`);
    console.log("Todas las variantes:", allVariants);
  };

  const handleModelLoad = () => {
    console.log("Modelo 3D cargado correctamente");
  };

  return (
    <div className="w-full h-full overflow-hidden bg-white p-4">
      <Generic3DConfigurator
        modelSrc="/models/rumi/M2.glb"
        modelId="solano-table"
        variantConfig={variantConfig}
        productConfig={productConfig}
        language="es" // ya no se usa pero puedes dejarlo
        onVariantChange={handleVariantChange}
        onModelLoad={handleModelLoad}
        uiConfig={{
          showFullscreen: true,
          showReload: true,
          columns: 1,
          loadingGif: "/loading.gif",
          reloadIcon: "/reload.svg"
        }}
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

export default M2Config;
