import React from 'react';
import Fade from 'react-reveal/Fade';

const Action = ({ openIcon }) => (
  <div className={openIcon ? "action" : "action actionOff"}>
    <div className="explore">
      <Fade bottom duration={800} delay={200}>
        <p>KEEP THE WORLD ADVENTUROUS FOREVER</p>
      </Fade>
      <Fade bottom duration={800}>
        <div className="button" delay={400}>EXPLORE</div>
      </Fade>
    </div>
    <Fade bottom duration={800} delay={200}>
      <div className="action-btn">
        <div className="btn">
          <i className="fa fa-home" style={{ fontSize: "20px"}}></i>
        </div>
        <div className="btn">
          <i className="fa fa-power-off" style={{ fontSize: "20px"}}></i>
        </div>
        <div className="btn">
          <i className="fa fa-codiepie" style={{ fontSize: "20px"}}></i>
        </div>
      </div>
    </Fade>
    <div className="drawing">
      <img></img>
    </div>
  </div>
);

export default Action;
