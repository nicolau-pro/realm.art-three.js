import React, { useRef } from 'react';

const Mesh = (props) => {
  const settings = {
    mesh: {
      position: [0, 0, 1],
      scale: [0.1, 0.1, 0.1],
    },

    torusKnotGeometry: {
      attach: 'geometry',
      args: [10, 3, 100, 16],
    },

    meshPhongMaterial: {
      attach: 'material',
      color: 0x808080,
    },
  };

  const ref = useRef();

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh {...settings.mesh}>
        <torusKnotGeometry {...settings.torusKnotGeometry} />
        <meshPhongMaterial {...settings.meshPhongMaterial} />
      </mesh>
    </group>
  );
};

export default Mesh;
