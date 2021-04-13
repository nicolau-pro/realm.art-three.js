import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CameraOrbit = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => controls.dispose();
  }, [camera, gl]);

  return null;
};

const CameraController = () => {
  return <CameraOrbit />;
};

export default CameraController;
