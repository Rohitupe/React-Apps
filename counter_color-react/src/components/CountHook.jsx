import React, { useState } from 'react';
import './CountHook.css'

const CountHook = () => {
  let [count, setCount] = useState(0);

  let btnCount = () => {
    let x, y, z;
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);

    let bgColor = `rgb(${x},${y},${z})`
    document.body.style.background = bgColor;
    setCount(count + 1);
  }
  let btnClear = () => {
    document.body.style.background = "rgb(255,255,255)";
    setCount(count = 0)
  }
  return (
    <>
      <div className='container'>
        <h2 className='heading'> {count} </h2>
        <div className='btn'>
          <button onClick={btnCount} className='_btn'>Click Me</button>
          <button onClick={btnClear} className='_btn'>Clear</button>
        </div>
      </div>
    </>
  );
}

export default CountHook;