import Generic3DConfigurator from "./Generic3DConfigurator";

const MuestraRumi = () => {
  const variantConfig = {
    productId: "muestra-rumi",

    variantCombinationIds: {
      Safir: {
        parentId: 725,
        variationId: 1086,
        attributes: { madera: "safir" }
      },
      Tapir: {
        parentId: 725,
        variationId: 1087,
        attributes: { madera: "tapir" }
      },
      Scotch: {
        parentId: 725,
        variationId: 1088,
        attributes: { madera: "scotch" }
      },
      Camellia: {
        parentId: 725,
        variationId: 1089,
        attributes: { madera: "camellia" }
      }
    },

    defaultVariants: {
      Madera: "Safir"
    },

    variantsByGroup: {
      Madera: ["Safir", "Tapir", "Scotch", "Camellia"]
    },

    groupNames: {
      Madera: { es: "Madera", en: "Wood" }
    },

    variantNames: {
      Safir: { es: "Safir", en: "Safir" },
      Tapir: { es: "Tapir", en: "Tapir" },
      Scotch: { es: "Scotch", en: "Scotch" },
      Camellia: { es: "Camellia", en: "Camellia" }
    }
  };

  const productConfig = {
    name: { es: "Muestra Rumi", en: "Rumi Sample" }
  };

  const uiConfig = {
    showFullscreen: false,
    showReload: true,
    columns: 3,
    loadingGif: "/loading.gif",
    reloadIcon: "/reload.svg"
  };

  return (
    <Generic3DConfigurator
      modelSrc="/MUESTRA1.glb"
      modelId="muestra-rumi"
      productConfig={productConfig}
      variantConfig={variantConfig}
      uiConfig={uiConfig}
    />
  );
};

export default MuestraRumi;
