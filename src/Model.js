import React, { useEffect, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

function Model({ color, scale, position, texturePath  }) {
  const { nodes, materials } = useGLTF('/models/escritorio-lowpoly.glb');
  
  const texture = useTexture(texturePath); // Usamos useTexture para cargar la textura dinámica

  // Actualizamos el material con la nueva textura
  useEffect(() => {
    if (materials && materials['MDF Imbuia Guararapis*'] && texture) {
      materials['MDF Imbuia Guararapis*'].map = texture; // Asignamos la textura al material
    }
  }, [materials, texture]); // Dependemos de los materiales y la textur

  return (
    <group position={position} dispose={null}>
      {Object.values(nodes).map((node, index) => (
        <mesh
          key={index}
          geometry={node.geometry}
          material={materials ? materials['MDF Imbuia Guararapis*'] : undefined}
          material-color={color}
          scale={[scale, scale, scale]}
        />
      ))}
    </group>
  );
}

export default Model;
