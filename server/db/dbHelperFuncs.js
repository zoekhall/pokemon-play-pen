const db = require('mongoose');
const { Deck, User, Chat } = require('./index.js');


const obtainAllUsers = function () {
  User.find({});
};

const createUser = (data) => {
  User.create(data);
};

const findUser = user => {
  User.findOne({firstName: user})
    .then(data=> console.log(data));
};

const addCard = (card, cb) => {
  Deck.create(card)
    .catch(error => console.log(error));
};

module.exports = {
  obtainAllUsers,
  createUser,
  findUser,
  addCard
};
