import React, { useState, useRef, useEffect } from 'react';

const AudioDuration = ({ audioUrl }) => {
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [audioUrl]);

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} />
      <p>{Math.floor(duration/60)}:{(duration%60).toFixed(0)}</p>
    </div>
  );
};

export default AudioDuration;
