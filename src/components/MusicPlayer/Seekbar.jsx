import React from 'react';

const Seekbar = ({ value, min, max, onInput}) => {

  return (
    <div className="hidden sm:flex flex-row items-center  w-full slidecontainer">
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="rounded-lg w-full slider"
      />

    </div>
  );
};

export default Seekbar;
