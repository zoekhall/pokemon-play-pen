import React from 'react';
import styled from 'styled-components';

const CardSect = styled.div`
  padding: 10px;
  margin: 15px;
  display: inline-block;
`;

const PokeCard = styled.img`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Cards = ({ pokeCards, changePokeCardDisplay }) => {

  return (
    <div>
      <button onClick={() => changePokeCardDisplay(false)}>x</button>
      <div>
        {pokeCards.map(card => {
          return (
            <CardSect>
              <PokeCard src={card.images.small} alt={`${card.name} was not found!`}/>
              <h6>{card.name}</h6>            
            </CardSect>
          );
        })}
      </div>
    </div>
  );  
};

export default Cards; 