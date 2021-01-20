import React, { useState } from 'react';

const CurrentTime = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime)

  function changeTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  setInterval(() => {
    let x, y, z;
    changeTime();

    // change color
    x = Math.random() * 256
    y = Math.random() * 256
    z = Math.random() * 256

    let bgColor = `rgb(${x},${y},${z})`
    document.body.style.background = bgColor;
  }, 1000);

  return (
    <>
      <h2>{time}</h2>
    </>
  )
}

export default CurrentTime;