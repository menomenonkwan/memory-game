import Homer from './assets/images/homer.png';
import React from 'react';

const Nav = ({ start }) => {
  return (
    <nav>
      <img src={Homer} alt="Thinking Homer"/>
      <h1>The Memory Game</h1>
      <ul>
        <li onClick={() => start(true)}>Play Game</li>
        <li onClick={() => start(false)}>Instructions</li>
      </ul>
    </nav>
  );
}

export default Nav;