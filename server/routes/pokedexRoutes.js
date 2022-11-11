const { Router } = require('express');
const Pokedex = Router();
const axios = require('axios');
const url = 'https://pokeapi.co/api/v2/pokemon/';

//GET ALL POKEMON NAMES
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

<<<<<<< HEAD
//GET ONE POKEMAN OBJECT 
=======
//GET ONE POKEMAN OBJECT
>>>>>>> 170c1c956bb1f72f3a70ea34173951be51a0729a
Pokedex.get('/:pokemonId', (req, res) => {
  const { pokemonId } = req.params;

  axios
    .get(`${url}${pokemonId}/`)
    .then((pokemon) => {
      console.log(`Request for ${pokemon.data.name} Successful`);
      res.status(202);
      res.send(pokemon.data);
    })
    .catch((err) => {
      console.log('Request for Pokemon Data FAILED:', err);
      res.sendStatus(500);
    });
});

//GET POKEMON CARDS
Pokedex.get('/card/:pokemonName', (req, res) => {
<<<<<<< HEAD
  const { pokemonName } = req.params; 
=======
  const { pokemonName } = req.params;
>>>>>>> 170c1c956bb1f72f3a70ea34173951be51a0729a

  axios
    .get(`https://api.pokemontcg.io/v2/cards?q=name:*${pokemonName}*`)
    .then((pokemon) => {
      console.log(`Request for ${pokemonName} Cards Successful`);
      res.status(202);
      res.send(pokemon.data);
    })
    .catch((err) => {
      console.log('Request for Pokemon Card Data FAILED:', err);
      res.sendStatus(500);
    });
});

<<<<<<< HEAD
module.exports = { Pokedex };
=======
module.exports = { Pokedex };
>>>>>>> 170c1c956bb1f72f3a70ea34173951be51a0729a
