import axios from 'axios';
import React, { useState } from 'react';
import Poke from './Poke.jsx';
import PokeInfo from './PokeInfo.jsx';

const Pokedex = () => {
  const [selectedPoke, setSelectedPoke] = useState({});
  const [pokeSelectedStatus, setPokeSelectedStatus] = useState(false);

  const selectPoke = (id) => {
    id++;
    axios.get(`/api/pokedex/${id}`)
      .then(pokemon => {
        console.log(`${pokemon.data.name} Retrieved`);
        setSelectedPoke(pokemon.data);
      })
      .catch(err => console.log('Error Retrieving Pokemon', err));
  };

  const renderView = () => {
    if (pokeSelectedStatus === true) {
      return <PokeInfo selectedPoke={selectedPoke} />;
    }
  };

  return (
    <div>
      <h1>The Pokédex!</h1>
      <div>{renderView()}</div>
      <Poke selectPoke={selectPoke}/>
    </div>
  );
};

export default Pokedex;