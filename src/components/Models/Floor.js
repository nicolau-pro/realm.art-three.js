import React, { useRef } from 'react';
import THREELib from 'three-js';
const THREE = THREELib();

const Floor = (props) => {
  const settings = {
    mesh: {
      position: [0, 0, -2],
    },

    planeGeometry: {
      attach: 'geometry',
      args: [5, 5],
    },

    meshPhongMaterial: {
      attach: 'material',
      color: 0xff0000,
      side: THREE.DoubleSide,
    },
  };

  const ref = useRef();

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh {...settings.mesh}>
        <planeGeometry {...settings.planeGeometry} />
        <meshPhongMaterial {...settings.meshPhongMaterial} />
      </mesh>
    </group>
  );
};

export default Floor;
