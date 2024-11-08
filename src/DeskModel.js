import React from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';

function DeskModel(props) {
  const fbx = useLoader(FBXLoader, '/models/escritorio-lowpoly.fbx');

  return <primitive object={fbx} {...props} />;
}

export default DeskModel;
