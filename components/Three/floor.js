// Component: Floor
// Def: Floor plane for our chest, does recieve a shadow

import React from 'react'

const Floor = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
      scale={[6, 6, 6]}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="gray" />
    </mesh>
  )
}

export default Floor
