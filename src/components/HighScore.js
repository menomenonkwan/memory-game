const HighScore = ({ highScore}) => {
  return (
    <div className="high-score">
      <p>High Score: <span>{highScore}</span></p>
    </div>
  );
}

export default HighScore;