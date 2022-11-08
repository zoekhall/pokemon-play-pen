const { Deck, User, Chat } = require('./index.js');


const obtainAllUsers = function () {
  User.find({});
};

const createUser = function (data) {
  User.create(data);
};

const findUser = (user, cb) => {
  User.find({username: { $regex: `${user}`}})
    .then(foundUsers=> cb(foundUsers))
    .catch(err => console.log(err));
};


module.exports = {
  obtainAllUsers,
  createUser,
  findUser
};
