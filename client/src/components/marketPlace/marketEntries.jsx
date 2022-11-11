import React from 'react';
import { Link } from 'react-router-dom';

const MarketEntries = ({ card }) => {
  

  return (
    <div>
      <img src={card.image} alt={card.cardName} width="100"/>
      <p>{ card.cardName }</p>
      <Link to={'/compose:' + card.userId} >
        <button>Contact User</button>
      </Link>
    </div>
  );
};

export default MarketEntries;