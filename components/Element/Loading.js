import React from 'react'

function Loading({ showLoading }) {
  return (
    <div
      className="loading"
      style={{
        opacity: showLoading ? 1 : 0,
        visibility: showLoading ? 'visible' : 'hidden',
      }}
    >
      <div className="loading-icon"></div>
    </div>
  )
}

export default Loading
