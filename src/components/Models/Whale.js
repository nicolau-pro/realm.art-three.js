import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

// gLB/glTF viewer: https://gltf-viewer.donmccurdy.com/

export default function Whale(props) {
  const gltf = useLoader(GLTFLoader, 'models/whale.gltf', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  const ref = useRef();

  const scale = 0.004;

  return (
    <group ref={ref} {...props} dispose={null} scale={[scale, scale, scale]} position={[1, -0.5, 0.8]}>
      <primitive object={gltf.scene} />
    </group>
  );
}
