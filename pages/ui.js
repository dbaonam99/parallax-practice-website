import Menu from '../components/Element/Menu'
import Bar from '../components/Element/Bar'
import SectionOne from '../components/Section/SectionOne'
import SectionTwo from '../components/Section/SectionTwo'
import ReactFullpage from '@fullpage/react-fullpage'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import SectionThree from '../components/Section/SectionThree'
import FloatingImage from '../components/Element/FloatingImage'
import FloatingText from '../components/Element/FloatingText'
import ScrollBar from '../components/Element/ScrollBar'
import MainImage from '../components/Element/MainImage'

export default function Home() {
  const [openIcon, setOpenIcon] = useState(true)
  const [imageTransform, setImageTransform] = useState(0)
  const [floatingText, setFloatingText] = useState(0)
  const [floatingDrawing, setFloatingDrawing] = useState(0)
  const anchors = ['home', 'service', 'support']

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fullpage_api.moveTo('home', 0)
  }, [])

  const onLeave = (origin, destination, direction) => {
    if (destination.anchor === 'home') {
      setOpenIcon(true)
      setImageTransform(0)
      setFloatingText(0)
      setFloatingDrawing(0)
    } else if (destination.anchor === 'service') {
      setOpenIcon(false)
      setImageTransform(1)
      setFloatingText(1)
      setFloatingDrawing(1)
    } else if (destination.anchor === 'support') {
      setOpenIcon(true)
      setImageTransform(2)
      setFloatingText(2)
      setTimeout(() => {
        setFloatingDrawing(2)
      }, 500)
    }
  }

  return (
    <div className="container-box">
      <Menu />
      <Bar />
      <ScrollBar floatingText={floatingText} />
      <FloatingText floatingText={floatingText} />
      <FloatingImage floatingDrawing={floatingDrawing} />
      <MainImage imageTransform={imageTransform} />
      <ReactFullpage
        onLeave={onLeave}
        anchors={anchors}
        navigation={false}
        scrollingSpeed={1500}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <SectionOne openIcon={openIcon} />
            </div>
            <div className="section">
              <SectionTwo />
            </div>
            <div className="section">
              <SectionThree openIcon={openIcon} />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
}
