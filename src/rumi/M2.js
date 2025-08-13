import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M2Config = () => {
  const variantConfig = {
    productId: "solano-table",
    defaultVariants: {
      Madera: "scotch",
      Tirador: "hueso"
    },
    variantsByGroup: {
      Madera: ["scotch", "camelia"],
      Tirador: ["Negro", "hueso"]
    },
    groupNames: {
      Madera: "Madera",
      Tirador: "Tirador"
    },
    variantNames: {
      scotch: "Scotch",
      camelia: "Camellia",
      Negro: "Negro",
      hueso: "Hueso"
    },
    variantCombinationIds: {
      "scotch-Negro": {
        "parentId": 864,
        "variationId": 1131,
        "attributes": {
          "Madera": "scotch",
          "Tirador": "Negro"
        }
      },
      "scotch-hueso": {
        "parentId": 864,
        "variationId": 1132,
        "attributes": {
          "Madera": "scotch",
          "Tirador": "hueso"
        }
      },
      "camelia-Negro": {
        "parentId": 864,
        "variationId": 1133,
        "attributes": {
          "Madera": "camelia",
          "Tirador": "Negro"
        }
      },
      "camelia-hueso": {
        "parentId": 864,
        "variationId": 1134,
        "attributes": {
          "Madera": "camelia",
          "Tirador": "hueso"
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
        modelSrc="/models/rumi/M2.glb"
        modelId="solano-table"
        variantConfig={variantConfig}
        productConfig={productConfig}
        language="es"
        onVariantChange={handleVariantChange}
        onModelLoad={handleModelLoad}
        uiConfig={{
          showFullscreen: true,
          showReload: true,
          columns: 1,
          loadingGif: "/rumi_loading.gif",
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
