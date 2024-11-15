import React from 'react';
import { useGLTF } from '@react-three/drei';

function Accesory({ position }) {
  const { nodes } = useGLTF('/models/accesorio-lowpoly.glb');

  return (
    <group position={position}>
      {Object.values(nodes).map((node, index) => (
        <mesh
          key={index}
          geometry={node.geometry}
          material={node.material}
        />
      ))}
    </group>
  );
}

export default Accesory;