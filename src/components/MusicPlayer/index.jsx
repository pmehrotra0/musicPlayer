import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveSong, updatePlayPause } from '../../redux/actions/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Track from './Track';

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(updatePlayPause(false));
    } else {
      dispatch(updatePlayPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(setActiveSong({activeSong:currentSongs[(currentIndex + 1) % currentSongs.length], i:(currentIndex + 1) % currentSongs.length}))
  }

  const handlePrevSong = () => {
    dispatch(setActiveSong({activeSong:currentSongs[currentIndex === 0 ? currentSongs.length -1  : (currentIndex - 1) % currentSongs.length], i:currentIndex === 0 ? currentSongs.length -1 : (currentIndex - 1) % currentSongs.length}))
  }

  return (
      <div className="flex-1 flex flex-col items-center justify-start m-10 max-sm:m-0">
        <Track 
          activeSong={activeSong} 
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
        />
         <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
          value={volume} 
          min="0" 
          max="1" 
          onVolumeChange={(event) => setVolume(event.target.value)} 
        />
         <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
  );
};

export default MusicPlayer;
