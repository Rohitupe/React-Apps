import React, { useState } from 'react';

const CurrentDate = () => {
  let currentDate = new Date().toLocaleDateString();

  const [date, setDate] = useState(currentDate);

  function changeDate() {
    let currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  }

  setInterval(changeDate, 1000);

  return (
    <>
      <h2>{date}</h2>
    </>
  )
}

export default CurrentDate;