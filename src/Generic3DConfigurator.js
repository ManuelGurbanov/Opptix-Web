import React, { useEffect, useRef, useState } from "react";

const Generic3DConfigurator = ({
  uiConfig = {},
  modelSrc,
  modelId,
  variantConfig,
  productConfig,
  viewerConfig = {},
  onVariantChange,
  onModelLoad,
  className = "",
  ...props
}) => {
  const finalUiConfig = {
    showFullscreen: true,
    showReload: true,
    columns: 3,
    loadingGif: "/loading.gif",
    reloadIcon: "/reload.svg",
    ...uiConfig
  };

  const modelViewerRef = useRef(null);
  const ref = useRef(null);

  const [activeVariants, setActiveVariants] = useState(variantConfig.defaultVariants || {});
  const [selectingGroup, setSelectingGroup] = useState(Object.keys(variantConfig.variantsByGroup)[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Cambiar variante
  const toggleVariant = async (category, variant) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    try {
      modelViewer.variantName = variant;
      await modelViewer.model.updateComplete;

      const newVariants = { ...activeVariants, [category]: variant };
      setActiveVariants(newVariants);

      if (onVariantChange) onVariantChange(category, variant, newVariants);
    } catch (error) {
      console.error("Error al cambiar variante:", error);
    }
  };

  // Recargar variantes por defecto
  const reloadModel = async () => {
    const defaultVariants = variantConfig.defaultVariants || {};
    for (const [category, variant] of Object.entries(defaultVariants)) {
      await toggleVariant(category, variant);
    }
  };


  // Obtener combinacion activa (solo un grupo)
  const getSelectedVariation = () => {
    const key = Object.values(activeVariants).join("-");
    return variantConfig.variantCombinationIds?.[key] || null;
  };

  // URL para agregar al carrito
  const getAddToCartUrl = () => {
    const variation = getSelectedVariation();
    if (!variation) return null;

    const params = new URLSearchParams({
      "add-to-cart": variation.variationId,
      variation_id: variation.variationId,
      product_id: variation.parentId,
      quantity: 1
    });

    Object.entries(variation.attributes).forEach(([key, value]) => {
      params.set(`attribute_pa_${key.toLowerCase()}`, value.toLowerCase());
    });

    return `https://rumimuebles.com.ar/?${params.toString()}`;
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const sendHeight = () => {
      if (window.parent) {
        const height = containerRef.current?.offsetHeight || 0;
        window.parent.postMessage(
          { type: "configuratorHeight", height },
          "*"
        );
      }
    };
    sendHeight();

    const resizeObserver = new ResizeObserver(() => sendHeight());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);


  return (
    <div className={`relative overflow-hidden flex flex-col items-center justify-center w-full gap-3 bg-white ${className}`} {...props}>
      <section
        className="relative bg-white max-w-screen overflow-x-hidden overflow-y-hidden"
        ref={ref}
        style={{ minHeight: "300px"}}
      >
        <model-viewer
          id={`${modelId}-model-viewer`}
          loading={viewerConfig.loading || "eager"}
          poster={finalUiConfig.loadingGif}
          ref={modelViewerRef}
          src={modelSrc}
          alt={productConfig.name}
          camera-controls={viewerConfig.cameraControls ?? true}
          ar={viewerConfig.ar ?? true}
          ar-modes={viewerConfig.arModes ?? "webxr scene-viewer quick-look"}
          style={{
            width: "100%",
            aspectRatio: "4/3",
            minHeight: "300px",
            maxWidth: "100%",
            overflow: "hidden"
          }}
          onLoad={() => {
            if (onModelLoad) onModelLoad();
          }}
        >
        </model-viewer>

        {/* Controles de variantes */}
        <div className={`flex flex-col items-center justify-start w-full p-2 `}>
          {/* Selector de grupos */}
          <section className="flex flex-col items-center justify-center w-full gap-2 px-1">
            <div className="flex items-center justify-center gap-1 sm:gap-4">
              {Object.keys(variantConfig.variantsByGroup).map((group) => (
                <button
                  key={group}
                  className={`px-2 py-1 sm:px-4 sm:py-2 text-black text-base whitespace-nowrap min-w-fit ${
                    selectingGroup === group ? "font-black underline" : "font-semibold"
                  }`}
                  onClick={() => setSelectingGroup(group)}
                >
                  {selectingGroup === group && <span className="font-normal">• </span>}
                  {variantConfig.groupNames[group]}
                </button>
              ))}
            </div>
          </section>

          {/* Selector de variantes */}
        <div className="flex flex-row items-center justify-center w-full gap-2 p-2 overflow-x-auto">
            {uiConfig.showReload && (
            <button className="flex items-center justify-center sm:px-3 sm:py-2 px-1 py-1 aspect-square text-black transition-all  rounded-full hover:bg-rumi/20  bg-white ring-2 ring-rumi hover:text-white"
                                onClick={() => reloadModel()}>
                   <img src="/reload.svg" className="sm:w-full w-1/2"></img>
            </button>
            )}

            {variantConfig.variantsByGroup[selectingGroup].map((variant) => (
              <button
                key={variant}
                className={`px-3 py-2 whitespace-nowrap rounded-3xl ring-rumi ring-2 ${
                  activeVariants[selectingGroup] === variant
                    ? "bg-rumi text-white font-bold"
                    : "hover:bg-rumi/20  bg-white  hover:text-white text-black font-semibold"
                }`}
                onClick={() => toggleVariant(selectingGroup, variant)}
              >
                {variantConfig.variantNames[variant]}
              </button>
            ))}
          </div>
        </div>

        {/* Botones adicionales */}
        <div className="flex items-center justify-center w-full p-2">
          {getAddToCartUrl() && (
            <a
              href={getAddToCartUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-rumi text-white rounded-3xl hover:bg-white hover:text-rumi border-2 border-rumi font-semibold transition-all"
            >
              Agregar al carrito
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default Generic3DConfigurator;
