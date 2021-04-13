import React from 'react';

const Lights = () => {
  const settings = {
    ambientLight: {
      intensity: 0.2,
    },

    spotLight: {
      position: [5, 10, 50],
      intensity: 2,
      color: 0x0000ff,
      angle: 0.03,
      penumbra: 0.1,
    },

    hemisphereLight: {
      intensity: 0.1,
      color: 0x00ff00,
    },
  };

  return (
    <>
      <ambientLight {...settings.ambientLight} />
      <spotLight {...settings.spotLight} />
      <hemisphereLight {...settings.hemisphereLight} />
    </>
  );
};

export default Lights;
