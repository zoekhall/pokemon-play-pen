const { Deck, User, Chat } = require('./index.js');


const obtainAllUsers = function () {
  User.find({});
};

const createUser = function (data) {
  User.create(data);
};


module.exports = {
  obtainAllUsers,
  createUser
};
