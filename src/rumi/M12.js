import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M12Config = () => {

const groups = {
  Madera: ["Camellia", "Scotch"],
  Melamina: ["Safari", "Tapir"],
  Tirador: ["Hueso", "Negro"]
};

const variantNames = {
  Camellia: "Camellia",
  Scotch: "Scotch",
  Tapir: "Tapir",
  Safari: "Safari",
  Negro: "Negro",
  Hueso: "Hueso"
};

const groupNames = {
  Madera: "Madera",
  Melamina: "Melamina",
  Tirador: "Tirador/Patas"
};

const productId = "M12";

const defaultVariants = {
  Madera: "Camellia",
  Melamina: "Tapir",
  Tirador: "Hueso"
};


const parentId = 1222;
const startVariationId = 1223;

const variantCombinationIds = {};
let variationCounter = 0;

for (const madera of groups.Madera) {
  for (const melamina of groups.Melamina) {
      for (const tirador of groups.Tirador) {
        const key = `${madera}-${melamina}-${tirador}`;
        variantCombinationIds[key] = {
          parentId,
          variationId: startVariationId + variationCounter,
          attributes: {
            Madera: madera,
            Melamina: melamina,
            Tirador: tirador
        }
      };
      variationCounter++;
    }
  }
}

const variantConfig = {
  productId,
  defaultVariants,
  variantsByGroup: groups,
  groupNames,
  variantNames,
  variantCombinationIds
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
    <div className="w-full h-full overflow-hidden bg-white p-4 configurator">
      <Generic3DConfigurator
        modelSrc="/models/rumi/M12.glb"
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

export default M12Config;