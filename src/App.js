import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Lights from './components/Helpers/Lights';
import CameraController from './components/Helpers/CameraController';
import Floor from './components/Models/Floor';
import Mesh from './components/Animations/Mesh';
import Whale from './components/Animations/Whale';

export default function Display() {
  const Scene = () => {
    return (
      <group>
        <Floor />
        <Suspense fallback={<Mesh />}>
          <Whale />
        </Suspense>
        <Lights />
      </group>
    );
  };

  return (
    <Canvas style={{ background: 'midnightBlue' }} shadowMap colorManagement>
      <CameraController />
      <Scene />
    </Canvas>
  );
}
