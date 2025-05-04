  import React from 'react'
  import './styles.sass'

  const MuseumVideo = () => {
    return (
      <div className="museum-video">
        <div className="container">
        <video
          src="http://fast-api.mukhamedov.uz/download/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className='video'
        />
        </div>
      </div>
    )
  }

  export default MuseumVideo