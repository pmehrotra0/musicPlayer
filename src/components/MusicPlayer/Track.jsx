import React from 'react';
import Seekbar from './Seekbar';

const Track = ({activeSong, value, min, max, onInput }) => (
  <div className="flex flex-col items-start justify-start">
    <div className="w-[50%]">
      <p className=" font-bold text-4xl">
        {activeSong?.name ? activeSong?.name : 'No active Song'}
      </p>
      <p className=" text-gray-300">
        {activeSong?.artist ? activeSong?.artist : 'No active Song'}
      </p>
    </div>
    <div className={`rounded-lg my-10 w-[50vh] h-[50vh] track-card`} style={{'--imageUrl': `url(https://cms.samespace.com/assets/${activeSong?.cover})`}}>
    </div>
    <Seekbar value={value}
        min={min}
        max={max}
        onInput={onInput}
      />
  </div>
);

export default Track;
