import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 1;
    controls.maxDistance = 5;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

const Display = () => {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <spotLight intensity={0.3} position={[5, 10, 50]} />
      <mesh>
        <boxGeometry attach='geometry' args={[3, 2, 1]} />
        <meshPhongMaterial attach='material' color='hotpink' />
      </mesh>
    </Canvas>
  );
};

export default Display;
