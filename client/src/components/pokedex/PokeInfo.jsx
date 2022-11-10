import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
  display: grid;
  grid-template-rows: 100%, 100%, 100%, 100%, 100%;
  grid-row-gap: 10px;
  justify-items: start;
`;

const AbilityContent = styled.div`
  display: grid;
  grid-template-rows: 100%, 100%, 100%, 100%, 100%;
  grid-row-gap: 10px;
  justify-items: start;  
`
const TypeContent = styled.div`
  display: grid;
  grid-template-rows: 100%, 100%, 100%, 100%, 100%;
  grid-row-gap: 10px;
  justify-items: start;  
`

const PokeInfo = ({ selectedPoke, changePokeStatus }) => {
  
  selectedPoke.name = selectedPoke.name.charAt(0).toUpperCase() + selectedPoke.name.slice(1);

  return (
    <div>
      <button onClick={() => changePokeStatus(false)}>x</button>  
      <Contents>
        <h3>{selectedPoke.name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPoke.order}.png`} />

        <div>
          <h3>Type</h3>
          <TypeContent>{selectedPoke.types.map(pokemon => {
            return (
              <h4>{pokemon.type.name}</h4>
            );
          })}</TypeContent>
        </div>

        <div>
          <h3>Abilities</h3>
          <AbilityContent>{selectedPoke.abilities.map(pokemon => {
            return (
              <h4>{pokemon.ability.name}</h4>
            );
          })}</AbilityContent>
        </div>

        <div>
          <h3>Stats</h3>
          <ul>{selectedPoke.stats.map(pokemon => {
            return (
              <li>{pokemon.stat.name}: {pokemon.base_stat}</li>
            );
          })}</ul>
        </div>
      
      </Contents>
    </div>
  );
};

export default PokeInfo;

//pokemon name
//pokemon image
//pokemon type 
//pokemon abilities
//pokemon stats - hp, attack, defense, special-attack, special-defense, speed