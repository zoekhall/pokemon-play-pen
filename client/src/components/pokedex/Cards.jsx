import React from 'react';
import styled from 'styled-components';

const CardSect = styled.div`
  display: inline-block;
`;

const Card = styled.div`
  margin: 25px;
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
              <Card>
                <PokeCard src={card.images.small} alt={`${card.name} was not found!`} />
                <br></br>
                <button>Add {`${card.name}`} to MarketPlace</button>   
              </Card>
            </CardSect>
          );
        })}
      </div>
    </div>
  );  
};

export default Cards; 