import { useState, useRef, useEffect } from 'react'
import Menu from '../components/Element/Menu'
import Bar from '../components/Element/Bar'
import SectionOne from '../components/Section/SectionOne'
import SectionTwo from '../components/Section/SectionTwo'
import SectionThree from '../components/Section/SectionThree'
import FloatingImage from '../components/Element/FloatingImage'
import FloatingText from '../components/Element/FloatingText'
import ScrollBar from '../components/Element/ScrollBar'
import MainImage from '../components/Element/MainImage'
import Loading from '../components/Element/Loading'

export default function Home() {
  const mainRef = useRef(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [floatingDrawing, setFloatingDrawing] = useState(0)
  const [allowToWheel, setAllowToWheel] = useState(true)
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 4000)
  }, [])

  const handleOnWheel = (event) => {
    if (event.deltaY > 0) {
      if (allowToWheel) {
        if (currentSection === 0) {
          setCurrentSection(1)
          setAllowToWheel(false)
          setTimeout(() => {
            setAllowToWheel(true)
          }, 1500)
          setFloatingDrawing(1)
        }
      }
      if (allowToWheel) {
        if (currentSection === 1) {
          setCurrentSection(2)
          setAllowToWheel(false)
          setTimeout(() => {
            setAllowToWheel(true)
          }, 1500)
          setTimeout(() => {
            setFloatingDrawing(2)
          }, 200)
        }
      }
      if (allowToWheel) {
        if (currentSection === 2) {
          setAllowToWheel(false)
          setTimeout(() => {
            setAllowToWheel(true)
          }, 1500)
        }
      }
    } else {
      if (allowToWheel) {
        if (currentSection === 1) {
          setCurrentSection(0)
          setAllowToWheel(false)
          setFloatingDrawing(0)
          setTimeout(() => {
            setAllowToWheel(true)
          }, 1500)
        }
      }
      if (allowToWheel) {
        if (currentSection === 2) {
          setCurrentSection(1)
          setAllowToWheel(false)
          setFloatingDrawing(1)
          setTimeout(() => {
            setAllowToWheel(true)
          }, 1500)
        }
      }
    }
  }

  return (
    <div className="container-box" onWheel={handleOnWheel}>
      <Menu />
      <Loading showLoading={showLoading} />
      <Bar />
      <ScrollBar currentSection={currentSection} />
      <FloatingText currentSection={currentSection} />
      <FloatingImage floatingDrawing={floatingDrawing} />
      <MainImage currentSection={currentSection} />
      <div
        style={{
          transform: `translateY(-${100 * currentSection}vh)`,
          transition: '1.5s',
        }}
        ref={mainRef}
      >
        <SectionOne currentSection={currentSection} />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  )
}
