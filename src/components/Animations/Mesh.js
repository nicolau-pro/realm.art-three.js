import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Mesh from '../Models/Mesh';

export default function MeshAnimation() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.getElapsedTime());
    ref.current.rotation.z += 0.01;
  });

  return (
    <group ref={ref}>
      <Mesh />
    </group>
  );
}
