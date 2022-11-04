const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost/poke';

mongoose.connect(mongoUri)
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log('you did not connect to mongodb'));

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  deckId: String,
  favPokemon: String,
  salt: String
});

const chatSchema = new Schema ({
  reciever: {
    type: String,
    require: true,
  },
  sender: {
    type: String,
    require: true
  },
  message: String,
  date: String
});

const deckSchema = new Schema({
  cardId: String, 
  userId: String
});

const deckModel = mongoose.model('Deck', deckSchema);
const userModel = mongoose.model('User', userSchema);
const chatModel = mongoose.model('Chat', chatSchema);

const obtainAllUsers = function() {
  userModel.find({});
};

module.exports = {
  deckModel,
  userModel,
  chatModel,
  obtainAllUsers
};
