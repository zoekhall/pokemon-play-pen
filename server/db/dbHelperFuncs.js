const { Deck, User, Chat } = require('./index.js');


const obtainAllUsers = function () {
  User.find({});
};

const createUser = function (data) {
  User.create(data);
};

const obtainOneUser = function(id) {
  User.findById(id);
};

module.exports = {
  obtainAllUsers,
  createUser,
  obtainOneUser
};
