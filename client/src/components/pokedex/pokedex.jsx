import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokedex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    axios
      .get('/api/pokedex')
      .then((pokemon) => {
        setPokeData(pokemon.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const clickName = (pokeName) => {
    setPokemon(pokeName);
    //console.log(pokeName);
  };

  return (pokeData.map((pokemon) => {
    return (
      <div>
        <div onClick={() => clickName(pokemon.name)}>{pokemon.name}</div>
      </div>
    );
  }));
};

export default Pokedex;

//get the list of all pokemon names
//render the names of the pokemon
//when a pokemon name is clicked - display <Pokemon>

//be able to exit out of view??
//add favorite pokemon
//view relevant pokemon cards
