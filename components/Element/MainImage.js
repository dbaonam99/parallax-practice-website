import React from 'react'
import clsx from 'clsx'

const MainImage = ({ imageTransform }) => (
  <>
    <div
      className={clsx(
        'car',
        imageTransform === 1 && 'carTransform',
        imageTransform === 2 && 'carTransform2'
      )}
    >
      <img src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png"></img>
    </div>
    <div
      className={clsx(
        'camp',
        imageTransform === 1 && 'campTransform',
        imageTransform === 2 && 'campTransform2'
      )}
    >
      <img src="https://i.ibb.co/tckLGz1/house-PNG50.png"></img>
    </div>
  </>
)

export default MainImage
