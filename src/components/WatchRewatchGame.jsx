import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from './Navbar'

const WatchRewatchGame = () => {
  return (
    <>
      <Navbar />
      <div className='warpper__reactplayer'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8YSrNfcKvA0&ab_channel=Olympics"
          controls={true}
        />

        <div className="reactPlayer__suggestions">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8YSrNfcKvA0&ab_channel=Olympics"
            controls={true}
            className="reactplayeritem"
            height="200px"
            width="auto"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8YSrNfcKvA0&ab_channel=Olympics"
            controls={true}
            height="200px"
            width="auto"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8YSrNfcKvA0&ab_channel=Olympics"
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