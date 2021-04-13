import React from 'react';

const Floor = () => {
  const settings = {
    mesh: {
      position: [0, 0, 0],
    },

    boxGeometry: {
      attach: 'geometry',
      args: [5, 5, 0.01],
    },

    meshPhongMaterial: {
      attach: 'material',
      color: 0xff0000,
    },
  };

  return (
    <mesh {...settings.mesh}>
      <boxGeometry {...settings.boxGeometry} />
      <meshPhongMaterial {...settings.meshPhongMaterial} />
    </mesh>
  );
};

export default Floor;
