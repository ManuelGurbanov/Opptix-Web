import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M1Config = () => {
  const variantConfig = {
    productId: "solano-table",
    defaultVariants: {
      Melamina: "SAFARI",
      Tirador: "TIRADOR-HUESO"
    },
    variantsByGroup: {
      Melamina: ["TAPIR", "SAFARI"],
      Tirador: ["TIRADOR-NEGRO", "TIRADOR-HUESO"]
    },
    groupNames: {
      Melamina: "Melamina",
      Tirador: "Tirador/Patas"
    },
    variantNames: {
      SAFARI: "Safari",
      TAPIR: "Tapir",
      "TIRADOR-HUESO": "Hueso",
      "TIRADOR-NEGRO": "Negro"
    },
    variantCombinationIds: {
    "TAPIR-TIRADOR-HUESO": {
        parentId: 725,
        variationId: 1096,
        attributes: {
        Melamina: "TAPIR",
        Tirador: "TIRADOR-HUESO"
        }
    },
    "SAFARI-TIRADOR-HUESO": {
        parentId: 725,
        variationId: 1097,
        attributes: {
        Melamina: "SAFARI",
        Tirador: "TIRADOR-HUESO"
        }
    },
    "TAPIR-TIRADOR-NEGRO": {
        parentId: 725,
        variationId: 1098,
        attributes: {
        Melamina: "TAPIR",
        Tirador: "TIRADOR-NEGRO"
        }
    },
    "SAFARI-TIRADOR-NEGRO": {
        parentId: 725,
        variationId: 1099,
        attributes: {
        Melamina: "SAFARI",
        Tirador: "TIRADOR-NEGRO"
        }
    }
    }

    };
  const productConfig = {
    name: "Mesa Solano",
    image: "/solano-preview.jpg"
  };

  const handleVariantChange = (category, variant, allVariants) => {
    console.log("Todas las variantes:", allVariants);
  };

  const handleModelLoad = () => {
    console.log("Modelo 3D cargado correctamente");
  };

  return (
    <div className="w-full h-full overflow-hidden bg-white p-4 configurator">
      <Generic3DConfigurator
        modelSrc="/models/rumi/M1.glb"
        variantConfig={variantConfig}
        productConfig={productConfig}
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
            width: "100%",
            height: "100%",
            minWidth: "100%",
            minHeight: "100%",
            fullscreenWidth: "100vw",
            fullscreenHeight: "100vh"
          }
        }}
      />
    </div>
  );
};

export default M1Config;