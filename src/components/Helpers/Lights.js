import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Sun from '../Models/Sun';

function AnimatedSun() {
  const ref = useRef();

  const settings = {
    position: [10, 5, 10],
    rotation: [-Math.PI / 2, 0, 0],
    intensity: 2,
  };
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime();
  });

  return (
    <group ref={ref}>
      <group name='Sun' {...settings}>
        <Sun />
        <pointLight {...settings} />
      </group>
    </group>
  );
}

const Lights = () => {
  const settings = {
    ambientLight: {
      intensity: 0.2,
    },

    spotLight: {
      position: [5, 10, 50],
      intensity: 2,
      color: 0xff0000,
      angle: 0.02,
      penumbra: 0.1,
    },

    sun: {
      position: [100, 50, 100],
      rotation: [-Math.PI / 2, 0, 0],
      intensity: 1,
    },
  };

  return (
    <>
      <ambientLight {...settings.ambientLight} />
      <spotLight {...settings.spotLight} />
      <AnimatedSun />
    </>
  );
};

export default Lights;
