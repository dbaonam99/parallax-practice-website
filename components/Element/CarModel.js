import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Lights from '../Three/lights'
import Model from '../Three/Scene'
import { OrbitControls, Plane, Stage, Center } from '@react-three/drei'

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
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <Stage
            contactShadowOpacity={0.5}
            shadowBias={-0.0015}
            shadows={true}
            environment={'warehouse'}
            contactShadow={true}
            intensity={1}
            contactShadowBlur={2}
            adjustCamera={false}
          >
            <Model currentSection={currentSection} />
          </Stage>
          {/* {currentSection === 0 && (
            <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]}
              args={[1000, 1000]}
            >
              <meshStandardMaterial attach="material" color="red" />
            </Plane>
          )} */}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CarModel
