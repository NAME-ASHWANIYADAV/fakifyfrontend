import React, { useState } from 'react';
import '../styles/VideoPlayer.css';

// Import video files directly
import video1 from '../assets/ok.mp4';
import video2 from '../assets/ok2.mp4';
import video3 from '../assets/ok.mp4';

// Use the imported video files in the videos array
const videos = [video1, video2, video3];

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleDotClick = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="video-container">
      <div className="tv-effect">
        <video src={videos[currentVideo]} controls autoPlay loop className="video" />
      </div>
      <div className="dots">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentVideo === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;


