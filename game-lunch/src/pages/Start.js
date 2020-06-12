import React from 'react';
import logo from './logo.svg';
import './css/Start.css';

function Start() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p></p>
        <a className="App-link"
          href="/menu"> 메뉴 </a>
      <p></p>
        <a className="App-link"
          href="/game"> 시작 </a>

    </header>
  );
}

export default Start;