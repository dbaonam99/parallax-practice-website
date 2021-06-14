import React from 'react'
import clsx from 'clsx'

const ScrollBar = ({ floatingText }) => (
  <div
    className={clsx(
      'scroll',
      floatingText === 1 && 'scroll2',
      floatingText === 2 && 'scroll3'
    )}
  >
    <div className="scroll-item"></div>
  </div>
)

export default ScrollBar
