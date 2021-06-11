import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Action from '../Element/Action';

const SectionOne = ({ openIcon }) => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, [])
    
    return ( 
        <div className="section-one" style={{ height: `${height}px` }}>
            <div className="title">
                <Fade bottom duration={800}>
                    <p>Electric</p>
                </Fade>
                <Fade bottom duration={800} delay={200}>
                    <p>Adventure</p>
                </Fade>
            </div>
            <Action openIcon={openIcon}/>
        </div>
    );
}

export default SectionOne;
