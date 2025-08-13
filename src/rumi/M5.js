import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M5Config = () => {

const groups = {
  Madera: ["camelia", "scotch"],
  Patas: ["negro", "hueso"]
};

const variantNames = {
  camelia: "Camellia",
  scotch: "Scotch",
  negro: "Negro",
  hueso: "Hueso"
};

const groupNames = {
  Madera: "Madera",
  Patas: "Patas"
};

const productId = "M5";

const defaultVariants = {
  Madera: "camelia",
  Patas: "negro"
};

const parentId = 866;
const startVariationId = 1140;

const variantCombinationIds = {};
let variationCounter = 0;

for (const madera of groups.Madera) {
  for (const patas of groups.Patas) {
    const key = `${madera}-${patas}`;
    variantCombinationIds[key] = {
      parentId,
      variationId: startVariationId + variationCounter,
      attributes: {
        Madera: madera,
        Patas: patas
      }
    };
    variationCounter++;
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
        modelSrc="/models/rumi/M5.glb"
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

export default M5Config;
