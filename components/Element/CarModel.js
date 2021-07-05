import React, { Suspense, useState, useEffect } from 'react'
//Three
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from '../Three/lights'
import Floor from '../Three/floor'
//Model
import Model from '../Three/Scene'

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
        {/* <OrbitControls /> */}
        <Lights />
        <Suspense fallback={null}>
          <Model currentSection={currentSection} />
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CarModel