import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Lights from '../Three/lights'
import Floor from '../Three/floor'
import Model from '../Three/Scene'
import { OrbitControls } from '@react-three/drei'

function CarModel({ currentSection }) {
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
        <Lights />
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <Model currentSection={currentSection} />
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CarModel
