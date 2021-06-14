import React from 'react'
import Fade from 'react-reveal/Fade'
import { useState } from 'react/cjs/react.development'

const Action = ({ openIcon }) => {
  return (
    <div className={openIcon ? 'action' : 'action actionOff'}>
      <div className="explore">
        <Fade bottom duration={600} delay={200}>
          <p>KEEP THE WORLD ADVENTUROUS FOREVER</p>
        </Fade>
        <Fade bottom duration={600} delay={400}>
          <div className="button">EXPLORE</div>
        </Fade>
      </div>
      <div className="action-btn">
        <Fade bottom duration={600} delay={200}>
          <div className="btn">
            <i className="fa fa-home" style={{ fontSize: '20px' }}></i>
          </div>
        </Fade>
        <Fade bottom duration={600} delay={300}>
          <div className="btn">
            <i className="fa fa-power-off" style={{ fontSize: '20px' }}></i>
          </div>
        </Fade>
        <Fade bottom duration={600} delay={400}>
          <div className="btn">
            <i className="fa fa-codiepie" style={{ fontSize: '20px' }}></i>
          </div>
        </Fade>
      </div>
      <div className="drawing">
        <img src="https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?size=626&ext=jpg&ga=GA1.2.1412099611.1623110400"></img>
      </div>
    </div>
  )
}

export default Action
