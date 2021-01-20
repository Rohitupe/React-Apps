import React from 'react';
import './Clock.css';
import CurrentTime from './CurrentTime';
import CurrentDate from './CurrentDate';

const Clock = () => {

  return (
    <div className='container'>
      <CurrentTime />
      <CurrentDate />
    </div>
  )
}

export default Clock;