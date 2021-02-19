const GameOver = ({ resetGame }) => {
  return (
    <div className="game-over">
      <h2>Ooops... you lost. Sorry, Buddy.</h2>
      <button type="button" onClick={resetGame}>Play Again</button>
    </div>
  );
}

export default GameOver;