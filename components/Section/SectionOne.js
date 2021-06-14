import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Action from '../Element/Action'
import Title from '../Element/Title'

const SectionOne = ({ openIcon }) => {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <div className="section-one" style={{ height: `${height}px` }}>
      <Title label="Electric" label2="Adventure" />
      <Action openIcon={openIcon} />
    </div>
  )
}

export default SectionOne
