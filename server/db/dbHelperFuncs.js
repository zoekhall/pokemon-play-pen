const db = require('mongoose');
const { Deck, User, Chat } = require('./index.js');


const obtainAllUsers = function () {
  User.find({});
};

const createUser = function (data) {
  User.create(data);
};


const findUser = (user, cb) => {
  User.find({ username: { $regex: `${user}` } })
    .then(foundUsers => cb(foundUsers))
    .catch(err => console.log(err));
};

const findUserById = id => {
  User.findById(id)
    .then(data => data)
    .catch(err => console.log(err, 'find by id err'));
};

const changeUsername = (loggedInId, newName) => { //DOES NOT WORK
  User.findByIdAndUpdate(
    loggedInId,
    { username: newName })
    .then(data => data)
    .catch(err => console.log(err));
};

const changeDescription = (loggedInId, newDescription) => {
  User.findByIdAndUpdate(
    loggedInId,
    { description: newDescription })
    .then(data => data)
    .catch(err => console.log(err));
};

const addCard = (card, cb) => {
  Deck.create(card)
    .catch(error => console.log(error));
};

module.exports = {
  obtainAllUsers,
  createUser,
  findUser,
  findUserById,
  changeUsername,
  changeDescription,
  addCard
};
