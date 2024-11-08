// AccessoryModel.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function AccessoryModel(props) {
  const gltf = useLoader(GLTFLoader, '/models/escritorio-lowpoly.glb');

  return <primitive object={gltf.scene} {...props} />;
}

export default AccessoryModel;
