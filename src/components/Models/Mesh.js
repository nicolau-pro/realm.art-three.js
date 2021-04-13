import React from 'react';

const Mesh = () => {
  const settings = {
    mesh: {
      position: [0, 0, 0.5],
    },

    boxGeometry: {
      attach: 'geometry',
      args: [3, 2, 1],
    },

    meshPhongMaterial: {
      attach: 'material',
      color: 0x808080,
    },
  };

  return (
    <mesh {...settings.mesh}>
      <boxGeometry {...settings.boxGeometry} />
      <meshPhongMaterial {...settings.meshPhongMaterial} />
    </mesh>
  );
};

export default Mesh;
