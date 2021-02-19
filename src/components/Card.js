import React from 'react';

const Card = ({ flag, handleCardClick }) => {
  const handleClick = (e) => {
    handleCardClick(flag.id);
  }

  return (
    <div className="card" data-name={flag.name} onClick={handleClick}>
      <img src={`https://www.countryflags.io/${flag.code}/shiny/64.png`} alt={flag.name} />
      <p>{flag.name}</p>
    </div>
  );
}

export default Card;