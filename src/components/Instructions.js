const Instructions = ({ start }) => {
  return (
    <div className="instructions">
      <h2>instructions...</h2>
      <p>
        A test of memory. Pick a flag and you earn 1 point. After a quick shufflin', pick another flag and earn another point. Easy Peasy! The catch is that you cannot select a flag more than once.  
      </p>
      <button type="button" onClick={() => start(true)}>Start Game</button>
    </div>
  );
}

export default Instructions;