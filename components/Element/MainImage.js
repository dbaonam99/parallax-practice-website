import React from 'react'
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
      <img src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png"></img>
    </div>
    <div
      className={clsx(
        'camp',
        currentSection === 1 && 'campTransform',
        currentSection === 2 && 'campTransform2'
      )}
    >
      <img src="https://i.ibb.co/tckLGz1/house-PNG50.png"></img>
    </div>
  </>
)

export default MainImage
