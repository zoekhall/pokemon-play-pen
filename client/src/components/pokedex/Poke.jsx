import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
      <div onClick={() => selectPoke(id)} >
        {pokemon.name}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      </div>
    );
  });
};

export default Poke;