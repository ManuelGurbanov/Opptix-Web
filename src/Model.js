import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

function Model({ color, scale, position, texturePath }) {
  const { nodes, materials } = useGLTF('/models/applewatch-normal.glb');

  const texture = useTexture(texturePath === 'Default' ? '/models/redlabel.webp' : texturePath);

  useEffect(() => {
    if (materials && materials['PANTALLA']) {
      if (texturePath === 'Default') {
        materials['PANTALLA'].map = null;
      } else {
        materials['PANTALLA'].map = texture;
      }
      materials['PANTALLA'].needsUpdate = true;
    }
  }, [materials, texture, texturePath]);

  return (
    <group position={position} dispose={null}>
      {Object.entries(nodes).map(([key, node]) => (
        <mesh
          key={key}
          geometry={node.geometry}
          material={node.material || materials['PANTALLA']}
          material-color={key === 'PANTALLA' ? color : undefined}
          scale={[scale, scale, scale]}
        />
      ))}
    </group>
  );
}

export default Model;
