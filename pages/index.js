import Menu from '../components/Element/Menu'
import Bar from '../components/Element/Bar'
import SectionOne from '../components/Section/SectionOne'
import SectionTwo from '../components/Section/SectionTwo'
import ReactFullpage from '@fullpage/react-fullpage';
import clsx from 'clsx';
import { useState } from 'react';
import SectionThree from '../components/Section/SectionThree';

export default function Home() {
  const [openIcon, setOpenIcon] = useState(true);
  const [imageTransform, setImageTransform] = useState(0);
  const anchors = ['home', 'service', 'support'];
  const onLeave = (origin, destination, direction) => {
    if (destination.anchor === 'home') {
      setOpenIcon(true)
      setImageTransform(0)
    } else if (destination.anchor === 'service') {
      setOpenIcon(false)
      setImageTransform(1)
    } else if (destination.anchor === 'support') {
      setOpenIcon(true)
      setImageTransform(2)
    }
  }
  return (
    <div className="root">
      <Menu />
      <Bar />
      <div className={clsx("car",
        imageTransform === 1 && "carTransform",
        imageTransform === 2 && "carTransform2"
      )}>
        <img src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png"></img> 
      </div>
      <div className={clsx("camp",
        imageTransform === 1 && "campTransform",
        imageTransform === 2 && "campTransform2"
      )}>
        <img src="https://i.ibb.co/tckLGz1/house-PNG50.png"></img> 
      </div>
      <ReactFullpage
        onLeave={onLeave}
        anchors={anchors}
        navigation={false}
        scrollingSpeed={1500}
        render={() => <ReactFullpage.Wrapper>
            <div className="section">
              <SectionOne openIcon={openIcon}/>
            </div>
            <div className="section">
              <SectionTwo/>
            </div>
            <div className="section fp-auto-height">
              <SectionThree/>
            </div>
          </ReactFullpage.Wrapper>
        }
      />
    </div>
  )
}
