import React from 'react'

const ModelViewer = ({ modelSrc, posterSrc }) => {
  return (
    <model-viewer
      src={modelSrc}
      alt="Model Viewer"
      camera-controls
      ar={false}
      ar-modes="webxr scene-viewer quick-look"
      poster={posterSrc}
      style={{
        width: "100%",
        aspectRatio: "4/3",
        minHeight: "500px",
        maxWidth: "100%",
        overflow: "hidden"
      }}
    >
    </model-viewer>
  )
}

export default ModelViewer
