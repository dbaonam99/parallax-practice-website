import React from 'react'
import clsx from 'clsx'

const FloatingImage = ({ floatingDrawing }) => (
  <>
    {floatingDrawing === 2 && (
      <div
        className={clsx(
          'float-drawing',
          floatingDrawing === 2 && 'float-drawing-2'
        )}
      >
        <img src="https://pix10.agoda.net/hotelImages/908722/-1/826ae52cda2279e339bb8fb769d97dee.jpg?s=1024x768"></img>
      </div>
    )}
    {floatingDrawing === 2 && (
      <div
        className={clsx(
          'float-drawing2',
          floatingDrawing === 2 && 'float-drawing2-2'
        )}
      >
        <img src="https://q4launch.com/wp-content/uploads/2018/01/luxury-pool-with-view-what-is-yield-management.jpeg"></img>
      </div>
    )}
  </>
)

export default FloatingImage
