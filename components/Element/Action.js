import React from 'react'
import Fade from 'react-reveal/Fade'

const Action = ({ currentSection }) => {
  return (
    <div className={currentSection === 0 ? 'action' : 'action actionOff'}>
      <div className="explore">
        <Fade bottom duration={600} delay={4200}>
          <p>KEEP THE WORLD ADVENTUROUS FOREVER</p>
        </Fade>
        <Fade bottom duration={600} delay={4400}>
          <div className="button">EXPLORE</div>
        </Fade>
      </div>
      <div className="action-btn">
        <Fade bottom duration={600} delay={4200}>
          <div className="btn">
            <i className="fa fa-home" style={{ fontSize: '20px' }}></i>
          </div>
        </Fade>
        <Fade bottom duration={600} delay={4300}>
          <div className="btn">
            <i className="fa fa-power-off" style={{ fontSize: '20px' }}></i>
          </div>
        </Fade>
        <Fade bottom duration={600} delay={4400}>
          <div className="btn">
            <i className="fa fa-codiepie" style={{ fontSize: '20px' }}></i>
          </div>
        </Fade>
      </div>
      <div className="drawing">
        <img src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg"></img>
      </div>
    </div>
  )
}

export default Action
