import React, { useState, useRef } from 'react';
import './MusicPlayer.css'; // import your CSS file

const MusicPlayer = ({ songPath }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={songPath} />
      <button className='audiobtn' onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
