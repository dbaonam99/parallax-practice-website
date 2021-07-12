import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import House from '../Three/House'
import { OrbitControls } from '@react-three/drei'

function HouseModel() {
  return (
    <div style={{ zIndex: 999999, height: '100%' }}>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [-800, 100, 0],
          fov: 40,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight castShadow position={[-8, 16, -8]} intensity={1.3} />
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <House />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HouseModel
