import React from 'react'
import CarModel from './CarModel'
import HouseModel from './HouseModel'
import clsx from 'clsx'

const MainImage = ({ currentSection }) => (
  <>
    <div
      className={clsx(
        'car',
        currentSection === 1 && 'carTransform',
        currentSection === 2 && 'carTransform2'
      )}
    >
      <div className="model">
        <CarModel currentSection={currentSection} />
      </div>
    </div>
    <div
      className={clsx(
        'camp',
        currentSection === 1 && 'campTransform',
        currentSection === 2 && 'campTransform2'
      )}
    >
      <div className="model">
        <HouseModel currentSection={currentSection} />
      </div>
    </div>
  </>
)

export default MainImage
