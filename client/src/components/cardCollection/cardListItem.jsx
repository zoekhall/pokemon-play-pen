import React from 'react';
import axios from 'axios';

const CardListItem = ({ card }) => {
  // console.log('card', card);
  const handleAddCard = card => {
    axios.post('/api/deck', { params: { q: card } })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h3>{card.name}</h3>
      <img src={card.images.small} alt={`${card.name} was not found!`}></img>
      <div>
        <button onClick={() => { handleAddCard(card); }}>
          Add {card.name} to Marketplace
        </button>
      </div>
    </div>
  );
};

export default CardListItem;