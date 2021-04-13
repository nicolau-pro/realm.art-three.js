import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import Lights from '../Helpers/Lights';
import CameraController from '../Helpers/CameraController';
import Floor from '../Models/Floor';
import Mesh from '../Models/Mesh';

function AnimatedMesh() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.getElapsedTime());
  });

  return (
    <group ref={ref}>
      <Mesh />
    </group>
  );
}

export default function Display() {
  return (
    <Canvas>
      <CameraController />
      <Lights />
      <Floor />
      <AnimatedMesh />
    </Canvas>
  );
}
