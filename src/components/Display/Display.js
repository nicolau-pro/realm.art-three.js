import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Lights from '../Helpers/Lights';
import CameraController from '../Helpers/CameraController';
import Floor from '../Models/Floor';
import Mesh from '../Models/Mesh.Animation';
import Line from '../Models/Line.Animation';

const Scene = () => {
  return (
    <group>
      <Floor />
      <Suspense fallback={<Mesh />}>
        <Line />
      </Suspense>
      <Lights />
    </group>
  );
};

export default function Display() {
  return (
    <Canvas style={{ background: 'black' }} shadowMap colorManagement>
      <CameraController />
      <Scene />
    </Canvas>
  );
}
