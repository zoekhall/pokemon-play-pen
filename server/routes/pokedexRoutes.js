const { Router } = require('express');
const Pokedex = Router();
const axios = require('axios');

Pokedex.get('/', (req, res) => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then((pokemon) => {
      //console.log('Request for Pokemon Data Sucessful');
      res.status(202);
      res.send(pokemon.data.results);
    })
    .catch((err) => {
      console.log('Request for Pokemon Data FAILED:', err);
      res.sendStatus(500);
    });
});

// Pokedex.get('/pic', (req, res) => {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${req.id}/`)
//     .then((pokemon) => {
//       console.log('Request for Pokemon Data Sucessful');
//       res.status(202);
//       res.send(pokemon.data.results);
//     })
//     .catch((err) => {
//       console.log('Request for Pokemon Data FAILED:', err);
//       res.sendStatus(500);
//     });
// });


module.exports = { Pokedex };
