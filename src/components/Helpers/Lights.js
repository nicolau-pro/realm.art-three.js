import React from 'react';

const Lights = () => {
  return (
    <>
      <ambientLight />
      <spotLight intensity={0.3} position={[5, 10, 50]} />
    </>
  );
};

export default Lights;
