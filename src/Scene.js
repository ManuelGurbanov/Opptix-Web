import React from 'react';
import { OrbitControls } from '@react-three/drei';

function Scene({ children }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={true} />
      {children}
    </>
  );
}

export default Scene;