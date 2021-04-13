import React, { useRef } from 'react';

const Sun = (props) => {
  const settings = {
    sphereGeometry: {
      attach: 'geometry',
      args: [1, 32, 32],
    },

    meshBasicMaterial: {
      attach: 'material',
      color: 0xffffe0,
    },
  };

  const ref = useRef();

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh>
        <sphereGeometry {...settings.sphereGeometry} />
        <meshBasicMaterial {...settings.meshPhongMaterial} />
      </mesh>
    </group>
  );
};

export default Sun;
