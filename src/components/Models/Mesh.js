import React from 'react';

const Mesh = () => {
  return (
    <mesh>
      <boxGeometry attach='geometry' args={[3, 2, 1]} />
      <meshPhongMaterial attach='material' color='red' />
    </mesh>
  );
};

export default Mesh;
