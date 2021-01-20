import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category"> A Netflix Original Series</span>
          <h3 className="card__title">{props.name}</h3>
          <p className="card__season">{props.season}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
