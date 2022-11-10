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

const PokeImg = styled.img`
  position: center;
`;

const PokeName = styled.h4`
  position: center;
`;

const Buttons = styled.div`
  position: center;
`;

const Poke = ({selectPoke}) => {
  const [pokedex, setPokedex] = useState([]); //array of pokemon to be rendered 

  useEffect(() => { //retrieve pokemon list and set pokedex state to that data
    axios.get('/api/pokedex')
      .then(pokemon => {
        console.log('Pokemon Data Retrieved');
        console.log('pokedata in Poke', pokemon.data);
        setPokedex(pokemon.data);
      })
      .catch((err) => console.log('Pokemon Request FAILED:', err));
  }, []);

  return pokedex.map((pokemon, id) => {
    id++;
    return (
      <PokeEntry onClick={() => selectPoke(id)} >
        <PokeImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <PokeName>{pokemon.name}</PokeName>
        <Buttons>
          <button>Add { pokemon.name } as Favorite Pokemon</button>
          <button>View {`${pokemon.name}'s`} Stats</button>
          <button>View Cards Related to { pokemon.name }</button>
        </Buttons>
      </PokeEntry>
    );
  });
};

export default Poke;