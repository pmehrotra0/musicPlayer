import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData }) => {
  const ref = useRef(null);

  useEffect(() =>{
    if (Object.keys(activeSong).length !== 0 && ref && ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  },[activeSong, isPlaying])
  

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.url}
      ref={ref}
      loop={false}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
