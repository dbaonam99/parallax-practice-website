import React from 'react'
import clsx from 'clsx'

const ScrollBar = ({ currentSection }) => (
  <div
    className={clsx(
      'scroll',
      currentSection === 1 && 'scroll2',
      currentSection === 2 && 'scroll3'
    )}
  >
    <div className="scroll-item"></div>
  </div>
)

export default ScrollBar
