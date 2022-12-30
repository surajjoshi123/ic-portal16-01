// import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
// import './MouseScroller';
import React from 'react';

import V1 from '../image/Homebanner1.mp4';

import './Crossfade.css';

class VideoDemo extends React.Component {
    

  getVideo = elem => {
    this.video = elem
  }

  playVideo = () => {
    this.video.play()
  };

  pauseVideo = () => {
    this.video.pause();
    
  };
  

  render = () => {
  return (

    <div className='parent-container'>
      
    <video ref={this.getVideo}  autoPlay loop muted style={{width:'100%', filter:'brightness(0.4)'}}>
      <source src={V1} type='video/mp4' />
    </video>
    <div className='homecover'>
      <h2>Immerse in the idea of INDIA</h2>
    </div>

    <div className='playnpause'>
          <button className='play-pause' onClick={this.playVideo}>
            Play
          </button>
          <button className='play-pause'  onClick={this.pauseVideo } >
             Pause
          </button>
        </div>
  </div>

  );

}
}

export default VideoDemo;