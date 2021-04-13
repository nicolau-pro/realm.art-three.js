import React from 'react';
import { Canvas } from '@react-three/fiber';

import Lights from '../Helpers/Lights';
import CameraController from '../Helpers/CameraController';
import Mesh from '../Models/Mesh';

const Display = () => {
  return (
    <Canvas>
      <CameraController />
      <Lights />
      <Mesh />
    </Canvas>
  );
};

export default Display;
