import React from 'react';

const PokeInfo = ({selectedPoke}) => {
  return (
    <div>
      <h2>{selectedPoke.name}</h2> 
        
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPoke.order}.png`} />

      <div>
        <h3>Type</h3>
        <ul>{selectedPoke.types.map(pokemon => {
          return (
            <h4>{pokemon.type.name}</h4>
          );
        })}</ul>
      </div>

      <div>
        <h3>Abilities</h3>
        <div>{selectedPoke.abilities.map(pokemon => {
          return (
            <h4>{pokemon.ability.name}</h4>
          );
        })}</div>
      </div>

      <div>
        <h3>Stats</h3>
        <ul>{selectedPoke.stats.map(pokemon => {
          return (
            <li>{pokemon.stat.name}: {pokemon.base_stat}</li>
          );
        })}</ul>
      </div>
      
    </div>
  );
};

export default PokeInfo;

//pokemon name
//pokemon image
//pokemon type 
//pokemon abilities
//pokemon stats - hp, attack, defense, special-attack, special-defense, speed