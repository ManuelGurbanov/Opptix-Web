import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M1Config = () => {
  const variantConfig = {
    productId: "solano-table",
    defaultVariants: {
      Melamina: "Tapir",
      Tirador: "Negro"
    },
    variantsByGroup: {
      Melamina: ["Tapir", "Safari"],
      Tirador: ["Negro", "Hueso"]
    },
    groupNames: {
      Melamina: "Melamina",
      Tirador: "Tirador"
    },
    variantNames: {
      Safari: "Safari",
      Tapir: "Tapir",
      Hueso: "Hueso",
      Negro: "Negro"
    },
    variantCombinationIds: {
    "Tapir-Hueso": {
        parentId: 725,
        variationId: 1096,
        attributes: {
        Melamina: "Tapir",
        Tirador: "Hueso"
        }
    },
    "Safari-Hueso": {
        parentId: 725,
        variationId: 1097,
        attributes: {
        Melamina: "Safari",
        Tirador: "Hueso"
        }
    },
    "Tapir-Negro": {
        parentId: 725,
        variationId: 1098,
        attributes: {
        Melamina: "Tapir",
        Tirador: "Negro"
        }
    },
    "Safari-Negro": {
        parentId: 725,
        variationId: 1099,
        attributes: {
        Melamina: "Safari",
        Tirador: "Negro"
        }
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
        modelSrc="/models/rumi/M1.glb"
        modelId="solano-table"
        variantConfig={variantConfig}
        productConfig={productConfig}
        language="es" // ya no se usa
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
            //height: "60vh",
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

export default M1Config;
