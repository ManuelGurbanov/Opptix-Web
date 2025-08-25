import React from 'react';
import Generic3DConfigurator from '../Generic3DConfigurator';

const M15DConfig = ({side}) => {

const groups = {
  Melamina: ["Safari", "Tapir"],
  Tirador: ["Hueso", "Negro"]
};

const variantNames = {
  Tapir: "Tapir",
  Safari: "Safari",
  Negro: "Negro",
  Hueso: "Hueso"
};

const groupNames = {
  Melamina: "Melamina",
  Tirador: "Tirador/Patas"
};


const defaultVariants = {
  Melamina: "Safari",
  Tirador: "Negro"
};


const parentId = side === "DER" ? 1330 : 1252;
const startVariationId = side === "DER" ? 1486 : 1490;

const variantCombinationIds = {};
let variationCounter = 0;

for (const melamina of groups.Melamina) {
  for (const tirador of groups.Tirador) {
    const key = `${melamina}-${tirador}`;
    variantCombinationIds[key] = {
      parentId,
      variationId: startVariationId + variationCounter,
      attributes: {
        Melamina: melamina,
        Tirador: tirador
      }
    };
    variationCounter++;
  }
}

const variantConfig = {
  //productId,
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
        modelSrc={side === "DER" ? "/models/rumi/M15D.glb" : "/models/rumi/M15I.glb"}
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

export default M15DConfig;
