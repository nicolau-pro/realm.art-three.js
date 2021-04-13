import React, { useRef } from 'react';

const Sun = (props) => {
  const res = 20;

  const settings = {
    sphereGeometry: {
      attach: 'geometry',
      args: [res, res, res],
    },

    meshBasicMaterial: {
      attach: 'material',
      color: 0xffffe0,
    },
  };

  const ref = useRef();

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh scale={[1 / res, 1 / res, 1 / res]}>
        <sphereGeometry {...settings.sphereGeometry} />
        <meshBasicMaterial {...settings.meshPhongMaterial} />
      </mesh>
    </group>
  );
};

export default Sun;
