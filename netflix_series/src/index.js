import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Nav from './Nav';
import netflixData from './netflix_data/Data';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Nav />
      {netflixData.map((data, index) =>
        <App key={index} name={data.name} season={data.seasons} img={data.img} link={data.link} />
      )}
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
