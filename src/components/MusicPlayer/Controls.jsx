import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import VolumeBar from './VolumeBar';
import { GoKebabHorizontal } from "react-icons/go";

const Controls = ({ isPlaying, handlePlayPause, handlePrevSong, handleNextSong,value,  min, max, onVolumeChange }) => (
  <div className='flex flex-row py-4 w-full justify-between max-sm:py-4 max-sm:my-0 '>
    <div className='flex w-12 h-12 justify-center items-center border-transparent rounded-full music-player-menu bg-white/5 bg-opacity-80 backdrop-blur-sm '>
      <GoKebabHorizontal />
    </div>
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
      {isPlaying ? (
        <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
    </div>
    <VolumeBar
      value={value}
      min={min}
      max={max}
      onChange={onVolumeChange} 
    /> 
  </div>
);

export default Controls;
