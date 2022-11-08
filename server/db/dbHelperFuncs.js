const { Deck, User, Chat } = require('./index.js');


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


module.exports = {
  obtainAllUsers,
  createUser,
  findUser
};
