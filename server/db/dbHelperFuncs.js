const { Deck, User, Chat } = require('./index.js');
const db = require('mongoose');

const obtainAllUsers = function () {
  User.find({});
};

const createUser = function (data) {
  User.create(data);
};

const findUser = user => {
  User.findOne({firstName: user})
    .then(data=> console.log(data));
};

const findUserById = id => {
  User.findById(id)
    .then(data => data)
    .catch(err => console.log(err, 'find by id err'));
};

const changeUsername = (loggedInId) => { //DOES NOT WORK
  User.findOneAndUpdate(
    { _id: loggedInId },
    { username: 'NOT SHLOME' }
  );
};

module.exports = {
  obtainAllUsers,
  createUser,
  findUser,
  findUserById,
  changeUsername
};
