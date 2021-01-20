import React from 'react';
import './Slot.css';

const SlotMachine = (props) => {

  // objects destructuring
  let x, y, z;
  x = props.x
  y = props.y
  z = props.z

  if ((x === y) && (y === z)) {
    return (
      <>
        <div className="slot__inner">
          <h1>{props.x} {props.y} {props.z}</h1>
          <h1>The is a Match</h1>
          <hr />
        </div>
      </>
    );
  }
  else {
    return (<>
      <div className="slot__inner">
        <h1>{props.x} {props.y} {props.z}</h1>
        <h1>Not Match</h1>
        <hr />
      </div>
    </>);
  }

}

const Slot = () => {
  return (<>
    <h1 className="heading__style">Welcome TO <span style={{ fontWeight: 'bold', color: 'green', textDecoration: 'underline' }}> Slot Machine Game </span></h1>
    <div className="slot__machine">
      <SlotMachine x='😊' y='❤' z='😂' />
      <SlotMachine x='🤷‍♀️' y='🤷‍♀️' z='🤷‍♀️' />
      <SlotMachine x='🎉' y='🎉' z='🎉' />
      <SlotMachine x='😜' y='✔' z='😜' />
    </div>
  </>);
}

export default Slot;