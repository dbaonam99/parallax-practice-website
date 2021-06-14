import Menu from '../components/Element/Menu'
import Bar from '../components/Element/Bar'
import SectionOne from '../components/Section/SectionOne'
import SectionTwo from '../components/Section/SectionTwo'
import ReactFullpage from '@fullpage/react-fullpage'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import SectionThree from '../components/Section/SectionThree'

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
      <div
        className={clsx(
          'scroll',
          floatingText === 1 && 'scroll2',
          floatingText === 2 && 'scroll3'
        )}
      >
        <div className="scroll-item"></div>
      </div>
      <div
        className={clsx(
          'float-text',
          floatingText === 1 && 'float-text2',
          floatingText === 2 && 'float-text3'
        )}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      {floatingDrawing === 2 && (
        <div
          className={clsx(
            'float-drawing',
            floatingDrawing === 2 && 'float-drawing-2'
          )}
        >
          <img src="https://pix10.agoda.net/hotelImages/908722/-1/826ae52cda2279e339bb8fb769d97dee.jpg?s=1024x768"></img>
        </div>
      )}
      {floatingDrawing === 2 && (
        <div
          className={clsx(
            'float-drawing2',
            floatingDrawing === 2 && 'float-drawing2-2'
          )}
        >
          <img src="https://q4launch.com/wp-content/uploads/2018/01/luxury-pool-with-view-what-is-yield-management.jpeg"></img>
        </div>
      )}
      <div
        className={clsx(
          'car',
          imageTransform === 1 && 'carTransform',
          imageTransform === 2 && 'carTransform2'
        )}
      >
        <img src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png"></img>
      </div>
      <div
        className={clsx(
          'camp',
          imageTransform === 1 && 'campTransform',
          imageTransform === 2 && 'campTransform2'
        )}
      >
        <img src="https://i.ibb.co/tckLGz1/house-PNG50.png"></img>
      </div>
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
