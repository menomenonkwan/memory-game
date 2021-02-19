import React, { useState, useEffect } from 'react';
import { Shuffle } from './assets/Utils';
import Card from './Card';
import GameOver from './GameOver';
import Winner from './Winner';

const Board = ({ score, setScore, checkHighScore, data, setData, winner, setWinner }) => {
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {    
    setData(Shuffle(data));
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('hide'));
    const timer = setTimeout(() => {
      cards.forEach(card => card.classList.remove('hide'));
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [data]);

  useEffect(() => {
    if(score === data.length) {
      checkHighScore(score);
      setWinner(true);
    }
  }, [data]);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const resetGame = () => { 
    setScore(0);
    setWinner(false);
    setGameOver(false); 
    data.forEach(flag => flag.clicked = false);
  }

  const endGame = () => {
    setGameOver(true);
    data.forEach(flag => flag.clicked = false);
  }

  const handleCardClick = async (id) => {
    const clickedFlag = data.find(flag => flag.id === id);
    if(clickedFlag.clicked) {
      checkHighScore(score);
      endGame();
      return;
    }

    clickedFlag.clicked = true;
    setData([ ...data ]);
    incrementScore();
  }

  return (
    <div className="gameboard">
      <h2>Score: <span>{score}</span></h2>
      {gameOver 
        ? <GameOver resetGame={resetGame}/> 
        : winner 
          ? <Winner resetGame={resetGame}/>
          : <div className="board">
              {data.map(flag => (
                <Card key={flag.id} flag={flag} handleCardClick={handleCardClick}/>
              ))}
            </div>
          
      }
    </div>
  );
}

export default Board;