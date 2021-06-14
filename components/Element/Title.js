import React from 'react'
import Fade from 'react-reveal/Fade'

const Title = ({ label, label2 }) => {
  return (
    <div className="title">
      <div className="title-box">
        <Fade bottom duration={600}>
          <p>{label}</p>
        </Fade>
      </div>
      <div className="title-box">
        <Fade bottom duration={600} delay={200}>
          <p>{label2}</p>
        </Fade>
      </div>
    </div>
  )
}

export default Title
