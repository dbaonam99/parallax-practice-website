export default function Home() {
  return (
    <div className="root">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <iframe
          src="/ui"
          width="900px"
          height="560px"
          frameBorder="0"
          style={{ borderRadius: '20px' }}
        ></iframe>
      </div>
    </div>
  )
}
