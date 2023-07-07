import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from './Navbar'

const WatchRewatchGame = () => {
  return (
    <>
      <Navbar />
      <div className='warpper__reactplayer'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UmIYanq5gH8"
          controls={true}
        />

        <div className="reactPlayer__suggestions">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3o7I0FxFNeQ"
            controls={true}
            className="reactplayeritem"
            height="200px"
            width="auto"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=fKaLhhPXy0g"
            controls={true}
            height="200px"
            width="auto"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jZY5cZWGWKE"
            controls={true}
            height="200px"
            width="auto"
          />
        </div>
      </div>
    </>

  );
}

export default WatchRewatchGame