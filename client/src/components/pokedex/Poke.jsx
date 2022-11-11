import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PokeEntry = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  box-sizing: content-box;
  width: 200px;
  height: 50%;
  padding: 15px;
  margin: 25px;
  display: inline-block;
`;

const Contents = styled.div`
  display: grid;
  grid-template-rows: 100%, 100%, 100%, 100%, 100%;
  grid-row-gap: 10px;
  justify-items: center;
`;

const Poke = ({ selectPoke, getCards }) => {
  const [pokedex, setPokedex] = useState([]); //array of pokemon to be rendered 

  useEffect(() => { //retrieve pokemon list and set pokedex state to that data
    axios.get('/api/pokedex')
      .then(pokemon => {
        setPokedex(pokemon.data);
      })
      .catch((err) => console.log('Pokemon Request FAILED:', err));
  }, []);

  const sendUserId = (id) => {
    axios.post(`/api/user/favpokemon/${id}`)
      .then(data => console.log(data))
      .catch(err => console.log('Error Favoriting Pokemon', err));
  };

  return pokedex.map((pokemon, id) => {
    id++;
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (
      <PokeEntry>
        <Contents>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
          <h4>{pokemon.name}</h4>
          <button onClick={() => sendUserId(id)}>Add as Your Favorite</button>
          <button onClick={() => selectPoke(id)}>View {`${pokemon.name}'s`} Stats</button>
          <button onClick={() => getCards(pokemon.name)}>View {`${pokemon.name}'s`} Cards</button>
        </Contents>
      </PokeEntry>
    );
  });
};

export default Poke;