import React, { useState } from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = ({ value, min, max, onChange }) => {
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const toggleVolumeControl = () => {
    setShowVolumeControl(!showVolumeControl);
  };
  return (
  <div className="relative flex items-center flex-col">
    <div className='flex w-12 h-12 justify-center items-center border-transparent rounded-full music-player-menu bg-white/5 bg-opacity-80 backdrop-blur-sm '>
      <button onClick={toggleVolumeControl} className="focus:outline-none">
        {Number(value) <= 1 && Number(value) > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={toggleVolumeControl} />}
        {Number(value) <= 0.5 && Number(value) > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={toggleVolumeControl} />}
        {Number(value) === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={toggleVolumeControl} />}
      </button>
    </div>
     
      {showVolumeControl && (
        <div className="absolute bottom-32 transform -rotate-90  bg-white/5 bg-opacity-80 backdrop-blur-sm shadow-lg rounded p-2">
          
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="volume-slider w-40 h-2 bg-transparent rounded-lg overflow-hidden cursor-pointer"
        style={{ writingMode: 'bt-lr' }}
      />
    </div>)}
    
  </div>)
};

export default VolumeBar;
