// Component: Lights
// Def: Lights for our canvas

import React from 'react'

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={1.3}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, 300, 500]} />
      <pointLight position={[500, 100, 0]} />
      <pointLight position={[0, 100, -500]} />
      <pointLight position={[-500, 100, 0]} />
    </>
  )
}

export default Lights
