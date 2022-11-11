const { Router } = require('express');
const Pokedex = Router();
const axios = require('axios');
const url = 'https://pokeapi.co/api/v2/pokemon/';

Pokedex.get('/', (req, res) => {
  axios
    .get(`${url}?limit=151`)
    .then((pokemon) => {
      console.log('Request for Pokemon Data Sucessful');
      res.status(202);
      res.send(pokemon.data.results);
    })
    .catch((err) => {
      console.log('Request for Pokemon Data FAILED:', err);
      res.sendStatus(500);
    });
});

Pokedex.get('/:pokemonId', (req, res) => {
  const { pokemonId } = req.params;

  axios.get(`${url}${pokemonId}/`)
    .then(pokemon => {
      console.log(`Request for ${pokemon.data.name} Successful`);
      res.status(202);
      res.send(pokemon.data);
    })
    .catch((err) => {
      console.log('Request for Pokemon Data FAILED:', err);
      res.sendStatus(500);
    });
});



module.exports = { Pokedex };