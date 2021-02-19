import React from 'react';

const Winner = ({ resetGame }) => {
  return (
    <React.Fragment>
      <p>You got all the flags! Kudos.</p>
      <button className="new-game" type="button" onClick={resetGame}>Play Again</button>
      <div className="victory">
        <h1>WooHoo! Victory is YOURS!!!</h1>
      </div>
    </React.Fragment>
  );
}

export default Winner;