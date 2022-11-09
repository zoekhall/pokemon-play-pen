const { addCard } = require('../db/dbHelperFuncs.js');

const { Router } = require('express');
const Deck = Router();

const axios = require('axios');

Deck.get('/', (req, res) => {
  // query param below for the request object from the front end
  // console.log('req', req.query.q);
  axios.get(`https://api.pokemontcg.io/v2/cards?q=name:"${req.query.q}"`)
    .then(data => {
      // console.log('DATAAA', data.data.data);
      const resArr = data.data.data.map((card) => {
        const resObj = {
          _id: card.id,
          name: card.name,
          image: card.images.small
        };
        return resObj;
      });
      return resArr;
    })
    .then(data => res.send(data));
  // res.send('hello and thank you');
});

Deck.post('/', (req, res) => {
  // console.log('TEST', req.user._id);
  const { q } = req.body.params;
  const cardObj = {
    cardId: q.id,
    userId: req.user._id,
    cardName: q.name,
    image: q.images.small
  };
  addCard(cardObj);
});

module.exports = { Deck };
