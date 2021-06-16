import Menu from '../components/Element/Menu'
import Bar from '../components/Element/Bar'
import SectionOne from '../components/Section/SectionOne'
import SectionTwo from '../components/Section/SectionTwo'
import { useState, useRef } from 'react'
import SectionThree from '../components/Section/SectionThree'
import FloatingImage from '../components/Element/FloatingImage'
import FloatingText from '../components/Element/FloatingText'
import ScrollBar from '../components/Element/ScrollBar'
import MainImage from '../components/Element/MainImage'

export default function Home() {
  const mainRef = useRef(null)
  const [openIcon, setOpenIcon] = useState(true)
  const [imageTransform, setImageTransform] = useState(0)
  const [floatingText, setFloatingText] = useState(0)
  const [floatingDrawing, setFloatingDrawing] = useState(0)
  const [transformCss, setTransformCss] = useState('')

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

  const handleOnWheel = (event) => {
    if (event.deltaY > 0) {
      // anime({
      //   targets: mainRef.current,
      //   translateY: '-100vh',
      //   delay: 1,
      //   loop: true,
      //   direction: 'alternate',
      //   easing: 'easeInOutSine',
      // })

      setTransformCss('translateY(-100vh)')
    } else {
      setTransformCss('translateY(0vh)')
    }
  }

  return (
    <div className="container-box" onWheel={handleOnWheel}>
      <Menu />
      <Bar />
      <ScrollBar floatingText={floatingText} />
      <FloatingText floatingText={floatingText} />
      <FloatingImage floatingDrawing={floatingDrawing} />
      <MainImage imageTransform={imageTransform} />
      <div
        style={{
          transform: transformCss,
          transition: '1s',
        }}
        ref={mainRef}
      >
        <SectionOne openIcon={openIcon} />
        <SectionTwo />
        <SectionThree openIcon={openIcon} />
      </div>
    </div>
  )
}
