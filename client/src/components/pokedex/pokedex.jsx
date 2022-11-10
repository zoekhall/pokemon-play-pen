import axios from 'axios';
import React, { useState, createContext } from 'react';
import Poke from './Poke.jsx';
import PokeInfo from './PokeInfo.jsx';

const Pokedex = () => {
  const [selectedPoke, setSelectedPoke] = useState({});
  const [pokeStatus, setPokeStatus] = useState(false);

  const selectPoke = (id) => {
    axios.get(`/api/pokedex/${id}`)
      .then(pokemon => {
        setSelectedPoke(pokemon.data);
        changePokeStatus(true);
      })
      .catch(err => console.log('Error Retrieving Pokemon', err));
  };

  const changePokeStatus = (bool) => {
    setPokeStatus(bool);
  };

  const renderView = () => {
    if (pokeStatus === true) {
      return <PokeInfo selectedPoke={selectedPoke} changePokeStatus={changePokeStatus} />;
    } else {
      return <Poke selectPoke={selectPoke} />;
    }
  };

  return (
    <div>
      <h1>The Pokédex!</h1>
      <div>
        <div>{renderView()}</div>
      </div>
    </div>
  );
};

export default Pokedex;
