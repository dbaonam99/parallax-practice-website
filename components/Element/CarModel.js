import React, { Suspense } from 'react'
//Three
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from '../Three/lights'
import Floor from '../Three/floor'
//Model
import Model from '../Three/Scene'

function CarModel() {
  return (
    <div style={{ zIndex: 999999, height: '100%' }}>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [80, 10, -50], fov: 40 }}
      >
        <OrbitControls />
        <Lights />
        <Suspense fallback={null}>
          <Model />
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CarModel
