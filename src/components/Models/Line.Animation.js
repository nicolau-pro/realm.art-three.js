import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Line from './Line';

export default function MeshAnimation() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.z += 0.02;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  return (
    <group ref={ref}>
      <Line />
    </group>
  );
}
