import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

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

const SectionTwo = () => (
    <ParallaxProvider>
        <div className="section-two">
            <div className="title">
                <Fade bottom duration={800} >
                    <p>Electrizxcc</p>
                </Fade>
                <Fade bottom duration={800}>
                    <p>Adventure</p>
                </Fade>
            </div>
            <div className="empty">
                <Parallax
                    y={[-200, -50]}
                    x={[0, -120]}
                >
                    <img src="https://i.ibb.co/QJNLg0V/kisspng-tent-cartoon-camping-clip-art-set-up-a-tent-to-make-a-fire-5a9820e98b8500-972009741519919337.png"></img>
                </Parallax>
            </div>
        </div>
    </ParallaxProvider>
);

export default SectionTwo;
