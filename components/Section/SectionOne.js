import React, { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import Action from '../Element/Action';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const word = ["P1", "A2", "R3", "A4", "L5", "L6", "A7", "X8"];

class Letter extends React.Component {
    render() {
        const { letter } = this.props;
        const yOff = getRandomInt(50, -100);

        return (
            <div
                className="letter"
                style={{
                    width: '30px',
                    height: '30px',
                    background: 'red'
                }}
            >
                <Parallax
                    className="form"
                    y={[-200, 200]}
                    x={[-100, 100]}
                >
                    {letter}
                </Parallax>
            </div>
        );
    }
}

const ParallaxWord = () => (
    <div className="word">
        {word.map((X, i) => (
            <Letter key={i} letter={X} />
        ))}
    </div>
);

const SectionOne = () => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, [])
    
    return (
        <ParallaxProvider>
            <div className="section-one" style={{ height: `${height}px` }}>
                <div className="title">
                    <Fade bottom duration={800}>
                        <p>Electric</p>
                    </Fade>
                    <Fade bottom duration={800} delay={200}>
                        <p>Adventure</p>
                    </Fade>
                </div>
                <div className="img">
                    <Parallax
                        y={[10, 0]}
                        x={[20, -60]}
                    >
                        <img src="https://i.ibb.co/nrGNB7d/car.png"></img>
                    </Parallax>
                </div>
                <div className="empty"></div>
                <Action />
            </div>
        </ParallaxProvider>
    );
}

export default SectionOne;
