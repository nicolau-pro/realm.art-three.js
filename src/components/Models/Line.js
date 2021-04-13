import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

// gLB/glTF viewer: https://gltf-viewer.donmccurdy.com/

export default function Line(props) {
  const gltf = useLoader(GLTFLoader, 'models/line.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  const ref = useRef();

  return (
    <group ref={ref} {...props} dispose={null} scale={[4, 4, 4]}>
      <primitive object={gltf.scene} />
    </group>
  );
}
