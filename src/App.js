import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HighScore from './components/HighScore';
import Board from './components/Board';
import Instructions from './components/Instructions';
import Footer from './components/Footer';
import Flags from './components/assets/Flags';
import { Shuffle } from './components/assets/Utils';

function App() {
  const [playGame, setPlayGame] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [data, setData] = useState(Flags);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const reshuffle = () => {
    setData(Shuffle(data));
  }

  useEffect(() => {
    reshuffle();
  }, []);

  const start = (play) => {
    setPlayGame(play);
    setWinner(false);
    setScore(0);
    setGameOver(false);
    data.forEach(flag => flag.clicked = false);
  }

  const checkHighScore = (score) => {
    if(score > highScore) {
      setHighScore(score);
    }
  }

  return (
    <div className="App">
      <Nav start={start} />
      <HighScore highScore={highScore}/>
      {!playGame && <Instructions start={start}/>}
      {playGame &&
        <Board 
        score={score}
        setScore={setScore}
        checkHighScore={checkHighScore} 
        data={data}
        setData={setData}
        winner={winner}
        setWinner={setWinner}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />       
      }
      <Footer />
    </div>
  );
}

export default App;
