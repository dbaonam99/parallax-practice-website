import React from 'react';
import Fade from 'react-reveal/Fade';

const Menu = () => (
  <div className="menu">
    <Fade bottom duration={800}>
      <div className="menu-item">
      STORIES
      </div>
    </Fade>
    <Fade bottom duration={800} delay={200}>
      <div className="menu-item">
        SERVICE
      </div>
    </Fade>
    <Fade bottom duration={800} delay={400}>
      <div className="menu-item">
        SUPPORT
      </div>
    </Fade>
  </div>
);

export default Menu;
