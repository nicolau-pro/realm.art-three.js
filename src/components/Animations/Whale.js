import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Line from '../Models/Whale';

const PI = Math.PI;

export default function MeshAnimation() {
  const ref = useRef();

  useFrame((state) => {
    const sin = Math.sin(state.clock.getElapsedTime());
    ref.current.position.y = sin / 3;
    ref.current.rotation.z = sin / 5;
    ref.current.rotation.y = PI / 2;
  });

  return (
    <group ref={ref}>
      <Line />
    </group>
  );
}
