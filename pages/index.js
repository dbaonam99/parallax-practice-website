import ReactFullpage from '@fullpage/react-fullpage'

export default function Home() {
  const anchors = ['home']
  return (
    <div className="root">
      <ReactFullpage
        anchors={anchors}
        navigation={false}
        scrollingSpeed={1500}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <iframe
                  src="http://localhost:3000/ui"
                  width="900px"
                  height="560px"
                  frameBorder="0"
                  style={{ borderRadius: '20px' }}
                ></iframe>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
}
