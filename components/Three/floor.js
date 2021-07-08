// Component: Floor
// Def: Floor plane for our chest, does recieve a shadow

import React from 'react'

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

export default Floor
